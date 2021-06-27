function getLaserSetting(magicWord) {
if (magicWord === 'please') {
  var setting = 'OFF';
} else {
  var setting = 'ON';
}
  return setting;
}
const currentSetting = getLaserSetting('right now!');
console.log('The current laser setting is: ' + currentSetting);