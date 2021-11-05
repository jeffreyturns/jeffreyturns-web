<template>
    <div>
        <v-footer class="ma-6" color="transparent" padless>
            <v-card flat color="elevation1" tile width="100%" class="text-center rounded">
                <v-card-text class="pa-0">
                    <v-layout class="flex justify-center grow">
                        <v-img alt="Logo" class="shrink ma-2" contain :src="this.$vuetify.theme.dark ? logo_dark : logo_light" width="44" />
                    </v-layout>
                    <v-layout class="flex justify-center grow">
                        <v-card-subtitle>
                            Jftrns is a portfolio personal website by Jeffrey Turns, all content protected by copyright.
                        </v-card-subtitle>
                    </v-layout>
                    <v-btn v-for="item in footer" :key="item.title" class="text-none text-decoration-underline mx-1" color="primary" :href="item.url" text>
                        {{ item.title }}
                    </v-btn>
                    <v-divider class="my-4 mx-16 surfaceVariant"></v-divider>
                </v-card-text>
                <v-card-text class="onSurface--text">© Jeffrey Turns 2020 — {{ new Date().getFullYear() }}</v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    import FooterModel from "../../common/FooterModel";

    export default {
        data() {
            return {
                logo_light: require("../../assets/logo/logo_light.svg"),
                logo_dark: require("../../assets/logo/logo_dark.svg"),
            };
        },
        computed: {
            footer: () => FooterModel.list,
        },
        mounted() {
            FooterModel.getData();
        },
    };
</script>
