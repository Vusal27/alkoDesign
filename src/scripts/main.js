const moreBtn = document.getElementById("more");
const lessBtn = document.getElementById("less");
const wrapper = document.querySelector(".contest__list-wrap");

// Функция открытия и закрытия списка конкурсов
function toggleClass() {
    moreBtn.classList.toggle("_none");
    lessBtn.classList.toggle("_none");
    wrapper.classList.toggle("_full");
}

// Скролл к якорю
$("a").on('click', function(event) {
    if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 2000, function(){

            window.location.hash = hash;
          });
    }
});

// Скрытие и раскрытие блока с расписанием.
const timelineBtn = document.getElementById("timeline-title");
timelineBtn.addEventListener("click", event => {
    let target = event.target;
    target.nextElementSibling.classList.toggle('_display-none');
});

// Слайдер
const dotsList = document.querySelectorAll(".slider__dots-item");
const slider = document.querySelector(".slider__list");

for (var i=0; i<dotsList.length;i++) {
    let dot = dotsList[i];
    dot.addEventListener("click", event => {
        target = event.target;
        for (let i=0; i<dotsList.length;i++) {
            if (target !== dotsList[i]) {
                dotsList[i].classList.remove("slider__dots-item--active");
            }   
        }
        target.classList.add("slider__dots-item--active");
        data = target.getAttribute("data");
        position = data*33;
        slider.style.transform=`translateX(${-position}%)`;
    });
}

// Функция определения браузера с версие и вывода сообщения.
navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    
    var warning = `Ваша версия браузера ${M.join(' ')} устарела, рекомендуем установить последнюю версию`;

    M[0]==='Chrome' && M[1]<78 && alert(warning);
    M[0]==='Firefox' && M[1]<69 && alert(warning);
    M[0]==='Edge' && M[1]<18 && alert(warning);
    M[0]==='IE' && M[1]<11 && alert(warning);
    M[0]==='Safari' && M[1]<12 && alert(warning);
    M[0]==='Opera' && M[1]<58 && alert(warning);
    M[0]==='iOS Safari' && M[1]<13 && alert(warning);
    
    return M.join(' ');
})();