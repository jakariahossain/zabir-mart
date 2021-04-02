import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jhony",
    email: "johny@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "masud",
    email: "masude@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
