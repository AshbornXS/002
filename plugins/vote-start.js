let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Ainda há votos neste chat!_\n\n*${usedPrefix}hapusvote* - para deletar votos`
    }
    m.reply(`Vote dimulai!\n\n*${usedPrefix}upvote* - para sim\n*${usedPrefix}devote* - para não\n*${usedPrefix}cekvote* - para verificar o voto\n*${usedPrefix}hapusvote* - remover voto`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['Mulaivote <alasan>']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler