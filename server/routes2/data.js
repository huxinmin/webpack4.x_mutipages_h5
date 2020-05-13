const Mock  = require('mockjs')
const Random = Mock.Random

module.exports = () => {
  const data = {routes2Data: []}
  for (let i = 0; i < 40; i++) {
    data.routes2Data.push({
      id: i,
      itemId: i,
      exampleId: Random.natural(1, 2),
      icon: Random.image('400x240'),
      label: Random.ctitle(),
    })
  }
  return data
}
