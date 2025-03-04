import { jo } from "../jo/jo.js";

import nav from "./components/nav.js";

export default function Home() {

  return jo("div", {
    style:{minHight:'50svh', background:'black', color:'white'},
    children: [
      jo("div", { children: [
        jo("h1", { t: "Home" }),
        
      ] },),
    ]
  },);
}
