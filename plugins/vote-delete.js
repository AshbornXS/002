let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `*sem votação neste grupo!*\n\n*${usedPrefix}mulaivote* para começar a votar`
    delete conn.vote[id]
    m.reply(`Done!`)

}
handler.help = ['Hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler