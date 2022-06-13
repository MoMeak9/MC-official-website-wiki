import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LightWorld Wiki",
  description: "辉光世界 Wiki",

  base: "/",

  theme,
});
