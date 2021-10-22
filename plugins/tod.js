let handler  = async (m, { conn }) => {
conn.send2Button(m.chat, 'Verdade ou desafio Por favor escolha um', '', 'Verdade', ".truth", 'Dare', '.dare')
}
handler.help = ['Tod']
handler.tags = ['game']
handler.command = /^(tod)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler