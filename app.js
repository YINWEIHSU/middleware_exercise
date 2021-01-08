// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {

  console.log('middleware 1 start')
  const reqTime = new Date()

  setTimeout(() => {
    next()
  }, 1500)

  // next()

  res.on('finish', () => {
    const resTime = new Date()
    let totalTime = resTime - reqTime

    console.log('--1--')
    console.log(`${reqTime.toLocaleString()} | ${req.method} from ${req.url} | total time: ${totalTime}ms`)
    console.log('--1--')
    console.log('middleware 1 end')
  })

  res.on('error', () => {
    console.error(error)
  })
})

app.use(function (req, res, next) {

  console.log('middleware 2 start')
  const reqTime = new Date()

  next()

  res.on('finish', () => {
    const resTime = new Date()
    let totalTime = resTime - reqTime

    console.log('--2--')
    console.log(`${reqTime.toLocaleString()} | ${req.method} from ${req.url} | total time: ${totalTime}ms`)
    console.log('--2--')
    console.log('middleware 2 end')
  })

  res.on('error', () => {
    console.error(error)
  })
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