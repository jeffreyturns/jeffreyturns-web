import Vue from "vue";
import Constants from "../config/constants";

export default new Vue({
    data() {
        return {
            list: [],
        };
    },
    methods: {
        getData() {
            fetch(Constants.BASE_URL + "projects" + ".json")
                .then((response) => response.json())
                .then((data) => (this.list = data))
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});
