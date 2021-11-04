<template>
    <div>
        <v-container fluid>
            <v-row class="pt-16" align="center" justify="center">
                <v-col cols="12" lg="6" class="pa-4">
                    <div class="pt-2 pb-2 text-h2 font-weight-bold">
                        This is Me, and my Story
                    </div>
                    <div class="pt-2 pb-2 text-h6 font-weight-medium">
                        Hello, i'm Jeffrey Turns. Currently studying as a computer engineer. Android development is my hobby but i want to turn it into a job. I'm also intrested in Telegram contests and web-development.
                    </div>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img class="rounded-xl" aspect-ratio="1.1" :src="site + 'headers/image_2.png'"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Constants from "../../config/constants";

    export default {
        data() {
            return {
                site: Constants.BASE_URL,
            };
        },
    };
</script>