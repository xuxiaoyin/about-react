const expresss = require('express')

const app = expresss ()

app.get('/students', (req, res) => {
  const stus = [{ name: '测试', age: 20}, { name: '测试1', age: 30}]
  res.send(stus)
})

app.listen(8090, (err) => {
  if (!err) {
    console.log('服务器ok了')
  }
})
