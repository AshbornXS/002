let handler = async m => m.reply(`
▢ Donasi • Pulsa
• Indosat Telkomsel [6282223014661]

▢ Donasi • Dana
• Gopay, OVO, Dana [082223014661]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['Donasi']
handler.tags = ['main']
handler.command = /^dona(te|si)$/i

module.exports = handler
