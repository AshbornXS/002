let axios = require('axios')
let cheerio = require('cheerio')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async (m, { conn, text, command, args }) => {
      const	tgl = text.split(" ")[0];
			const	bln = text.split(" ")[1];
			const	thn = text.split(" ")[2];
			
			if(!tgl) throw 'Ulangi dengan menambahkan tanggal jadian\n*Contoh* : .ramal 09 20 2000'
			if(!bln) throw 'Ulangi dengan menambahkan Bulan jadian\n*Contoh* : .ramal 09 20 2000'
			if(!thn) throw 'Ulangi dengan menambahkan Tahun jadian\n*Contoh* : .ramal 09 20 2000'
const link = await axios.get(`https://www.primbon.com/tanggal_jadian_pernikahan.php?tgl=${tgl}&bln=${bln}&thn=${thn}&proses=+Submit%21+`)
	const $ = cheerio.load(link.data)
	let tanggall = $('#body').text().trim()
	let a = tanggall.replace('MAKNA TANGGAL JADIAN, PERNIKAHAN', '').replace('Karakteristik:', '\nKarakteristik : ').replace('< Hitung Kembali', '').replace('KONTEN YANG SESUAI', '').replace(`













 `, '').replace(`Catatan:
Untuk melihat kecocokan jodoh dengan pasangan, dapat dikombinasikan dengan primbon Ramalan Jodoh (Jawa), Ramalan Jodoh (Bali), numerologi Kecocokan Cinta, tingkat keserasian Nama Pasangan, dan Ramalan Perjalanan Hidup Suami Istri.`, '').replace(`

`, '').replace(`



`, '')
	m.reply(`▢ *RAMALAN JADIAN*\n\n${a}`)
}

handler.help = ['Ramal 06 12 2020']
handler.tags = ['prim']
handler.command = /^ramal?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
module.exports = handler