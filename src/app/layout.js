import { jo } from "../jo/jo.js";
import footer from "./components/footer.js";
import nav from "./components/nav.js";

export default function Layout({ children }) {
  return jo("div", {style:{hight:'100vh'}, children:[
    nav(),
    children,
    footer(),
  ]});
}
