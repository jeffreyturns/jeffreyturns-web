<template>
    <div>
        <div v-if="!isFailedLoad">
            <v-card class="rounded-xl hidden-sm-and-down" style="margin: auto;" width="1064" flat color="elevation1">
                <v-img :aspect-ratio="12/4.5" :src="site + items.header">
                    <v-container fill-height fluid>
                        <v-row align="center" class="ms-16">
                            <v-col cols="12" lg="6">
                                <div class="text-h2 font-weight-bold" v-bind:class="[items.isLightHeader ? 'white--text' : 'black--text']">
                                    {{ items.title }}
                                </div>
                                <div class="pt-4 text-h6 font-weight-medium" v-bind:class="[items.isLightHeader ? 'white--text' : 'black--text']">
                                    {{ items.description }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-img>
            </v-card>
            <v-card class="rounded-xl hidden-md-and-up" flat color="transparent">
                <v-img :aspect-ratio="1/1" :src="site + items.header">
                    <v-container fill-height fluid>
                        <v-row align="center" class="pa-4">
                            <v-col cols="12" lg="6">
                                <div class="text-h2 font-weight-bold" v-bind:class="[items.isLightHeader ? 'white--text' : 'black--text']">
                                    {{ items.title }}
                                </div>
                                <div class="pt-4 text-h6 font-weight-medium" v-bind:class="[items.isLightHeader ? 'white--text' : 'black--text']">
                                    {{ items.description }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-img>
            </v-card>
            <v-card color="transparent" flat class="pa-0" v-for="item in items.sections" :key="item.mockup">
                <v-layout primary--text align-center column justify-center>
                    <v-card flat color="surfaceVariant" width="1064">
                        <v-card-text class="onBackground--text text-h4 font-weight-medium" v-if="item.title != 0"> {{ item.title }}</v-card-text>
                        <v-card-text class="onBackground--text text-body-1" v-if="item.description != 0"> {{ item.description }} </v-card-text>
                    </v-card>
                </v-layout>
                <v-layout primary--text align-center column justify-center>
                    <v-img :src="site + item.mockup" lazy-src="../assets/placeholder.svg" width="1064" :aspect-ratio="12/9" align-center class="mx-16 my-6 rounded" v-if="item.mockup != 0"></v-img>
                </v-layout>
            </v-card>
        </div>
        <div v-if="isFailedLoad">
            <v-container fluid>
                <v-row class="py-16" align="center" justify="center">
                    <v-col cols="12" lg="6">
                        <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                            Something went wrong
                        </div>
                        <div class="pt-2 mx-12 text-h6 text-center font-weight-medium">
                            This project page does not exsist.
                        </div>
                        <div class="text-center py-8">
                            <v-btn text class="text-none secondaryContainer" to="/" color="text--onSecondaryContainer">
                                Go home
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="4">
                        <v-img
                            class="rounded-xl"
                            src="https://images.unsplash.com/photo-1634038035803-ff9735b5969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg5MTc3OQ&ixlib=rb-1.2.1&q=80&w=1080"
                        ></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    import Constants from "../config/constants";

    export default {
        data() {
            return {
                items: [],
                site: Constants.BASE_URL,
                isFailedLoad: false,
            };
        },
        mounted() {
            !this.isFailedLoad ? (this.$route.meta.title = this.upperCaseFirstLetter(this.$route.params.project.toString())) : false;
        },
        created() {
            fetch(Constants.BASE_URL + "/projects/" + this.$route.params.project.toString() + ".json")
                .then((response) => response.json())
                .then((data) => (this.items = data))
                .catch((err) => {
                    this.textError = err;
                    console.log(err);
                    this.isFailedLoad = true;
                });
        },
        methods: {
            upperCaseFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
        },
    };
</script>