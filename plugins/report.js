// By RC047 :V
let fs = require('fs')
const _lapor = JSON.parse(fs.readFileSync('./report/lapor.json'))
let handler = async(m, { conn, text }) => {
   let loh = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    wa = `wa.me/${m.sender.split('@')[0]}`
    const laporan = { Nomor : wa, Pesan: text }
    _lapor.push(laporan)
  fs.writeFileSync('./report/lapor.json', JSON.stringify(_lapor))
    m.reply('Masalah telah di laporkan ke Owner Bot')
    m.reply(`*「 REPORT 」*
Nomor : ${wa}
Pesan : ${text}`, m.sender)
}
handler.help = ['Report'].map(v => v + ' <laporan>')
handler.tags = ['main']
handler.command = /^(bug)$/i

module.exports = handler
