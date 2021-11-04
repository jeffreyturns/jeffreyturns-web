<template>
    <div>
        <v-main class="background">
            <v-container class="pa-6" fluid>
                <v-scroll-y-transition leave-absolute>
                    <router-view :class="extPad" />
                </v-scroll-y-transition>
            </v-container>
            <transition name="scale-transition">
                <v-btn fab small class="rounded" fixed right bottom v-scroll="onScroll" color="secondaryContainer" v-show="scroll_fab" @click="toTop()">
                    <v-icon color="onSecondaryContainer">expand_less</v-icon>
                </v-btn>
            </transition>
        </v-main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scroll_fab: false,
            };
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
            toTop() {
                this.$vuetify.goTo(0);
            },
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