<script lang="ts">
    import { onMount } from "svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";
    import type { Project } from "../../types";

    const maxRows: number = 2;
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

    onMount(fetchPinnedProjects);
</script>

<section>
    {#each Array(projects.length / 2) as _, column}
        <div>
            {#each projects.slice(column * maxRows, column * maxRows + maxRows) as project}
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
