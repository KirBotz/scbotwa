module.exports = async(x, nx, store) => {
try {
  const type = Object.keys(nx.message)[0]
  const body = (nx.mtype === 'conversation') ? nx.message.conversation : (nx.mtype == 'imageMessage') ? nx.message.imageMessage.caption : (nx.mtype == 'videoMessage') ? nx.message.videoMessage.caption : (nx.mtype == 'extendedTextMessage') ? nx.message.extendedTextMessage.text : (nx.mtype == 'buttonsResponseMessage') ? nx.message.buttonsResponseMessage.selectedButtonId : (nx.mtype == 'listResponseMessage') ? nx.message.listResponseMessage.singleSelectReply.selectedRowId : (nx.mtype == 'templateButtonReplyMessage') ? nx.message.templateButtonReplyMessage.selectedId : (nx.mtype === 'messageContextInfo') ? (nx.message.buttonsResponseMessage?.selectedButtonId || nx.message.listResponseMessage?.singleSelectReply.selectedRowId || nx.text) : ''
  const prefix = /^[.#!/^]/.test(body) ? body.match(/^[.#!/^]/gi) : '#'
  const isCmd = body.startsWith(prefix)
  const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
  const from = nx.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? (nx.key.participant ? nx.key.participant : nx.participant) : nx.key.remoteJid
  const isOwner = x.owner.number.includes(nx.sender)
  const args = body.trim().split(/ +/).slice(1)
  const text = q = args.join(" ")
  const groupMetadata = isGroup? await x.groupMetadata(nx.chat).catch(e => {}) : ""
  const pwkdnwn = isGroup? await groupMetadata.participants : ""
  const groupAdmins = isGroup? await pwkdnwn.filter(v => v.admin !== null).map(v => v.id) : ""
  const isBotAdmins = isGroup ? groupAdmins.includes(x.number) : false
  const isAdmins = isGroup ? groupAdmins.includes(sender) : false
  const jam = moment.tz('Asia/Jakarta').format("HH:mm:ss")
  const quoted = nx.quoted ? nx.quoted : nx
  const mime = (quoted.msg || quoted).mimetype || ''
  const isImage = (type == 'imageMessage')

if (isCmd) {
  x.readMessages([nx.key])
  console.log(require("chalk").black(require("chalk").bgGreen(`Command ${prefix+command} `)), require("chalk").black(require("chalk").bgWhite(`Dari ${nx.pushName}`)))
}

const reply = (teks) => {
  x.sendMessage(from, { text: teks }, { quoted: nx })
}

let list = []
for (let i of [`${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`]) {
list.push({
displayName: `Creator ${global.namaBot}`,
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:Creator ${global.namaBot}\n
FN:Creator ${global.namaBot}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
END:VCARD`
})
}

switch (command) {
case "menu": {
  const noOwne = global.nomorOwner + "@s.whatsapp.net"
  const timestamp = speed()
  const latensi = speed() - timestamp
  const textcap = `❃ ━━━ *INFORMASI* ━━━ ❃
⌬〡Nama Owner : ${namaOwner}
⌬〡Nomor Owner : @${noOwne.split("@")[0]}
⌬〡Nomor User : @${sender.split("@")[0]}
⌬〡Nama User : ${nx.pushName}
⌬〡Runtime : ${runtime(process.uptime())}
⌬〡Speed : ${latensi.toFixed(4)} 𝘋𝘦𝘵𝘪𝘬
⌬〡Date : ${tanggal(new Date())}
⌬〡Time : ${jam} WIB
━━━━━━━━━━━━━━━
*〡LIST FITUR〡*
◈ ${prefix}gpt4 *teks*
◈ ${prefix}openai *teks*
◈ ${prefix}gptgo *teks*
◈ ${prefix}tiktok *link vt*
◈ ${prefix}remini *reply image*
◈ ${prefix}tourl *reply image*
◈ ${prefix}sticker *reply image*
◈ ${prefix}toimg *reply sticker*
◈ ${prefix}shadow *teks*
◈ ${prefix}write *teks*
◈ ${prefix}romantic *teks*
◈ ${prefix}burnpaper *teks*
◈ ${prefix}smoke *teks*
◈ ${prefix}narutobanner *teks*
◈ ${prefix}love *teks*
◈ ${prefix}undergrass *teks*
◈ ${prefix}doublelove *teks*
◈ ${prefix}coffecup *teks*
◈ ${prefix}underwaterocean *teks*
◈ ${prefix}smokyneon *teks*
◈ ${prefix}starstext *teks*
◈ ${prefix}rainboweffect *teks*
◈ ${prefix}balloontext *teks*
◈ ${prefix}metalliceffect *teks*
◈ ${prefix}embroiderytext *teks*
◈ ${prefix}flamingtext *teks*
◈ ${prefix}stonetext *teks*
◈ ${prefix}writeart *teks*
◈ ${prefix}summertext *teks*
◈ ${prefix}wolfmetaltext *teks*
◈ ${prefix}nature3dtext *teks*
◈ ${prefix}rosestext *teks*
◈ ${prefix}naturetypography *teks*
◈ ${prefix}quotesunder *teks*
◈ ${prefix}shinetext *teks*
━━━━━━━━━━━━━━━`
  x.sendMessage(from, { image: thumb, caption: textcap, fileLength: "1000000000000000", mentions: [sender, noOwne] }, { quoted: nx })
}
break
case "openai": {
  if (!q) return reply(`Pertanyaan Nya Apa Bang?`)
  let gpt3 = await fetchJson("https://aemt.me/openai?text=" + q)
  reply(util.format(gpt3.result))
}
break
case "gptgo": {
  if (!q) return reply(`Pertanyaan Nya Apa Bang?`)
  let gpt = await fetchJson("https://aemt.me/gptgo?text=" + q)
  reply(util.format(gpt.result))
}
break
case "gpt4": {
  if (!q) return reply(`Pertanyaan Nya Apa Bang?`)
  let gpt4 = await fetchJson("https://aemt.me/gpt4?text=" + q)
  reply(util.format(gpt4.result))
}
break
case "shadow": case "write": case "romantic": case "burnpaper": case "smoke": case "narutobanner": case "love": case "undergrass": case "doublelove": case "coffecup": case "underwaterocean": case "smokyneon": case "starstext": case "rainboweffect": case "balloontext": case "metalliceffect": case "embroiderytext": case "flamingtext": case "stonetext": case "writeart": case "summertext": case "wolfmetaltext": case "nature3dtext": case "rosestext": case "naturetypography": case "quotesunder": case "shinetext": {
  if (!q) return reply(`Example : ${prefix+command} kirbotz`)
  let link
  if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
  if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
  if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
  if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
  if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
  if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
  if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
  if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
  if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
  if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
  if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
  if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
  if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
  if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
  if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
  if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
  if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
  if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
  if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
  if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
  if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
  if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
  if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
  if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
  if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
  if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
  if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
  let dehe = await photoOxy(link, q)
  x.sendMessage(from, { image: { url: dehe }, caption: "Logo Created Successfully!" }, { quoted: nx })
}
break
case "hd": case "remini": {
  if (!/image/.test(mime)) return reply("Reply Foto Nya Dengan Teks " + prefix + command)
  const media = await quoted.download()
  const proses = await remini(media, "enhance")
  x.sendMessage(from, { image: proses, caption: "Sukses Kak" }, { quoted: nx })
}
break
case "tourl": {
  try {
    let mee = await x.downloadAndSaveMediaMessage(quoted)
    let mem = await uptotelegra(mee)
    reply(util.format(mem))
  } catch (err) {
    reply(`Reply Image Nya Bang`)
  }
}
break
case "toimg": {
  if (!quoted) return reply(`Balas sticker dengan caption *${prefix+command}*`)
  if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix+command}*`)
  let media = await x.downloadAndSaveMediaMessage(quoted)
  let ran = `${Math.floor(Math.random() * 100000)}.png`
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return x.sendMessage(from, { text: util.format(err) }, { quoted: nx })
    let buffer = fs.readFileSync(ran)
    x.sendMessage(from, { image: buffer }, { quoted: nx })
    fs.unlinkSync(ran)
  })
}
break
case "sticker": {
  if (/image/.test(mime)) {
    let media = await quoted.download()
    let encmedia = await x.sendStimg(from, media, nx, { packname: "", author: x.name })
    await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return reply(`Reply Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
    let media = await quoted.download()
    let encmedia = await x.sendStvid(from, media, nx, { packname: "", author: x.name })
    await fs.unlinkSync(encmedia)
  } else {
    reply(`Reply Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
  }
}
break
case "tiktok": {
  if (!q) return reply(`Penggunaan Salah Contoh ${prefix+command} https://vm.tiktok.com/ZSLdF9NYN`)
  let tiktod = await Tiktok(q)
  let tekstik = `Downloader Tiktok

Nickname: ${tiktod.author.nickname}
Unique Id: ${tiktod.author.unique_id}
Region: ${tiktod.region}
Desc: ${tiktod.desc}
Duration: ${tiktod.duration}`
  let tikvid = await x.sendMessage(from, { video: { url: tiktod.download.nowm }, caption: tekstik }, { quoted: nx })
  x.sendMessage(from, { audio: { url: tiktod.download.music }, mimetype: "audio/mp4", ptt: false }, { quoted: tikvid })
}
break
case "ping": {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let timestamp = require('performance-now')()
  let latensi = require('performance-now')() - timestamp
  neww = require("perf_hooks").performance.now()
  oldd = require("perf_hooks").performance.now()
  respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
  reply(respon)
}
break
default:
}
} catch (e) {
console.log(util.format(e))
}
}

const file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update File ${__filename}`))
  delete require.cache[file]
  require(file)
})