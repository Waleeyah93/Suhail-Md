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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349151378009";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicGYwNFZpRzJVc0g2VEM1bEQ4YWlpOUE3MTNNb1Bmc3hRRDU0b2hKVjFGRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTUxMzc4MDA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRDA0ODVFOThBRkJBOTFBQUZGMzlCOUZDOUJCOTg2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5NzUwNTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTUxMzc4MDA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNEU5MjBBRDJFMjdDRjRDRDExMjVGQTY1MDkyN0JGOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5NzUwNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaG85dF9YVHpUX2F0MldkZTc5UHlFZ1wiLFxuICBcInBob25lSWRcIjogXCI0OTM5ODMzMC0xZjdmLTQ3MTYtODlhNS0yNDYwMDg4ZGI0ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgNTksXG4gICAgICA4MSxcbiAgICAgIDMyLFxuICAgICAgNjUsXG4gICAgICAyMzQsXG4gICAgICAxNDMsXG4gICAgICAxMDEsXG4gICAgICAyMDAsXG4gICAgICAyMjksXG4gICAgICAxOTgsXG4gICAgICA0MSxcbiAgICAgIDkyLFxuICAgICAgMTI0LFxuICAgICAgMTEyLFxuICAgICAgMjI5LFxuICAgICAgMjE4LFxuICAgICAgOTgsXG4gICAgICA5NSxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDExNyxcbiAgICAgIDM3LFxuICAgICAgNzcsXG4gICAgICAyMDIsXG4gICAgICA4NyxcbiAgICAgIDY2LFxuICAgICAgMzcsXG4gICAgICAyMzUsXG4gICAgICAxNDEsXG4gICAgICAyMSxcbiAgICAgIDQ1LFxuICAgICAgMjUwLFxuICAgICAgMjE0LFxuICAgICAgNDksXG4gICAgICAyNCxcbiAgICAgIDIyNixcbiAgICAgIDYzLFxuICAgICAgODUsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDlDUDZMUDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTEzNzgwMDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDIzMjczMzg5MDk4MzE6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJna2VoaW5kZTkzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3JiZ1ZBUXlPdmJzZ1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTZ2JPK2ZEcEQxRTRoL2dUQndjQVh1OXdoQjE0Z25pcEpVdVBHOEo2eVhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFWZHRJUXFPaWZ2QVRUSzFVQWluM2NkMUFMNnRUcHhzNFJmdWhMMkdITktGL1dodkRPRGEvYWpaTVhzbVRlZ0ZZbm9RWW43alJzMGdnaW9MaXhhY0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNkSXAxT1ZzTno2U2pQc2Zsb0NybnJ0REtXSTBueWxYZE5UaUZyOGdBMWo1SURZbXppVTVGdTVZYWpsYy92UHBsaEV2Sy9ZWFA1clhVd3dGWXZuSERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTEzNzgwMDk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjk3NTA1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5YMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlgwLmpzb24iOiAie1wia2V5RGF0YVwiOlwidmFmOVR4NCtueWNKMmM0ck8ydWlUZ0JtaVhSV3o0VTZXNzJJOTJxKzlCUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjc4MDAyMzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
