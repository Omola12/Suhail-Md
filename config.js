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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347044154391";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_24_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVNmhBekVDY3Zaci9LbTBvMkFJWU9uYXQvOFh0YlA3dFdFWE1TOThaekI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSd0xGOUg0M1F3NnNvbUhTOGVVcjNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1NTg2ZDM2LTY4ODMtNDk1Ny1iYTBhLTY3YWMwNWRiM2U1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxNjksXG4gICAgICA5MCxcbiAgICAgIDE5LFxuICAgICAgMTA2LFxuICAgICAgODQsXG4gICAgICA0NyxcbiAgICAgIDc1LFxuICAgICAgMTUyLFxuICAgICAgMTUyLFxuICAgICAgMTc4LFxuICAgICAgODAsXG4gICAgICAyNDcsXG4gICAgICAyLFxuICAgICAgMjE1LFxuICAgICAgODIsXG4gICAgICA3MyxcbiAgICAgIDE0NyxcbiAgICAgIDE4MyxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxNDgsXG4gICAgICAxNjYsXG4gICAgICAxMjgsXG4gICAgICAxNTYsXG4gICAgICAyMjEsXG4gICAgICAyNTIsXG4gICAgICA3OCxcbiAgICAgIDUsXG4gICAgICAyNDQsXG4gICAgICAxOCxcbiAgICAgIDk1LFxuICAgICAgMTM4LFxuICAgICAgMjUwLFxuICAgICAgMjI3LFxuICAgICAgMjI2LFxuICAgICAgOCxcbiAgICAgIDIzMSxcbiAgICAgIDE5NixcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTg4Wks4TkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDQxNTQzOTE6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIkS3J5cF9fdG8uLiDCo1wiLFxuICAgIFwibGlkXCI6IFwiMTU2NTk5ODc2NDg2NTM6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3paczRrRkVJM0gzYlFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTd2pUVnI5R2N3OWllT3IrcDVlK1NpKzNnMW11MHZOWUgvUmt3dzZPTDJBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFybWJrSTY1L09EdzQ5SUI5eTV1WGpUdlJ5UStFS05vNnBBY0krUllnNEN4VXRvNlZ4V0YybWVROFFUTk54eWpSU0lKbXpRTms5ejhJbXZKTVRzL0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJOZk1uVEhtYzdSQ1ovQ2pXS1c5bThHNnMyQXA4MzBldWdBakdmWTM5aUlPaSs1aVl4bm1uVjMwR2JCNWIybHVEeVl2QUkyMkVmNDg2czErRCtVeUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDQxNTQzOTE6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExOTc0NTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHZnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdmdi5qc29uIjogIntcImtleURhdGFcIjpcIlJ2OGd1MXpOd1o2aFVuV0NRdS9wUmhxc1Fja1piNVdRNjMzMXVZNktxZkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2MTg5ODY2OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMTkzMzUwMjZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
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
