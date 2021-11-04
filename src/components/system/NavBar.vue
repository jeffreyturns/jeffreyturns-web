<template>
    <div>
        <v-navigation-drawer class="rounded-r" v-model="drawer" temporary app color="elevation1">
            <v-list rounded dense>
                <v-list-item-group active-class="secondaryContainer text--onSecondaryContainer">
                    <v-list-item :to="item.to" v-for="(item, i) in navigation" :key="i">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar v-scroll="onScroll" :class="extPad" flat :color="appBarBackground" app>
            <v-btn class="mx-1 hidden-md-and-up" v-if="!isArrowBackEnabled" color="onSurface" @click="drawer = !drawer" icon><v-icon>menu</v-icon></v-btn>
            <v-img alt="Logo" class="hidden-sm-and-down shrink mr-4" v-if="!isArrowBackEnabled" contain :src="this.$vuetify.theme.dark ? logo_dark : logo_light" width="40" />
            <v-btn icon color="onBackground" class="mx-1" v-else @click="goBack()"><v-icon>arrow_back</v-icon></v-btn>

            <v-toolbar-title class="font-weight-black hidden-sm-and-down">{{ this.isArrowBackEnabled ? upperCaseFirstLetter(this.$route.params.project) : "Jftrns" }}</v-toolbar-title>
            <v-spacer><v-toolbar-title class="font-weight-black flex text-center hidden-md-and-up">{{ this.isArrowBackEnabled ? upperCaseFirstLetter(this.$route.params.project) : "Jftrns" }}</v-toolbar-title></v-spacer>

            <v-sheet color="transparent" v-if="!isArrowBackEnabled">
                <v-btn class="mx-1 font-weight-bold text-none hidden-sm-and-down" active-class="secondaryContainer" v-for="nav in navigation" :key="nav.title" :to="nav.to" text color="text--onSecondaryContainer" rounded>
                    {{ nav.title }}
                </v-btn>
            </v-sheet>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="theme()" class="mx-1" color="onSurface" icon v-bind="attrs" v-on="on">
                        <v-icon>{{ ($vuetify.theme.dark) ? 'dark_mode' : 'light_mode' }}</v-icon>
                    </v-btn>
                </template>
                <span>Change theme</span>
            </v-tooltip>
        </v-app-bar>
    </div>
</template>

<style scoped>
    .v-btn--active::before {
        opacity: 0;
    }
</style>

<script>
    import Constants from "../../config/constants";

    export default {
        data() {
            return {
                appBarBackground: "surface",
                isAppBarCollapsed: false,
                scroll_fab: false,
                values: Constants.NO_ROOT_PATHS,
                dialog: false,
                drawer: false,
                isArrowBackEnabled: false,
                logo_light: require("../../assets/logo/logo_light.svg"),
                logo_dark: require("../../assets/logo/logo_dark.svg"),
                navigation: Constants.ROOTS,
            };
        },
        watch: {
            $route(to) {
                this.$vuetify.goTo(0);
                this.enableArrowBack(to.name);
            },
        },
        methods: {
            onScroll(e) {
                if (typeof window === "undefined") return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                this.scroll_fab = top > 100;
                if (top > 1) {
                    this.appBarBackground = "elevation2";
                    this.isAppBarCollapsed = true;
                } else {
                    this.isAppBarCollapsed = false;
                    this.appBarBackground = "surface";
                }
            },
            tes(index) {
                this.activeItem = index;
            },
            theme() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
            },
            enableArrowBack(str) {
                if (this.values.includes(str)) {
                    this.isArrowBackEnabled = true;
                } else {
                    this.isArrowBackEnabled = false;
                }
            },
            goBack() {
                this.$router.go(-1);
            },
            upperCaseFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
        },
        mounted() {
            this.$vuetify.theme.dark = localStorage.getItem("dark_theme") == "true";
        },
        created() {
            this.enableArrowBack(this.$route.name);
            fetch(Constants.BASE_URL + "footer" + ".json")
                .then((response) => response.json())
                .then((data) => (this.footer = data))
                .catch((err) => {
                    console.log(err);
                });
        },
        computed: {
            extPad() {
                switch (this.$vuetify.breakpoint.name) {
                    case "xs":
                        return "px-0";
                    case "sm":
                        return "px-0";
                    case "md":
                        return "px-8";
                    case "lg":
                        return "px-8";
                    case "xl":
                        return "px-8";
                    default:
                        return "px-8";
                }
            },
        },
    };
</script>