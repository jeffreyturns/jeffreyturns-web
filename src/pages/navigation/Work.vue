<template>
    <div>
        <v-container fluid>
            <v-row class="pt-16" align="center" justify="center">
                <v-col cols="12">
                    <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                        My favorite projects
                    </div>
                    <div class="pt-4 pb-16 text-h6 text-center font-weight-medium">
                        A Collection of my Work
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-tabs tra background-color="transparent" centered v-model="tab">
            <v-tabs-slider color="primary" class="custom-slider"></v-tabs-slider>
            <v-tab v-for="item in tabs" :key="item" class="text-none font-weight-bold">
                {{ item }}
            </v-tab>
        </v-tabs>

        <v-divider class="outline" style="opacity: 0.3;"></v-divider>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <ProjectSection :items="items.android" />
            </v-tab-item>
            <v-tab-item>
                <ProjectSection :items="items.design" />
            </v-tab-item>
            <v-tab-item>
                <ProjectSection :items="items.web" />
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<style scoped>
    .custom-slider {
        width: 100% !important;
        height: 5px !important;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
</style>

<script>
    import ProjectSection from "../../components/section/ProjectSection.vue";
    import Constants from "../../config/constants";

    export default {
        components: {
            ProjectSection,
        },
        data() {
            return {
                tab: null,
                site: Constants.BASE_URL,
                items: [],
                tabs: ["Android", "Design", "Web"],
            };
        },
        created() {
            fetch(Constants.BASE_URL + "projects" + ".json")
                .then((response) => response.json())
                .then((data) => (this.items = data))
                .catch((err) => {
                    console.log(err);
                });
        },
    };
</script>