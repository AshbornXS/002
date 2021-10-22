let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupDemoteAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['Demote'].map(v => v + ' @user')
handler.tags = ['group']

handler.command = /^(demote)$/i

handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
