let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Ainda faltam neste chat!`, global.wm, 'excluir', `${usedPrefix}hapusabsen`)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Ausência começa`, global.wm, 'Ausente', `${usedPrefix}absen`),
        [],
        text
    ]
}
handler.help = ['Mulaiabsen']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i

module.exports = handler