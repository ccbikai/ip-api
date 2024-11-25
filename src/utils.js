const EMOJI_FLAG_UNICODE_STARTING_POSITION = 127397
export function getFlag(countryCode) {
  const regex = new RegExp('^[A-Z]{2}$').test(countryCode)
  if (!countryCode || !regex) return void 0
  try {
    return String.fromCodePoint(
      ...countryCode
        .split('')
        .map((char) => EMOJI_FLAG_UNICODE_STARTING_POSITION + char.charCodeAt(0))
    )
  } catch (error) {
    return void 0
  }
}
