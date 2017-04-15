var request = require("request"),
cheerio = require("cheerio"),
randomstring = require('randomstring')
url = 'https://watch5s.is/movie/the-sorcerers-apprentice/watch/',
md5 = require('md5');


const getMovie = () => new Promise(resolve => request({
  url
}, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
    playurl = $('.les-content a').attr('href'),
    id = $('input[name="episodeID"]').attr('value'),
    token = randomstring.generate(8),
    key = md5('!@#$%^&*(' + id + token),
    value = md5(token + url + id),
    cookieString=`${key}=${value}`

      request({
        url: `https://play.watch5s.is/grabber-api/episode/${id}?token=${token}`,
        headers: {
            cookie: cookieString,
            referer: url
         }
      },
      (err, res) => resolve(JSON.parse(res.body)))

  } else {
    console.log("We’ve encountered an error: " + error);
  }
}
))

module.exports = {
  getMovie
}
