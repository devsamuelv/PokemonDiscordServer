const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "~";
const DELAY  = 5000;
const TOKEN = "{Your Token Here}";
const VERSION = "1.0";

let COMMANDS = [
  "Hi",
  "mods",
  "info"
];

client.on('message', message => {
   let args = message.content.substring(PREFIX.length).split(" ");

   switch (args) {
       case 'Hi':
           const author = message.author.username;
           message.typing = true;
           setTimeout(function(){
               message.typing = false;
               message.send(`Sup ${author} How Are You Today`);
           }, DELAY);
           if (message.reply === 'Good') {
               message.send(`Nice ${author}`);
           }
           break;

       case 'mods':
           let mods = ["Claire Espeon", "Developer"];

           message.send(`Here's all of the listed mods ${mods}`);
           break;

       case 'kick':
           const user = message.mentions.first();

           if (user) {
               const member = message.guild.member(user);

               if (member) {
                   member.kick("Your not in my Pokedex??").then(() => {
                       message.reply(`${user} is blasting off again!`);
                   }).catch(err => {
                       console.exception(err);
                   });
               } else {
                   message.send(`${user} is not in my pokedex`);
                   console.warn(`${user} is not found`);
               }
           } else {
               message.send(`${user} is not in my pokedex`);
               console.warn(`${user} is not found`);
           }
           break;

       case 'testex':
           console.warn("Test Is Complete");
           console.exception("Test Is Complete");
           break;

       case 'info':
           message.send('Author Is DevSamuel @github.com');
           message.send(`${VERSION} Is the bot current version`);
           break;

       case 'help':
           message.send('TO Call A Command Use ~');
           message.send(`Command ${COMMANDS[0]} to say hi, Command ${COMMANDS[1]} To list mods, Command ${COMMANDS[2]} For bot info!`);
           message.reply("Also You can report errors here https://github.com/DevSamuelV/PokemonDiscordServer/issues/new");
           break;
   }
});

client.login(TOKEN);

client.on('ready',() => {
    console.trace("Bot Online");
    console.warn("Bot Logedin And Running");
});