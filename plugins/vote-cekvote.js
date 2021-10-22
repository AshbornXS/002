let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*sem votação neste grupo!*_\n\n*${usedPrefix}mulaivote* - para começar a votar`

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`*▢ VOTANDO*

*Alasan:* ${reason}

*UPVOTE*
Total: ${upvote.length}
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
Total: ${devote.length}
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}hapusvote* para deletar votos
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['Cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
