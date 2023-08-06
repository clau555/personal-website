<script>
    import "../global.css";
    import DashedCurve from "./DashedCurve.svelte";
    import Navbar from "./Navbar.svelte";

    const pageTitle = "Lucas Chardonnet";
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<DashedCurve />
<Navbar />
<slot />
