let axios = require('axios')
let cheerio = require('cheerio')
let handler = async (m, { conn, command, args }) => {
  const link = await axios.get(`http://cerpenmu.com/`)
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)
	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	m.reply(`*▢ CERPEN*\n\n‣ *Judul* : ${judul}\n‣ *Karangan* : ${karangan}\n\n    ${cerita}`)
}

handler.help = ['Cerpen']
handler.tags = ['random']
handler.command = /^cerpen?$/i
handler.owner = false
handler.register = true
handler.limit = true
module.exports = handler