export interface GithubRepo{
    id:number;
    name:string;
    description:string;
    html_url:string;
    stargazers_count:number;
    language:string;
    homepage:string;
    fork:boolean;
    updated_at?:string;
}
export async function fetchGithubRepos(): Promise<GithubRepo[]> {
  try {
    const data = await fetch(
      "https://api.github.com/users/omersengull/repos?sort=updated",
      { next: { revalidate: 3600 } },
    );
    if (!data.ok) {
      console.error("Veri çekilemedi : ", data.status);
      return [];
    }
    const repos: GithubRepo[] = await data.json();
    return Array.isArray(repos) ? repos : [];
  } catch (error) {
    console.error("Bir hata oluştu : ", error);
    return [];
  }
}
