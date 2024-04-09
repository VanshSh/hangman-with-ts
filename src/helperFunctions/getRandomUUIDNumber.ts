export default function getRandomUUIDNumber() {
  const uuid = self.crypto.randomUUID()
  return uuid
}
