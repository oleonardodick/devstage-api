import { redis } from '../redis/client'

interface AccessInviteLinkParams {
  subscriberId: string
}
export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
/*
    Sempre que essa função for chamada, irá adicionar +1 na chave que está
    sendo passada, no caso o que vem no subscriberId
*/

/*tipos de dados que o redis aceita
chave/valor
lists [] (comandos que começam com L)
hashes {} (comandos que começam com h)
sorted sets [likes: number] (comandos que começam com z)
json
...
*/
