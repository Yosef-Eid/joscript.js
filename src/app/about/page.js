import { jo } from "../../jo/jo";

export default function Home() {

  return jo("div", {
    style:{minHight:'50svh', background:'black', color:'white'},
    children: [
      jo("div", { children: [
        jo("h1", { t: "Aboutttttttt" }),
        
      ] },),
    ]
  },);
}
