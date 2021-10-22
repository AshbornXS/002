let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text, args }) => {
  let pp = await (await fetch('https://telegra.ph/file/7c0b1068736040b515d81.jpg')).buffer()
  let siapa = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false
  let Ano = ''
			if (text) {
			Ano = `?text=${text}`
			}
  const clu = Ano.replace(/[ ]/g, '+')
  let Ani = ''
			if (text) {
			Ani = `&text=${text}`
			}
  const clur = Ani.replace(/[ ]/g, '+')
  if (!siapa) return conn.fakeLink(m.chat, `▢ *Link WhatsApp*\n\nwa.me/${m.sender.split('@')[0]}${clu}\nAtau\nhttps://api.whatsapp.com/send?phone=${m.sender.split('@')[0]}${clur}`, 'Me siga no Instagram\n CLIQUE AQUI !', pp, m)
  
  let Anu = ''
			if (text) {
			Anu = `${args.slice(1)}`
			}
  const clue = Anu.replace(/[,]/g, '+');
  conn.fakeLink(m.chat, `▢ *Link WhatsApp*\n\nwa.me/${m.sender.split('@')[0]}?text=${clue}\nAtau\nhttps://api.whatsapp.com/send?phone=${m.sender.split('@')[0]}&text=${clue}`, 'Me siga no Instagram\n CLIQUE AQUI !', pp, m)
}

handler.help = ['Wame','Wame <text>','Wame @tag <text>',]
handler.tags = ['tools']
handler.command = ['wame']
module.exports = handler