import { jo } from '../../jo/jo'
import { users } from '../../app/data'

function page() {
  const id = location.pathname.slice(1)
  const user = users.find(user => user.id == id)  
  if (!user) return jo("div", { t: "User not found" })

  return (
    jo("div", {
      children: [
        jo("p", { t: `Name: ${user.name}` }),
        jo("p", { t: `Email: ${user.email}` }),
      ]
    })
  )
}

export default page


