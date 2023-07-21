// ####################################
// ######## ----- Welcome ----- #######
// ####################################

function welcome() {
  let username = prompt("What's your name?")
  // Asked the username and defined it.
  alert('We want to know if you like programming!')
  // Show a sentence.
  let answer = prompt('Do you like programming ' + username + '?')
  // Asked the answer if she/he likes programming or not by using her/his name.

  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
  // Show a sentence that using the answer of the question and an another sentence.
}

function questionnaire() {
  let name = prompt("What's your name?")
  let breakfast = prompt('What did you have for breakfast, ' + name + '?')
  let colour = prompt('Oh, did you eat ' + breakfast + "? It's the same as me... Anyway, what is your favourite colour?")
  let age = Number(prompt('Oh, do you like ' + colour + "? It's also the same as me... Whatever, how old are you?"))
  // Ask some questions to define the each information and use the informations for the next question.
  age = age + 1
  // Added 1 to ages.
  alert("Okay, so you will be" + age + "years old this year, right?")
  // Show the ages that she/he will become next year.
}
