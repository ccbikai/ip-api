import { json } from '@vercel/edge'

export default {
  fetch(request) {
    const ip = request.headers.get('cf-connecting-ip')
    const { pathname } = new URL(request.url)
    console.log(ip, pathname)
    if (pathname === '/geo') {
      const geo = {
        city: request.cf.city,
        country: request.cf.country,
        flag: request.cf.country,
        countryRegion: request.cf.region,
        region: request.cf.colo,
        latitude: request.cf.latitude,
        longitude: request.cf.longitude,
        asOrganization: request.cf.asOrganization
      }
      console.log(geo)
      return json({
        ip,
        ...geo
      })
    }
    return new Response(ip)
  }
}
