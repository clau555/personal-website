<script lang="ts">
    import { onMount } from "svelte";
    import ProjectCard, { type Project } from "../../components/ProjectCard.svelte";

    const MAX_ROWS: number = 2;
    const WHITELIST: string[] = ["seaside", "color-transfer", "goodoo"];
    let projects: Project[] = [];

    async function fetchPinnedProjects(): Promise<void> {
        await fetch(`https://api.github.com/users/clau555/repos`)
            .then((response) => response.json())
            .then((repos) => {
                projects = repos
                    .filter((project: Project) => WHITELIST.includes(project.name))
                    .sort((a: Project, b: Project) => b.stargazers_count - a.stargazers_count);
            })
            .catch((error) => console.error("Error fetching pinned projects :", error));
    }

    onMount(fetchPinnedProjects);
</script>

<section>
    {#each Array(Math.ceil(projects.length / 2)) as _, column}
        <div>
            {#each projects.slice(column * MAX_ROWS, column * MAX_ROWS + MAX_ROWS) as project}
                <ProjectCard {project} />
            {/each}
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
    }

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>
