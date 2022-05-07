import { prisma } from "../../prisma";
import { FeedbacksRepository, FreedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {

  async create({ type, comment, screenshot }: FreedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot
      }
    })
  }
}