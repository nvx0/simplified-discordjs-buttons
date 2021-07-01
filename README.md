<center><br>
<img src="https://media.discordapp.net/attachments/853667470996013086/859884765871734854/Untitled.png?width=720&height=217">

# simplified-discordjs-buttons 
Version: r3.5
  <br>
A function for javascript that can help you implement buttons in your Discord.JS bot
<br>
Last update: Fixed errors when you didn't input requested data.

# Example
For non-embed message:
```js
create_button("blurple", "null", "i love bananas", "null", "but im alergic to it");
``` 
For already existant and defined messages:
```js
create_button_for_existant_message("red", "null", "Beop Peob?", "null", "myEmbed")
```

# Colors and other stuff
| Styles         | Preview                                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| Red            | ![Red_Style](https://cdn.discordapp.com/attachments/846455339419172874/848285563936047124/Button_Green2.png)      |
| Green          | ![Green_Style](https://cdn.discordapp.com/attachments/846455339419172874/848283811942498344/Button_Green1.png)    |
| Blurple        | ![Blurple_Style](https://cdn.discordapp.com/attachments/846455339419172874/848282426395852830/Button_Blurple.png) |
| grey (or gray) | ![Grey_Style](https://cdn.discordapp.com/attachments/846455339419172874/848291827736117308/Button_Green5.png)     |
| URL            | ![URL_Style](https://cdn.discordapp.com/attachments/846455339419172874/848290582706782308/Button_Green4.png)      |

<h6>*to prevent issues set values with blank to null</h6>

# Issues
You have to install this module:
``npm i discord-buttons``
And put 
```js
const disbut = require('discord-buttons');
disbut(client);
```
In your code otherwise it wouldn't work

**If you are still having issues with something, feel free to open issue I would try to help you!**


</center>
