export async function fetchGitHubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: { Accept: "application/vnd.github.v3+json" }
    });

    if (!response.ok) {
      return [];
    }

    const repos = await response.json();
    return Array.isArray(repos)
      ? repos
          .filter((repo: any) => {
            if (repo.fork || repo.archived) return false;
            if (repo.name?.toLowerCase() === "video_downloader") return false;
            try {
              const homepage = new URL(repo.homepage);
              return homepage.protocol === "https:" || homepage.protocol === "http:";
            } catch {
              return false;
            }
          })
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language
          }))
      : [];
  } catch {
    return [];
  }
}
