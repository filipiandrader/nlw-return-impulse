export interface FreedbackCreateData {
  type: string
  comment: string
  screenshot?: string
}

export interface FeedbacksRepository {
  create: (data: FreedbackCreateData) => Promise<void>
}