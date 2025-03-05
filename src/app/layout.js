import { jo } from "../jo/jo.js";

export default function Layout({ children }) {
  return jo("div", {style:{hight:'100vh'}, children:[
    children,
  ]});
}
