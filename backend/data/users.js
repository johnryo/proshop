// Not part of Proshop project - use with caution along with seeder.js!!

import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Jones',
    email: 'jjones@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Smith',
    email: 'jsmith@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users