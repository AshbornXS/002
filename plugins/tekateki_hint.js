let handler = async (m, { conn }) => {
    conn.game = conn.game ? conn.game : {}
    let id = m.chat
    if (!(id in conn.game)) throw false
    let json = conn.game[id][1]
    clue = json.jawaban.replace(/[AIUEOaiueo]/g, '_')
    m.reply(`▢ *Dica*\n${clue}`)
}
handler.command = /^teki$/i
handler.limit = true
module.exports = handler