let fs = require('fs')
let timeout = 60000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = m.chat
    if (id in conn.game) {
        conn.reply(m.chat, 'Ainda há perguntas sem resposta neste bate-papo', conn.game[id][0])
        throw false
    }
    data = fs.readFileSync('./game/tekateki.js');
		list = JSON.parse(data);
		random = Math.floor(Math.random() * list.length);
    let json = list[random]
    let caption = `${json.soal}

▢ *Timeout*
${(timeout / 1000).toFixed(2)} detik
▢ *Bonus* :
${poin} XP

Untuk bantuan ketik .teki
Reply pesan ini untuk menjawab
`.trim()
    conn.game[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `O tempo acabou!\n resposta é *${json.jawaban}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['Tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

module.exports = handler