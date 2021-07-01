// Simplified D.JS Buttons by cloud3
// Version r3.5

function create_button(style, url, label, disabled, message) {
let btn = new disbut.MessageButton()

  // Button style

  if (style === "null" || "NaN" || "undefined" || "none") {
  btn.setStyle('grey')
  } else {
  btn.setStyle(style)
  }

  // Url 

  if (url === "null" || "NaN" || "undefined" || "none") {
  // no link
  } else {
  btn.setURL(url)
  }

  // Label

  if (label === "null" || "NaN" || "undefined" || "none") {
    btn.setLabel('Beep Boop..')
    } else {
    btn.setLabel(label)
    }

    // Disabling

  if (disabled === "true" || "yes") {
  btn.setDisabled(); 
  } 

  if (disabled === "false" || "no") {
    // that button is not disabled, such wow
  } 

  // Sending message and button, or button without message

  if (message === "null" || "NaN" || "undefined" || "none") {
    message.channel.send(btn);
  } else {
    message.channel.send(message, btn);
  }

}

function create_button_for_existant_message(style, url, label, disabled, variable) {
 // variable for ex. const myEmbed = = new Discord.MessageEmbed() 
 // qucik example: create_button_for_existant_message("red", "null", "Beop Peob?", "null", "myEmbed")
let btn = new disbut.MessageButton()


  // Button style

  if (style === "null" || "NaN" || "undefined" || "none") {
  btn.setStyle('grey')
  } else {
  btn.setStyle(style)
  }

  // Url 

  if (url === "null" || "NaN" || "undefined" || "none") {
  // no link
  } else {
  btn.setURL(url)
  }

  // Label

  if (label === "null" || "NaN" || "undefined" || "none") {
    btn.setLabel('Beep Boop..')
    } else {
    btn.setLabel(label)
    }

    // Disabling

  if (disabled === "true" || "yes") {
  btn.setDisabled(); 
  } 

  if (disabled === "false" || "no") {
    // that button is not disabled, such wow
  } 

  // Sending message and button, or button without message

  if (!variable) {
    console.error("SD.JS Buttons Error: Can't add button to message!")
  } else {
    message.channel.send(variable, btn);
  }

}

// Easteregg for June: Happy pride month
