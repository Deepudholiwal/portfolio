export async function fetchGitHubRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=20&sort=updated`, {
    headers: { Accept: "application/vnd.github.v3+json" }
  });

  if (!response.ok) {
    return [];
  }

  const repos = await response.json();
  return Array.isArray(repos)
    ? repos
        .filter((repo: any) => !repo.fork)
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stars: repo.stargazers_count
        }))
    : [];
}
