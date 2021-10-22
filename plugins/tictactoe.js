const TicTacToe = require("../lib/tictactoe")

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Você ainda está no jogo'
    if (!text) return ('Digite o nome da sala')
    let room = Object.values(conn.game).find(room => room.state === 'AVISO' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('Parceiros encontrados!')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'JOGADORES'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `Esperando @${room.game.currentTurn.split('@')[0]} como primeiro jogador
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *JOGADOR 1* @${room.game.playerX.split('@')[0]} ❌
▢ *JOGADOR 2* @${room.game.playerO.split('@')[0]} ⭕
▢ *ID da sala* ${room.id}

▢ *Regras*
‣ Faça 3 linhas de símbolos verticais, horizontais ou diagonais para ganhar
‣ Digite *Desistir* para sair do jogo e ser declarado derrotado
`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str)
        await conn.reply(room.o, str, m)
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'AVISO'
        }
        if (text) room.name = text
       await conn.sendButton(m.chat, 'Esperando parceiro' + (text ? ` mengetik perintah dibawah ini
▢ *${usedPrefix}${command} ${text}*` : ''), 'Clique em cancelar se quiser parar', 'Cancelar', '.cancelttt', false, {
            contextInfo: {
                mentionedJid: conn.parseMention(text)
            }})
        conn.game[room.id] = room
    }
}

handler.help = ['Tictactoe'].map(v => v + ' <room name>')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/

module.exports = handler
