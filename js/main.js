/**
 * Created by lenovo on 17/12/5 005.
 */
//<!-- Initialize Swiper -->

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
// 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next'
    }
});
//音乐开始

var music = document.getElementById("music");
var musictu = document.querySelector(".musictu");
var bg = document.querySelector(".bg");
var audio = document.querySelector("audio");
var nima = 5;
music.onclick = function () {
    if (nima == 5) {
        musictu.style.animation = "none";
        bg.style.display = "none";
        audio.pause();
        nima = 1
    } else {
        musictu.style.animation = "dong 2s linear infinite";
        bg.style.display = "block";
        audio.play();
        nima = 5
    }
};
//音乐结束