
let pushUps;
let sitUps;
let squats;
let lapsRun;

let serializedPushUps = localStorage.getItem('pushUps')
if(serializedPushUps === null){
    pushUps = []
} else {
    pushUps = JSON.parse(serializedPushUps)
}
let newNumberOfPushUps = window.prompt('Enter your number of push ups: ')
pushUps.push(newNumberOfPushUps)
renderChart(pushUps, `Push Ups`)
serializedPushUps = JSON.stringify(pushUps)
localStorage.setItem('pushUps', serializedPushUps)

let serializedSitUps = localStorage.getItem('sitUps')
if(serializedSitUps === null){
    sitUps = []
} else {
    sitUps = JSON.parse(serializedSitUps)
}
let newNumberOfSitUps = window.prompt('Enter your number of sit ups: ')
sitUps.push(newNumberOfSitUps)
renderChart(sitUps, `Sit Ups`)
serializedSitUps = JSON.stringify(sitUps)
localStorage.setItem('sitUps', serializedSitUps)

let serializedSquats = localStorage.getItem('squats')
if(serializedSquats === null){
    squats = []
} else {
    squats = JSON.parse(serializedSquats)
}
let newNumberOfSquats = window.prompt('Enter your number of squats: ')
squats.push(newNumberOfSquats)
renderChart(squats, `Squats`)
serializedSquats = JSON.stringify(squats)
localStorage.setItem('squats', serializedSquats)

let serializedLapsRun = localStorage.getItem('lapsRun')
if(serializedLapsRun === null){
    lapsRun = []
} else {
    lapsRun = JSON.parse(serializedLapsRun)
}
let newNumberOfLapsRun = window.prompt('Enter your number of laps run: ')
lapsRun.push(newNumberOfLapsRun)
renderChart(lapsRun, `Laps Run`)
serializedLapsRun = JSON.stringify(lapsRun)
localStorage.setItem('lapsRun', serializedLapsRun)