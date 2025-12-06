import "next-auth"
import "next-auth/jwt"
import { UserPlan } from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
      plan: UserPlan
    }
  }

  interface User {
    id: string
    email: string
    name?: string | null
    image?: string | null
    plan: UserPlan
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    plan: UserPlan
  }
}
