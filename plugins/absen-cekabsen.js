let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.reply(m.chat, 'Sem ausências em curso', m)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('pt', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `*▢ AUSÊNCIA*
    
Quando :
${date}
${conn.absen[id][2]}
Lista de presença
${list}
Total :
${absen.length}`.trim()
    await conn.sendButton(m.chat, caption, global.wm, 'Remover ausência', `${usedPrefix}hapusabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['Cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i

module.exports = handler