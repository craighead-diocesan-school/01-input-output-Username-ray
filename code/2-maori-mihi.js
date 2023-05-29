// ####################################
// ###### ----- Maori Mihi ----- ######
// ####################################

function maoriMihi() {
  alert('Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  alert('What is your name?')
  let name = prompt()
  alert('What is your mountain?')
  let mountain = prompt()
  alert('What is your river/ocean/lake/bay-harbour?')
  let river = prompt()
  alert('Where is your hometown?')
  let homeTown = prompt()
  
  alert('Your mihi:')
  alert('Tēnā koutou katoa,')
  alert('Ko ' + mountain + ' tōku maungna,')
  alert('Ko ' + river + ' tōku awa/moana/roto/whanga,')
  alert('Nō ' + homeTown + ' au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}