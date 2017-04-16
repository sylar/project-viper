const request = require('request')
const cheerio = require('cheerio')
const randomstring = require('randomstring')
const url = 'https://watch5s.is/movie/the-sorcerers-apprentice/watch/'
const md5 = require('md5')

const getMovie = () => new Promise((resolve, reject) => request({
  url
}, (err, response, body) => {
  if (err) {
    return reject(`err:${err}`)
  }
  const $ = cheerio.load(body)
  const playurl = $('.les-content a').attr('href')
  const id = $('input[name="episodeID"]').attr('value')
  const token = randomstring.generate(8)
  const key = md5('!@#$%^&*(' + id + token)
  const value = md5(token + url + id)
  const cookieString = `${key}=${value}`

  request({
    url: `https://play.watch5s.is/grabber-api/episode/${id}?token=${token}`,
    headers: {
      cookie: cookieString,
      referer: url
    }
  },
  (err, res) => {
    if (err) {
      return reject(`err:${err}`)
    }
    resolve(JSON.parse(res.body))
  })
}
))

module.exports = {
  getMovie
}
