const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|Nomor seri>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Waduh kakek mau main bot'
  if (age < 5) throw 'Eitss ada dede bayi'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`*▢ INFO USER*

Pendaftaran berhasil
‣ *Nama* : 
• ${name}
‣ *Umur* :
• ${age} tahun
‣ *Nomor seri* :
${sn}

Terima kasih, nomor kamu sekarang sudah terdaftar dalam database
ketik /menu untuk menampilkan menu
`.trim())
}
handler.help = ['Daftar'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

