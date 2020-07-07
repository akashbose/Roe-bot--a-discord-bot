require("dotenv").config();
const discord=require("discord.js");
const client= new discord.Client();
const prefix=process.env.PREFIX;
const isValidCmd=(msg,cmd)=>msg.content.toLowerCase().startsWith(prefix+cmd);


client.on('ready',()=>{
      console.log("Bot is online");
});
client.on("message",function(message){
      if(message.author.bot){return;}
      if (isValidCmd(message,"hello"))
            message.reply("Hi !!! This is Roe-bot");
      if(isValidCmd(message,"add")){
            let args=message.content.split(" ");
            if(!args[1] || !args[2]){
                  message.reply("Not enough arguments");
                  return;
            }
            let res=0;
            for(let i=1;i<args.length;i=i+1){
                  res=res+Number(args[i]);
            }
            message.reply(res.toString());
      }
      if(isValidCmd(message,"sub")){
            let args=message.content.split(" ");
            if(!args[1] || !args[2]){
                  message.reply("Not enough arguments");
                  return;
            }
            if(args[3]){
                  message.reply("Too many arguments");
                  return;
            }
            let res=Number(args[1])-Number(args[2]);
            message.reply(res.toString());
      }
      if(isValidCmd(message,"mul")){
            let args=message.content.split(" ");
            if(!args[1] || !args[2]){
                  message.reply("Not enough arguments");
                  return;
            }
            if(args[3]){
                  message.reply("Too many arguments");
                  return;
            }
            let res=Number(args[1])*Number(args[2]);
            message.reply(res.toString());
      }
      if(isValidCmd(message,"div")){
            let args=message.content.split(" ");
            if(!args[1] || !args[2]){
                  message.reply("Not enough arguments");
                  return;
            }
            if(args[3]){
                  message.reply("Too many arguments");
                  return;
            }
            let res=Number(args[1])/Number(args[2]);
            message.reply(res.toString());
      }
      if(isValidCmd(message,"pow")){
            let args=message.content.split(" ");
            if(!args[1] || !args[2]){
                  message.reply("Not enough arguments");
                  return;
            }
            if(args[3]){
                  message.reply("Too many arguments");
                  return;
            }
            let res=Math.pow(Number(args[1]),Number(args[2]));
            message.reply(res.toString());
      }
      if(isValidCmd(message,"sqrt")){
            let args=message.content.split(" ");
            if(!args[1]){
                  message.reply("Not enough arguments");
                  return;
            }
            if(args[2]){
                  message.reply("Too many arguments");
                  return;
            }
            let res=Math.sqrt(Number(args[1]));
            message.reply(res.toString());
      }
      if(isValidCmd(message,"help")){
            message.reply("Command prefix is !");
            message.reply("Commands are add sub mul div pow followed by <arg1> and <arg2>");
            message.reply("sqrt followed by <arg1> ");

      }
      if(isValidCmd(message,"info")){
            message.reply("Command prefix is !");
            message.reply("Made by akash");

      }
});

client.login(process.env.TOKEN);