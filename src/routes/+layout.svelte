<script>
    import "../global.css";
    import DashedCurve from "../components/DashedCurve.svelte";
    import Navbar from "../components/Navbar.svelte";

    const pageTitle = "Lucas Chardonnet";
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<DashedCurve />
<Navbar />
<slot />
