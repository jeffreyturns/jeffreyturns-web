<template>
    <div>
        <v-container fluid>
            <v-row class="py-16" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                        Contact Me
                    </div>
                    <div class="pt-2 mx-12 text-h6 text-center font-weight-medium">
                        Why not get in touch if you have a intresting idea?
                    </div>
                    <div class="text-center py-8">
                        <v-btn text class="text-none secondaryContainer font-weight-bold mx-2" href="https://t.me/jeffreyturns" color="text--onSecondaryContainer">
                            Telegram
                        </v-btn>
                        <v-btn text class="text-none secondaryContainer font-weight-bold mx-2" href="mailto:jeffreyturns@protonmail.com" color="text--onSecondaryContainer">
                            Email
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-img class="rounded-xl" aspect-ratio="1.1" :src="site + 'headers/image_3.png'"></v-img>
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