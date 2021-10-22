let fetch = require('node-fetch')
let fs = require('fs')
let timeout = 60000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = m.chat
    if (id in conn.game) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.game[id][0])
        throw false
    }
    data = fs.readFileSync('./game/caklontong.js');
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    let caption = `${json.soal}

▢ *Timeout*
${(timeout / 1000).toFixed(2)} detik
▢ *Bonus* :
${poin} XP

Untuk bantuan ketik .cak
Reply pesan ini untuk menjawab
`.trim()
    conn.game[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['Caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

module.exports = handler