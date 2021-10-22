let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.reply(m.chat, 'Sem ausências em curso', m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Voce esta ausente!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('pt', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal :
${date}
${conn.absen[id][2]}
Daftar absen
${list}
Total: ${absen.length}`.trim()
    await conn.sendButton(m.chat, caption, global.wm, 'Ausente', `${usedPrefix}absen`, false, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['Absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

module.exports = handler