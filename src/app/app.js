import { jo } from "../jo/jo.js";
import {users} from '../app/data.js';

export default function Home() {
  return jo("div", {
    children: [
      
      jo("div", {
        children: [
          jo("h1", {t: "Home" }),
          jo("ul", { children: [
              ...users.map(user => (
                jo("li", {
                  children: [
                    jo("a", { onclick: () => history.pushState({}, '', `${user.id}`) , href: `/${user.id}`, t: `Name: ${user.name}` }),
                    jo("span", { t: `Email: ${user.email}` }),
                  ]
                })
              ))
            ]
          })
        ]
      },),
    ]
  },);
}
