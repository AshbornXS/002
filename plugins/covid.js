let axios = require('axios')
let cheerio = require('cheerio')
let handler = async (m, { text, usedPrefix, command }) => {
 if(!text) throw `Ulangi dengan menambahkan nama negara\n*Contoh* : ${usedPrefix + command} Indonesia`
  try {
 const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${text}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	
	m.reply(`▢ *Data Covid19*

‣ *Negara* : ${text}
‣ *Jumlah kasus* : ${kasus}
‣ *Sembuh* : ${sembuh}
‣ *Meninggal* : ${mati}

Stay safe dan jalankan protokol kesehatan ya :)`)
} catch (e) {
  m.reply('Hasil tidak di temukan')
}
}
handler.help = ['Covid'].map(v => v + ' <negara>')
handler.tags = ['other']
handler.command = /^(corona|covid|covid19)$/i

module.exports = handler
