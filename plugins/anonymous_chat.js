async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) {
                await this.sendButton(m.chat, 'Kamu tidak sedang berada di anonymous chat', author, 'Cari Partner', `.start`)
                throw false
            }
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, 'Partner meninggalkan chat', author, 'Cari Partner', `.start`)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                await this.sendButton(m.chat, 'Kamu masih berada di dalam anonymous chat, menunggu partner', author, 'Keluar', `.leave`)
                throw false
            }
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, 'Partner ditemukan!', author, 'Next', `.next`)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, 'Partner ditemukan!', author, 'Next', `.next`)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, 'Menunggu partner...', author, 'Keluar', `.leave`)
            }
            break
        }
    }
}
handler.help = ['Start', 'Leave', 'Next']
handler.tags = ['anonymous']

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
