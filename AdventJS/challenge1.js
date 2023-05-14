// https://adventjs.dev/es/challenges/2022/1

const gifts = ['cat', 'game', 'socks']
function wrapping(gifts) {
    let wrappGifts = [];
    let wrap = '*';
    for (let i = 0; i < gifts.length; i++) {
        const element = wrap.repeat(gifts[i].length + 2);
        wrappGifts.push(`${element}\n*${gifts[i]}*\n${element}`)
    }
    return wrappGifts;
  }

const wrapped = wrapping(gifts)

console.log(wrapped)
  