let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.reply(m.chat, 'Sem ausências em curso', m)
        throw false
    }
    delete conn.absen[id]
    m.reply(`Absen berhasil dihapus`)
}
handler.help = ['Hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus|-)absen$/i

module.exports = handler