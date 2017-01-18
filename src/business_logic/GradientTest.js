export default class GradientTest{
  constructor(){
    this.colorMap = {
      0: 1,
      1: 7,
      2: 3,
      3: 4,
      4: 5,
      5: 6,
      6: 7,
      7: 8,
      8: 9,
      9: 'a',
      a: 'b',
      b: 'c',
      c: 'd',
      d: 'e',
      e: 'f',
      f: 0,
      '#': '#'
    }
  }

  nextDegrees(degrees){
    let next = degrees + 5;

    return (next > 360) ? 
      1 : 
      next; 
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  nextColor(color){
    // input will be #xxxxxx,
    // where x is 0-F hexadecimal
    return color.split('').map((char) => {
      return this.colorMap[char]
    }).join('')
  }
}