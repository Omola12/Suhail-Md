H8const fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347088974331";




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


global.SESSION_ID "SUHAIL_14_56_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZDMUF1YXFmUkFJemFtMFIxUDZTOXBZOU5NdHZoZWIzVGhmVHh6QjlJWXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImROeTNGVkxMUm02dzZNMGswOWRzeXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDUxYmYxMzAtNGZjNC00OGM2LWE3NDMtY2UwYTQ2OWJlMjFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDE0NSxcbiAgICAgIDksXG4gICAgICA2NixcbiAgICAgIDEwNyxcbiAgICAgIDU2LFxuICAgICAgMjEwLFxuICAgICAgMjA5LFxuICAgICAgOTUsXG4gICAgICAxNTAsXG4gICAgICA1OSxcbiAgICAgIDI1MyxcbiAgICAgIDc3LFxuICAgICAgMTgsXG4gICAgICA2NSxcbiAgICAgIDU2LFxuICAgICAgMTg5LFxuICAgICAgMTAzLFxuICAgICAgMTcyLFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA0MCxcbiAgICAgIDE5LFxuICAgICAgMTc5LFxuICAgICAgMTAzLFxuICAgICAgMTAzLFxuICAgICAgMjM4LFxuICAgICAgMjAxLFxuICAgICAgMjEyLFxuICAgICAgMzQsXG4gICAgICAyMTYsXG4gICAgICAyMjYsXG4gICAgICAyMDcsXG4gICAgICAyNTAsXG4gICAgICAyMzEsXG4gICAgICAxNCxcbiAgICAgIDU4LFxuICAgICAgMTQwLFxuICAgICAgMjIyLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUdYVjk3RFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODg5NzQzMzE6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MjIwMjk5NjQwODk3OjQ4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2UW5Na0NFS21mdGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWp0cUNXN2VkTHNILysybXZiVDFPMEhaSmlqQTkrQzRCZkpHNEh2Qzl6UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvekJpd0lCT2lLa2VJbkdIRFp1RTZ6Mm1oem4rb0cvdVZiaG5FUDdiY2lHQTUyZ01mSTZSOExBbEw4ejhVejdtZUg5Vm51UWQ0NkpDUFAwcEd0RU5Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjd0dqWmVlM1pZUUFwNk1naWdhWmtpZE5iNkZzTUU1WXBTa0d0MTRyN1MwdG8zN0UyRllOVTJEcE5FbmF3b1VRVkJrcW9mblNDblo2S05DdUxXeWpCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDg4OTc0MzMxOjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MzcwMDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
