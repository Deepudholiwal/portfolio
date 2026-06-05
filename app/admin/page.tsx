"use client";

import { useMemo, useState, type FormEvent } from "react";

const statusOptions = ["New", "Contacted", "Qualified", "Closed"];

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  country?: string | null;
  budget?: string | null;
  service: string;
  message?: string | null;
  status: string;
  source?: string;
  createdAt: string;
};

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(dateString));
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const authHeaders = useMemo(
    () => ({ "x-admin-password": password }),
    [password]
  );

  const leadSummary = useMemo(() => {
    const counts = { New: 0, Contacted: 0, Qualified: 0, Closed: 0 }; 
    for (const lead of leads) {
      if (counts[lead.status as keyof typeof counts] !== undefined) {
        counts[lead.status as keyof typeof counts] += 1;
      }
    }
    return counts;
  }, [leads]);

  const filteredLeads = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    return leads.filter((lead) =>
      !lowerQuery ||
      lead.name.toLowerCase().includes(lowerQuery) ||
      lead.email.toLowerCase().includes(lowerQuery) ||
      lead.service.toLowerCase().includes(lowerQuery) ||
      lead.status.toLowerCase().includes(lowerQuery)
    );
  }, [leads, query]);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/leads", {
        method: "GET",
        headers: authHeaders
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setIsAuthorized(false);
        setError(payload?.error || `Admin API responded with ${response.status}`);
        return;
      }

      if (!payload?.success) {
        setIsAuthorized(false);
        setError(payload?.error || "Unable to load leads.");
        return;
      }

      setLeads(payload.leads || []);
      setSelectedLead(payload.leads?.[0] ?? null);
      setIsAuthorized(true);
      setError(null);
    } catch (err: any) {
      setIsAuthorized(false);
      setError(err?.message ? `Admin API error: ${err.message}` : "Unable to connect to admin API.");
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    await loadLeads();
  };

  const updateStatus = async (id: string, status: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: {
          ...authHeaders,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, status })
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.error || "Unable to update status.");
      } else {
        await loadLeads();
      }
    } catch (err: any) {
      setError(err?.message || "Unable to update status.");
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/leads", {
        method: "DELETE",
        headers: {
          ...authHeaders,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.error || "Unable to delete lead.");
      } else {
        await loadLeads();
      }
    } catch (err: any) {
      setError(err?.message || "Unable to delete lead.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setPassword("");
    setLeads([]);
    setSelectedLead(null);
    setIsAuthorized(false);
    setError(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10 rounded-[40px] border border-white/10 bg-slate-950/80 p-10 shadow-soft backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Admin Control Center</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Manage leads clearly and confidently.</h1>
          <p className="mt-4 max-w-3xl text-slate-400">A polished admin dashboard with search, lead details, status controls, and quick metrics designed for real lead management.</p>
        </div>

        {!isAuthorized ? (
          <form className="glass-panel rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-soft" onSubmit={handleAuth}>
            <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="input-field"
                aria-label="Admin password"
              />
              <button type="submit" className="button-primary disabled:cursor-not-allowed disabled:opacity-60" disabled={loading || password.length === 0}>
                {loading ? "Checking…" : "Unlock dashboard"}
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-400">Need help? Make sure the password in your `.env` file matches `ADMIN_PASSWORD`.</p>
            {error ? <p className="mt-4 rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p> : null}
          </form>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Total leads</p>
                <p className="mt-4 text-4xl font-semibold text-white">{leads.length}</p>
              </div>
              <div className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">New</p>
                <p className="mt-4 text-4xl font-semibold text-white">{leadSummary.New}</p>
              </div>
              <div className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contacted</p>
                <p className="mt-4 text-4xl font-semibold text-white">{leadSummary.Contacted}</p>
              </div>
              <div className="glass-panel rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Qualified / Closed</p>
                <p className="mt-4 text-4xl font-semibold text-white">{leadSummary.Qualified + leadSummary.Closed}</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <div className="glass-panel w-full rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Lead list</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">All leads</h2>
                  </div>
                  <button
                    type="button"
                    onClick={loadLeads}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    Refresh
                  </button>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name, email, service or status"
                    className="input-field flex-1"
                  />
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full divide-y divide-white/5 text-left text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-400">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Service</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">View</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="transition hover:bg-white/5">
                            <td className="px-4 py-4 font-medium text-white">{lead.name}</td>
                            <td className="px-4 py-4 text-slate-300">{lead.email}</td>
                            <td className="px-4 py-4 text-slate-300">{lead.service}</td>
                            <td className="px-4 py-4 text-slate-300">{lead.status}</td>
                            <td className="px-4 py-4">
                              <button
                                type="button"
                                onClick={() => setSelectedLead(lead)}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-500">
                            No leads match your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}
              </div>

              <div className="glass-panel w-full rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Lead details</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{selectedLead ? selectedLead.name : "Select a lead"}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>

                {selectedLead ? (
                  <div className="mt-6 space-y-5 text-slate-300">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-900/70 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
                        <p className="mt-2 font-medium text-white">{selectedLead.email}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-900/70 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Phone</p>
                        <p className="mt-2 font-medium text-white">{selectedLead.phone}</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-900/70 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Company</p>
                        <p className="mt-2 font-medium text-white">{selectedLead.company || "N/A"}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-900/70 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Location</p>
                        <p className="mt-2 font-medium text-white">{selectedLead.country || "N/A"}</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-slate-900/70 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Budget</p>
                        <p className="mt-2 font-medium text-white">{selectedLead.budget || "N/A"}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-900/70 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Submitted</p>
                        <p className="mt-2 font-medium text-white">{formatDate(selectedLead.createdAt)}</p>
                      </div>
                    </div>

                    <div className="rounded-[28px] bg-slate-900/70 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Message</p>
                      <p className="mt-3 whitespace-pre-line text-slate-200">{selectedLead.message || "No message provided."}</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={() => deleteLead(selectedLead.id)}
                        className="rounded-full bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/15"
                      >
                        Delete lead
                      </button>
                      <button
                        type="button"
                        onClick={loadLeads}
                        disabled={loading}
                        className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Refresh leads
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 rounded-[28px] border border-dashed border-white/10 bg-slate-900/60 p-8 text-center text-slate-500">
                    Select a lead from the table to view full contact details and actions.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
