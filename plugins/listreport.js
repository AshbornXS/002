let fs = require('fs')
const _lapor = JSON.parse(fs.readFileSync('./report/lapor.json'))
let handler = async(m, { conn, text }) => {
  teks = ` ≡ *LIST LAPORAN*\nJumlah : *${_lapor.length}*\n\n`
				for (let lap of _lapor) {
					teks += `▢ *Nomor* : ${lap.Nomor}\n▢ *Pesan* : ${lap.Pesan}\n\n`
				}
				teks  += ``
				m.reply(teks.trim())
}

handler.command = ['listlapor']
module.exports = handler