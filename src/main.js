import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";

import "normalize.css/normalize.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// 视频插件
// import VueVideoPlayer from "@videojs-player/vue";
// import "video.js/dist/video-js.css";

// 引入全局组件
// import NavBar from "./components/NavBar.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$axios = axios;
app.use(ElementPlus);
// app.use(VueVideoPlayer);

// 注册全局组件
// app.component("NavBar", NavBar);

app.mount("#app");
