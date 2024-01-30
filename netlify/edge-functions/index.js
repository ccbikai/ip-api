import { getFlag } from '../../src/utils.js'
import { CORS_HEADERS } from '../../src/config.js'

export const config = { path: "/*" };

export default (req, ctx) => {
  const ip = ctx.ip
  const { pathname } = new URL(req.url)
  console.log(ip, pathname)
  if (pathname === '/geo') {
    const geo = {
      city: ctx.geo?.city,
      country: ctx.geo?.country?.name,
      flag: getFlag(ctx.geo?.country?.code),
      countryRegion: ctx.geo?.subdivision?.name,
      region: ctx.server?.region,
      latitude: ctx.geo?.latitude,
      longitude: ctx.geo?.longitude
    }
    console.log(geo)
    return ctx.json({
      ip,
      ...geo
    }, {
      headers: {
        ...CORS_HEADERS,
        'x-client-ip': ip
      }
    })
  }
  return new Response(ip, {
    headers: {
      ...CORS_HEADERS,
      'x-client-ip': ip
    }
  })
}
