const similarity = require('similarity')
let fs = require('fs')
let fetch = require('node-fetch')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.text)) return !0
    this.game = this.game ? this.game : {}
    if (!(id in this.game)) return m.reply('O assunto terminou')
    if (m.quoted.id == this.game[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.game[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (['.teka', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.game[id][2]
            conn.fakelnk(m.chat, `▢ *Benar!*\n A resposta é ${json.jawaban}\nKamu mendapatkan +${this.game[id][2]} XP`, 'Me siga no Instagram\n CLIQUE AQUI !', pp, m)
            clearTimeout(this.game[id][3])
            delete this.game[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`▢ *Dikit Lagi!*\nHampir benar`)
        else m.reply(`*Salah!*\nCoba lagi`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
