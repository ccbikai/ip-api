import { getFlag } from './utils'
import { CORS_HEADERS } from './config'

export default {
  fetch(request) {
    const ip = request.headers.get('cf-connecting-ipv6') || request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip')
    const { pathname } = new URL(request.url)
    console.log(ip, pathname)
    if (pathname === '/geo') {
      const country = request.cf?.country || request.headers.get('cf-ipcountry')
      const colo = request.headers.get('cf-ray')?.split('-')[1]
      const geo = {
        flag: country && getFlag(country),
        country: country,
        countryRegion: request.cf?.region || request.headers.get('cf-region'),
        city: request.cf?.city || request.headers.get('cf-ipcity'),
        region: request.cf?.colo || colo,
        latitude: request.cf?.latitude || request.headers.get('cf-iplatitude'),
        longitude: request.cf?.longitude || request.headers.get('cf-iplongitude'),
        asOrganization: request.cf?.asOrganization || request.headers.get('x-asn'),
      }
      console.log(geo)
      return Response.json({
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
}
