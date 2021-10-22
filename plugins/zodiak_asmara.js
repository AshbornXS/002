let axios = require('axios')
let cheerio = require('cheerio')
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  if(!text) throw `Ulangi dengan menambahkan zodiak\n*Contoh* : ${usedPrefix + command} libra

▢ *List zodiak*

- Capricorn
- Aquarius
- Pisces
- Aries
- Taurus
- Gemini
- Cancer
- Leo
- Virgo
- Libra
- Scorpio
- Sagittarius
- Capricorn`
try {
	const link = await axios.get(`https://www.fimela.com/zodiak/${text}`)
			const $ = cheerio.load(link.data)
			let thumb = $('body > div > div > div').find('div > div > a > img').attr('src')
				let love = $('body > div > div > div > div > div > div').find('div:nth-child(2) > div.zodiak--content__content > p').text().trim() || undefined
		caption = `▢ *Asmara* : 
${love}`

conn.sendFile(m.chat, thumb, 'zodiak.jpeg' , caption, m)
} catch (e) {
  m.reply('Hasil tidak di temukan')
}
}

handler.help = ['Asmara <zodiak>']
handler.tags = ['prim']
handler.command = /^asmara?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
module.exports = handler