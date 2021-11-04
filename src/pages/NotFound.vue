<template>
    <div>
        <v-container fluid>
            <v-row class="py-16" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                        Oppsie... 404?
                    </div>
                    <div class="pt-2 mx-12 text-h6 text-center font-weight-medium">
                        The page you requested does not exist.
                    </div>
                    <div class="text-center py-8">
                        <v-btn text class="text-none secondaryContainer" to="/" color="text--onSecondaryContainer">
                            Go home
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img class="rounded-xl" aspect-ratio="1.1" :src="site + 'headers/image_4.png'"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Constants from "../config/constants";

    export default {
        data() {
            return {
                site: Constants.BASE_URL,
            };
        },
    };
</script>