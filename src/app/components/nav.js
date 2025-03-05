import { jo } from "../../jo/jo.js"


function nav() {
  return (
    jo("nav", { class: "w-full h-20 bg-purple-600 flex items-center justify-around text-white", children:[
        jo("a", { t: "Home", href: "/" }),
        jo("a", { t: "About", href: "/about" }),
        jo("a", { t: "Contact", href: "/contact" }),
    ]})
)
}

export default nav
