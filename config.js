require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.dana = "2347041039367"
global.qris = "-"


// GLOBAL SETTING
global.owner = "2347041039367"
global.namabot = "𝙱𝙻𝚄𝙴x𝙳𝙴𝙼𝙾𝙽"
global.nomorbot = "2347041039367"
global.namaCreator = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽"
global.linkyt = "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h"
global.autoJoin = false
global.antilink = false
global.versisc = '3.2'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.packname = "𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 ™"
global.author = "𝕯𝖊𝖒𝖔𝖓"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})