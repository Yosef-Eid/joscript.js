import { jo } from "../../jo/jo"


function footer() {
  return (
    jo('h1', { class: 'nav', t: 'FOOTER' }, {width:'100%',color:'white'} )
  )
}

export default footer
