var Links = {
  setColor:function(Color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color',Color);
  }
}
var Body = {
setColor:function(Color){
  // document.querySelector('body').style.color = Color;
  $('body').css('color',Color);
},
setBackgroundColor:function (Color) {
  // document.querySelector('body').style.backgroundColor = Color;
  $('body').css('backgroundColor',Color);
}
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
