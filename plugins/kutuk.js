let handler = async (m, { conn }) => {
  let target = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
_mirip = pickRandom(global.mirip)
_kutuk = pickRandom(global.kutuk)
conn.reply(m.chat, `Karna @${target.split('@')[0]} mirip ${_mirip}, akan ku kutuk jadi ${_kutuk}`, m)
}

handler.command = ['kutuk']
handler.tags = ['fun']
handler.help = ['Kutuk @user']
handler.group = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.mirip = [
"Monyet",
"Atta",
"Anjing",
"Babi",
"Aku",
"Mantan",
"Alien"
  ]
  
global.kutuk = [
"Orang susah",
"Babi ngepet",
"Jelek",
"Anak anjing",
"Fans atta",
"Pacarnya kekeyi",
  ]
  