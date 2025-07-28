// /lib/hash.ts
import bcrypt from 'bcryptjs'

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

export const comparePassword = async (plain: string, hashed: string) => {
  return bcrypt.compare(plain, hashed)
}
