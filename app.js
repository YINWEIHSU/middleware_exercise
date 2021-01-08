// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {

  const reqTime = new Date()

  res.on('finish', () => {
    const resTime = new Date()
    let totalTime = resTime - reqTime

    console.log(`Request time: ${reqTime.toLocaleString()}`)
    console.log(`Response time: ${resTime.toLocaleString()}`)
    console.log(`${reqTime.toLocaleString()} | ${req.method} from ${req.url} | total time: ${totalTime}ms`)
    console.log('---')
  })

  res.on('error', () => {
    console.error(error)
  })

  setTimeout(() => {
    next()
  }, 5000)
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})