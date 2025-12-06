import { User, Snippet, UserPlan, SnippetCategory } from '@prisma/client'

// Re-export Prisma types
export type { User, Snippet, UserPlan, SnippetCategory }

// Extended types
export type SafeUser = Omit<User, 'password'>

export interface SnippetWithUser extends Snippet {
  user: SafeUser
}

// Form types
export interface CreateSnippetInput {
  title: string
  description?: string
  code: string
  category: SnippetCategory
  tags?: string[]
}

export interface UpdateSnippetInput extends Partial<CreateSnippetInput> {
  id: string
  isFavorite?: boolean
}

// Filter types
export interface SnippetFilters {
  category?: SnippetCategory
  tags?: string[]
  isFavorite?: boolean
  search?: string
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
