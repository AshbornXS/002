const hx = require("hxz-api");
let handler = async(m, { conn, text, usedPrefix, command }) => {
        if (!text) return conn.reply(m.chat, `Ulangi dengan menambahkan query\ncontoh : ${usedPrefix}pinterest cogan`, m);
        let pin = await hx.pinterest(text);
        let pint = pin[Math.floor(Math.random() * pin.length)];
  m.reply('Silahkan tunggu')
  conn.sendFile(m.chat, pint, '', `*▢  PINTEREST*

${text}
`.trim(), m)
}
handler.help = ['Pinterest <keyword>']
handler.tags = ['pict']
handler.command = /^(pinterest|img)$/i

module.exports = handler
