// https://adventjs.dev/es/challenges/2022/3

function distributeGifts(packOfGifts, reindeers) {
    let weightPacks = packOfGifts.map((pack) => pack.length)
    let weightReindeers = reindeers.map((reindeer) => 2 * reindeer.length)
    let totalWeightPacks = weightPacks.reduce((acc, curr) => acc + curr)
    let totalWeightReindeers = weightReindeers.reduce((acc, curr) => acc + curr)
    return Math.floor(totalWeightReindeers / totalWeightPacks)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]
  
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
  
console.log(distributeGifts(packOfGifts, reindeers))