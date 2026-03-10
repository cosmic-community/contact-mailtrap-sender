export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type: string
  created_at: string
  modified_at: string
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}