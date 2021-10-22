let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = { 
		'open': false,
		'close': true,
	}[(args[0] || '')]
	if (isClose === undefined)
		conn.sendButtonMessage(m.chat, 'Group Setting', 'Silahkan pilih salah satu', 'Open', '.group open', 'Close', '.group close')
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['Group open / close']
handler.tags = ['group']
handler.command = /^(group)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
