'use strict'
const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'last_access=' + Date.now() +  ';expires=Mon, 07, Jan 2036 00:00:00 GMT;' )
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : new Date()
  res.end(new Date(last_access_time).toString())
})
const port = 8000
server.listen(port, () => {
  console.info('サーバーが次のポートで稼働しているよ...' + port )
})