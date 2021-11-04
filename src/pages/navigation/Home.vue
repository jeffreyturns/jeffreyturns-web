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
            <v-card v-for="item in items" :key="item.project" flat v-ripple color="surfaceVariant" :to="'project/' + item.project" class="rounded-lg my-4 text--onSurfaceVariant">
                <v-sheet color="transparent" flat class="hidden-md-and-up pa-0">
                    <v-img :aspect-ratio="12/9" :src="site + item.preview" class="rounded-t-lg ma-0" lazy-src="../../assets/placeholder.svg"></v-img>
                    <v-list-item class="pa-2">
                        <v-list-item-content class="pa-4">
                            <div class="text-h5 font-weight-bold pb-4">{{ item.title }}</div>
                            <div class="text-subtitle1 font-weight-medium pb-4">{{ item.description }}</div>
                            <v-flex>
                                <v-chip v-for="tag in item.tags" :key="tag" style="border-radius: 8px;" outlined class="font-weight-medium me-2 my-1" text-color="onSurface" color="outline">{{ tag }}</v-chip>
                            </v-flex>
                        </v-list-item-content>
                    </v-list-item>
                </v-sheet>
                <v-sheet color="transparent" flat class="hidden-sm-and-down">
                    <v-list-item class="ps-8 px-0">
                        <v-list-item-content class="pa-2">
                            <div class="text-h2 font-weight-bold pb-12">{{ item.title }}</div>
                            <div class="text-subtitle1 font-weight-medium pb-6">{{ item.description }}</div>
                            <v-flex>
                                <v-chip v-for="tag in item.tags" :key="tag" style="border-radius: 8px;" outlined class="font-weight-medium me-2 my-1" text-color="onSurface" color="outline">{{ tag }}</v-chip>
                            </v-flex>
                        </v-list-item-content>
                        <v-img :aspect-ratio="12/9" max-height="450" max-width="600" :src="site + item.preview" class="rounded-r-lg" lazy-src="../../assets/placeholder.svg"></v-img>
                    </v-list-item>
                </v-sheet>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import Constants from "../../config/constants";

    export default {
        data() {
            return {
                items: [],
                site: Constants.BASE_URL,
            };
        },
        created() {
            fetch(Constants.BASE_URL + "favorites" + ".json")
                .then((response) => response.json())
                .then((data) => (this.items = data))
                .catch((err) => {
                    console.log(err);
                });
        },
    };
</script>