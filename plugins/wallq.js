const hx = require("hxz-api");
const axios = require("axios");
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
let handler = async(m, { conn, usedPrefix, command }) => {
        inic = ["wallpaper","wallpaper aesthetic","wallpaper cute"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        pin = await hx.pinterest(inid);
        let pint = pin[Math.floor(Math.random() * pin.length)];
        pinter = await getBuffer(pint)
  m.reply('Por favor, espere')
  if (!pinter) return m.reply('Falhou')
  conn.sendButtonImg(m.chat, pinter, 'Resultado do Pinterest', `Klik untuk foto selanjutnya\nhttps://www.instagram.com/mrf.zvx`, 'Próximo', '.wallpaper', m)
}
handler.help = ['Wallpaper']
handler.tags = ['pict']
handler.command = ['wallpaper']
//handler.limit = true
module.exports = handler
