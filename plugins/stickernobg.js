const fs = require('fs')
const axios = require('axios')
const ffmpeg = require('fluent-ffmpeg')
const { spawn, exec, execSync } = require("child_process");
let handler = async (m, { conn, usedPrefix, command, args }) => {
  
  const createExif = (pack, auth) =>{
    const code = [0x00,0x00,0x16,0x00,0x00,0x00]
    const exif = {"sticker-pack-id": "com.conn.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.pubg", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
    let len = JSON.stringify(exif).length
    if (len > 256) {
        len = len - 256
        code.unshift(0x01)
    } else {
        code.unshift(0x00)
    }
    if (len < 16) {
        len = len.toString(16)
        len = "0" + len
    } else {
        len = len.toString(16)
    }
    //len = len < 16 ? `0${len.toString(16)}` : len.toString(16)
    const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const __ = Buffer.from(len, "hex")
    const ___ = Buffer.from(code)
    const ____ = Buffer.from(JSON.stringify(exif))
    fs.writeFileSync('./src/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
        console.log(err)
        if (err) return console.error(err);
        return `./src/data.exif`;
    });
};
  
    let anu = args.join(" ").split("|");
       let a = anu[0] !== "" ? anu[0] : `Whatsapp Bot Lexa`;
        b = typeof anu[1] !== "undefined" ? anu[1] : `@Mrf.Zvx`;
    gagal = `Reply image dengan perintah ${usedPrefix + command}`;
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (/image/.test(mime)) {
      const encmedia = m.quoted ? m.quoted.fakeObj : m
      const imagebuffer = await m.download();
      const imageb64 = imagebuffer.toString('base64');
      const data = await axios.post('https://salisganteng.pythonanywhere.com/api/remove-bg', {
        'api-key': 'salisheker',
        'image': imageb64
      });
      let nobgimage = await axios({
        url: data.data.image,
        method: 'GET',
        responseType: "arraybuffer",
      });
      const media = getRandom('.png')
      nobgimage = Buffer.from(nobgimage.data, 'binary')
      fs.writeFileSync(media, nobgimage)
			await createExif(a, b);
			out = getRandom('.webp');
         ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              conn.sendMessage(m.chat, "Terjadi kesalahan", "conversation", {
                quoted: m,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./src/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                conn.sendMessage(
                  m.chat,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: m }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`,
            ])
            .toFormat("webp")
            .save(out); 
    } else throw gagal
}

handler.help = ['Stikernobg']
handler.tags = ['sticker']
handler.command = /^(s|sticker|stiker|take)?nobg$/i
module.exports = handler
handler.disabled = false
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}