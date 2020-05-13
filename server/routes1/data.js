const Mock  = require('mockjs')
const Random = Mock.Random

module.exports = () => {
  const data = {routes1Data: []}
  for (let i = 0; i < 40; i++) {
    data.routes1Data.push({
      id: i,
      productId: i,
      exampleId: Random.natural(1, 2),
      productName: Random.ctitle(),
      productDesc: Random.cparagraph(),
      productImage: Random.image('400x240'),
      productNum: Random.natural(1, 1000),
      productPrice: Random.float(1, 1000),
      marketPrice: Random.float(1, 1000),
      addTime: Random.datetime(),
      source: Random.ctitle(),
      productLink: Random.url('http')
    })
  }
  return data
}
