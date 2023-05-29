// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
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
  // more outputs here
  alert('Tēnā kotou,')
  alert('Kei te mihi au ki a ' + mountain + ',')
  alert('Kei te mihi au ki a ' + river + ',')
  alert('Ko Te Tiriti o Waitangi te waka,')
  alert('Ko Aotearoa te iwi,')
  alert('Nō ' + homeTown + 'au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}