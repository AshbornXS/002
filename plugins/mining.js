let handler = async (m, { conn }) => {

let hasil = Math.floor(Math.random() * 1000)

global.db.data.users[m.sender].exp += hasil * 1 // Number(hasil)
   await m.reply(`Selamat! Anda mendapatkan ${hasil} exp!`)
}

handler.help = ['Mining']
handler.tags = ['xp']
handler.command = /^(mining|nguli)$/i
handler.owner = false

module.exports = handler