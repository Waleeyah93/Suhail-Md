const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349070140097";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_13_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNYdnJ4Q0labXVjWkVJNnZFRkxiZWFCby83b1BuOStyYWNNVVQ1eEM4VUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVzYno5SXhaUlVHSDRfTklMMW1yWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTNhMzE4NzgtMzc0Yi00NGY0LWE5YjQtYjQzZjU2Yjg4OTNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjQwLFxuICAgICAgMjEsXG4gICAgICAxMjIsXG4gICAgICAxMzYsXG4gICAgICA0OCxcbiAgICAgIDgwLFxuICAgICAgMjQyLFxuICAgICAgMjIsXG4gICAgICAxNDYsXG4gICAgICAxNTIsXG4gICAgICA3OCxcbiAgICAgIDIwNixcbiAgICAgIDE1MSxcbiAgICAgIDE0OCxcbiAgICAgIDI0OCxcbiAgICAgIDkzLFxuICAgICAgOTUsXG4gICAgICAyNDcsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICAxMDQsXG4gICAgICAyMzQsXG4gICAgICAxMTYsXG4gICAgICA0OCxcbiAgICAgIDc3LFxuICAgICAgMjI1LFxuICAgICAgMTM2LFxuICAgICAgMjUyLFxuICAgICAgMjM5LFxuICAgICAgNDQsXG4gICAgICAyMTYsXG4gICAgICA0OCxcbiAgICAgIDc0LFxuICAgICAgMTcwLFxuICAgICAgNDUsXG4gICAgICAyMCxcbiAgICAgIDIxOCxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVaTTM1OTNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcwMTQwMDk3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLZW5ueSBFbnRlcnByaXNlXCIsXG4gICAgXCJsaWRcIjogXCIxODgzMDQyODQ3MjEzNzU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbmV2QU1RcEpITnRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjUyRnZaUEMwcWJUREdnalFOSDdMMkVodFp2TjhRSml4NC8zUGVrSGVwSDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXFvNWJ6TDRhSkhubTRoYUlUcTU3ZTcwbXFKS2lybmtoTjAxZG5ab2U0U3lMbzdFaDVLVkJCRk1tYUI4cGw5MzRLUm9EZXc4akRlblY4ekx4WkFGQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDRaZnVCcWp5SzYvRFhiWDJ5V3NnVVFDYW0vSFZ5d1cxSWlvKzBQMUpPVEZnWW9mVUlOTGRNWWpWRjVUNDIvUENEWVY0cjVaZlc2cm84azkvc2U5aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MDE0MDA5NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzAyNTU3NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
