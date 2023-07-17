// ####################################
// #### ----- Non-Maori Mihi ----- ####
// ####################################

function nonMaoriMihi() {
  alert('Non-Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  let name = prompt('What is your name?')
  let mountain = prompt('What is your mountain?')
  let river = prompt('What is your river/ocean/lake/bay-harbour?')
  let homeTown = prompt('Where is your hometown?')

  alert('Your mihi:')
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