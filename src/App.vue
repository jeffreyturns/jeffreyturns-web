<template>
    <v-app>
        <NavBar />
        <MainLayout />
        <Footer />
    </v-app>
</template>

<style scoped>
    @import "../src/assets/global.css";
</style>

<script>
    import Footer from "./components/system/Footer.vue";
    import NavBar from "./components/system/NavBar.vue";
    import MainLayout from "./components/system/MainLayout.vue";

    export default {
        components: {
            NavBar,
            Footer,
            MainLayout,
        },
        data() {
            return {};
        },
    };
</script>