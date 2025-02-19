import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscribersInviteClicks } from '../functions/get-subscriber-invite-clicks'

export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/clicks',
      {
        schema: {
          summary: 'Get subscriber invite clicks count',
          operationId: 'getSubscriberLinkAccessCount',
          tags: ['referral'],
          description: 'Route description',
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            201: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params

        const { count } = await getSubscribersInviteClicks({ subscriberId })

        return { count }
      }
    )
  }
