const ig = require("insta-fetcher");
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Ulangi dengan menambahkan username\n*Contoh* : /igstalk mrf.zvx'
  if (args[0].startsWith('@')) throw 'Ulangi tanpa menambahkan @ di username'
 ig.fetchUser(`${args.join(' ')}`).then(Y => {
   try {
            ten = `${Y.profile_pic_url_hd}`
            teks = `*IG STALK*\n\n▢ ID : ${Y.profile_id}\n▢ Username : ${args.join('')}\n▢ Full Name : ${Y.full_name}\n▢ Bio : ${Y.biography}\n▢ Followers : ${Y.followers}\n▢ Following : ${Y.following}\n▢ Private : ${Y.is_private}\n▢ Verified : ${Y.is_verified}\n\n▢ Link : https://instagram.com/${args.join('')}`
        conn.sendFile(m.chat, ten, 'igstalk.jpg',teks, m)
 } catch (e) {
   m.reply('Username tidak ditemukan')
 }
 })
}
handler.help = ['Igstalk'].map(v => v + ' <username>')
handler.tags = ['other']

handler.command = /^(igstalk)$/i

module.exports = handler
