import { jo } from "../../jo/jo.js"


function nav() {
  return (
    jo("nav", { class: "nav", children:[
        jo("a", { t: "Home", href: "/" }),
        jo("a", { t: "About", href: "/about" }),
        jo("a", { t: "Contact", href: "/contact" }),
    ]})
)
}

export default nav
