import { redis } from '../redis/client'

interface GetSubscribersInviteClicksParams {
  subscriberId: string
}
export async function getSubscribersInviteClicks({
  subscriberId,
}: GetSubscribersInviteClicksParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
