import { jo } from "../jo/jo.js";


export default function Home() {
  return jo("div", { class:'flex flex-col justify-center items-center gap-12 h-screen',
    children: [
      jo("h1", {t: "welcome to joscript", class:'font-bold text-4xl'}),
      jo("img", {src: "/joscript-logo.png", id:'jo', width: "150px"}),
    ]
  },);
}
