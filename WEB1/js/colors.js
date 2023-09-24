var Body = {
    setColor:function (color){
        $('body').css('color', color);
        //document.querySelector('body').style.color = color;
    },

    setBackgroundColor:function(color){
        $('body').css('background-color', color);
        //document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor:function(color){
        $('a').css('color', color);
        //$: 모든 a태그에 대하여 적용하겠다

        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === '🌜'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        self.value = '☀️';

        //Links.setColor('powderblue');

    } else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = '🌜';

        //Links.setColor('blue');
    }
}