<script lang="ts">
    import ProjectCard from "../../components/ProjectCard.svelte";
    import type { Project } from "../../types";

    const rows: number = 2;
    const columns: number = 3;

    let projects: Project[] = [];

    async function fetchPinnedProjects(): Promise<void> {
        try {
            // fetch from random repo maintained by one guy found to fit my need,
            // hope it doesn't break :S
            const response = await fetch(
                `https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=clau555`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const responseData = await response.json();
            projects = responseData.response;
        } catch (error) {
            console.error("Error fetching pinned projects:", error);
        }
    }

    fetchPinnedProjects();
</script>

<section>
    {#each Array(columns) as _, index}
        <div>
            {#each projects.slice(index * rows, index * rows + rows) as project}
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
        align-items: flex-start;
        gap: 8px;
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>
