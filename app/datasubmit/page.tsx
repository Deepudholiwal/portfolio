import type { Metadata } from "next";
import AdminPage from "../admin/page";

export const metadata: Metadata = {
  title: "Form Submissions | Deepak Yadav",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DataSubmitPage() {
  return <AdminPage />;
}
