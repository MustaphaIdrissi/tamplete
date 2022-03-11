var swiper = new Swiper('.swiper', {
    slidesPerView: getDirection(),
    direction:'horizontal' ,
    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });
  var swiper = new Swiper('.swiper2', {
    slidesPerView:getDirection2(),
    
    direction: 'horizontal' ,
    navigation: {
      nextEl: '.nexttw',
      prevEl: '.prevtw',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;

      var direction = window.innerWidth <= 760 ? 1 :3 ;

  
    return direction;
  }

  function getDirection2() {
    var windowWidth = window.innerWidth;
 
    
   
   

      var direction = window.innerWidth <= 760 ? 1 : 2 ;

    
  
    return direction;
  }
  var btmu=document.getElementById('bluid');
  var afmenu=document.getElementById('menu');

  admnu();

  btmu.addEventListener('click',admnu);
  
  function admnu(){
    const dis=afmenu.style.display;
    console.log(dis);
    var windowWidth = window.innerWidth;

     

      if(windowWidth<=760){
    if(dis=='none'){
      afmenu.style.display="block";
    }else {
      afmenu.style.display="none";
    }
  }

  }

  