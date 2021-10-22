let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*▢ Group Information*
        
‣ *ID:*
${groupMetadata.id}

‣ *Name:* 
${groupMetadata.subject}

‣ *Description:* 
${groupMetadata.desc}

‣ *Total Members:*
${participants.length} Members

‣ *Group Owner:* 
@${m.chat.split`-`[0]}

‣ *Group Admins:*
${listAdmin}

*Group Settings:*
${isBanned ? 'Yes' : 'No'} Banned
${welcome ? 'Yes' : 'No'} Welcome
${detect ? 'Yes' : 'No'} Detect
${global.db.data.chats[m.chat].delete ? 'No' : 'Yes'} Anti Delete
${antiLink ? 'Yes' : 'No'} Anti Link

*Message Settings:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['Infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler