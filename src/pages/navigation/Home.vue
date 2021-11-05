<template>
    <div>
        <v-container fluid>
            <v-row class="pt-16" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <div class="pt-2 pb-2 text-h6 text-center font-weight-medium">
                        Hello hi, hello hi
                    </div>
                    <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                        I'm Jeffrey Turns
                    </div>
                    <div class="pt-2 mx-12 text-h6 text-center font-weight-medium">
                        Android Developer & UX/UI Designer
                    </div>
                    <div class="text-center py-8">
                        <v-btn text class="text-none secondaryContainer font-weight-bold" to="/about" color="text--onSecondaryContainer">
                            About me
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img class="rounded-xl" aspect-ratio="1.1" :src="site + 'headers/image_1.png'"></v-img>
                </v-col>
            </v-row>
            <v-row class="pt-16" align="center" justify="center">
                <v-col cols="12">
                    <div class="pt-2 pb-16 text-h2 text-center font-weight-bold">
                        My favorite projects
                    </div>
                </v-col>
            </v-row>
            <ProjectSection :items="items" />
        </v-container>
    </div>
</template>

<script>
    import ProjectSection from "../../components/section/ProjectSection.vue";
    import FavoritesProjectsModel from "../../common/FavoriteProjectsModel";
    import Constants from "../../config/constants";

    export default {
        components: {
            ProjectSection 
        },
        data() {
            return {
                site: Constants.BASE_URL,
            };
        },
        computed: {
            items: () => FavoritesProjectsModel.list,
        },
        mounted() {
            FavoritesProjectsModel.getData();
        }
    };
</script>
