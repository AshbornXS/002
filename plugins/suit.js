let handler = async (m, { text, usedPrefix }) => {
    let poin = 300
    let salah = `Pilihan yang tersedia Gunting, Kertas, Batu\n\n*Contoh* : ${usedPrefix}suit gunting\n`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Kita Seri*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (±)100 XP`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Kamu Menang*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu Kalah*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (-)${poin} XP`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Kamu Menang*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu Kalah*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (-)${poin} XP`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *Kamu Menang*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *Kamu Kalah*\n\n‣ kamu : ${text}\n‣ Lexa : ${astro}\n\nPoin (-)${poin} XP`)
        }
    } else {
        throw salah
    }
}
handler.help = ['Suit gunting/batu/kertas']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.register = true
handler.limit = false

module.exports = handler