const BASE_URL = "https://raw.githubusercontent.com/Jeffrey01596/portfolio/main/static/";
const NO_ROOT_PATHS = ["Project"];
const ROOTS = [
    { title: "Home", to: "/", icon: "home" },
    { title: "About", to: "/about", icon: "info" },
    { title: "Work", to: "/work", icon: "work" },
    { title: "Contact", to: "/contact", icon: "mail" },
];

export default {
    BASE_URL: BASE_URL,
    NO_ROOT_PATHS: NO_ROOT_PATHS,
    ROOTS: ROOTS,
};
