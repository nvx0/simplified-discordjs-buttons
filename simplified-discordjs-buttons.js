// Simplified D.JS Buttons by cloud3
// Version r2.9

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

// Easteregg for June: Happy pride month
