let axios = require('axios')
let cheerio = require('cheerio')
let handler = async (m, { text }) => {
    try {
const link =  await axios.get(`https://id.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let judul = $('#firstHeading').text().trim()
	let penjelasan = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *Wikipedia*

‣ Pencarian : ${judul}

${penjelasan}`)
} catch (e) {
  m.reply('Hasil tidak di temukan')
}
}
handler.help = ['Wikipedia'].map(v => v + ' <query>')
handler.tags = ['kasi']
handler.command = /^(wiki|wikipedia)$/i
module.exports = handler
