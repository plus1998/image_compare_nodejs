const fs = require('fs')
const path = require('path')
const { dissimilarity } = require('../cv')

const randomOne = (arr) => arr[Math.floor(Math.random() * arr.length)]

async function test() {
  const imgs = fs.readdirSync(path.join(__dirname, './image')).filter(o => !o.startsWith('.'));
  for (let i = 0; i < 10000; i++) {
    const img1 = randomOne(imgs)
    const img2 = randomOne(imgs)
    const title = `${img1} 对比 ${img2}`
    console.time(title)
    const result = await dissimilarity(path.join(__dirname, `./image/${img1}`), path.join(__dirname, `./image/${img2}`))
    console.timeEnd(title)
    console.log(`相异度为 ${result} ${result < 10 ? '几乎为同一张' : '' }\n`)
  }
}

test()