
var button_title = document.querySelector('.title');
var header = document.querySelector('header');
var title = document.querySelector('.title');
var logo = document.querySelector('.logo');
// var ohnayea = document.querySelector('.ohnayea');
// var frontend = document.querySelector('.front');
// var developer = document.querySelector(.'developer');
var is_char_1_o = document.querySelector('.char-1-o');
var is_char_1_h= document.querySelector('.char-1-h');
var is_char_1_= document.querySelector('.char-1-');
var is_char_1_n= document.querySelector('.char-1-n');
var is_char_1_a_1= document.querySelector('.char-1-a-1');
var is_char_1_y= document.querySelector('.char-1-y');
var is_char_1_e= document.querySelector('.char-1-e');
var is_char_1_a_2= document.querySelector('.char-1-a-2');

var is_char_2_f = document.querySelector('.char-2-f');
var is_char_2_r= document.querySelector('.char-2-r');
var is_char_2_o= document.querySelector('.char-2-o');
var is_char_2_n_1= document.querySelector('.char-2-n-1');
var is_char_2_t= document.querySelector('.char-2-t');
var is_char_2_e= document.querySelector('.char-2-e');
var is_char_2_n_2= document.querySelector('.char-2-n-2');
var is_char_2_d= document.querySelector('.char-2-d');

var is_char_3_d = document.querySelector('.char-3-d');
var is_char_3_e_1= document.querySelector('.char-3-e-1');
var is_char_3_v= document.querySelector('.char-3-v');
var is_char_3_e_2= document.querySelector('.char-3-e-2');
var is_char_3_l= document.querySelector('.char-3-l');
var is_char_3_o= document.querySelector('.char-3-o');
var is_char_3_p= document.querySelector('.char-3-p');
var is_char_3_e_3= document.querySelector('.char-3-e-3');
var is_char_3_r= document.querySelector('.char-3-r');




is_char_1_o.addEventListener('animationstart',listener,false);
is_char_1_o.addEventListener('animationend',listener,false);

function listener(push){

	switch(push.type){
		case 'animationend' :
		  is_char_1_o.classList.remove('char-1-o-play');
		  is_char_1_h.classList.remove('char-1-h-play');
		  is_char_1_.classList.remove('char-1-play');
		  is_char_1_n.classList.remove('char-1-n-play');
		  is_char_1_a_1.classList.remove('char-1-a-1-play');
		  is_char_1_y.classList.remove('char-1-y-play');
		  is_char_1_e.classList.remove('char-1-e-play');
		  is_char_1_a_2.classList.remove('char-1-a-2-play');

		  is_char_2_f.classList.remove('char-2-f-play');
		  is_char_2_r.classList.remove('char-2-r-play');
		  is_char_2_o.classList.remove('char-2-o-play');
		  is_char_2_n_1.classList.remove('char-2-n-1-play');
		  is_char_2_t.classList.remove('char-2-t-play');
		  is_char_2_e.classList.remove('char-2-e-play');
		  is_char_2_n_2.classList.remove('char-2-n-2-play');
		  is_char_2_d.classList.remove('char-2-d-play');

		  is_char_3_d.classList.remove('char-3-d-play');
		  is_char_3_e_1.classList.remove('char-3-e-1-play');
		  is_char_3_v.classList.remove('char-3-v-play');
		  is_char_3_e_2.classList.remove('char-3-e-2-play');
		  is_char_3_l.classList.remove('char-3-l-play');
		  is_char_3_o.classList.remove('char-3-o-play');
		  is_char_3_p.classList.remove('char-3-p-play');
		  is_char_3_e_3.classList.remove('char-3-e-3-play');
		  is_char_3_r.classList.remove('char-3-r-play');

		  break;
	}
}

title.onclick = function(){
	is_char_1_o.classList.add('char-1-o-play');
	is_char_1_h.classList.add('char-1-h-play');
      is_char_1_.classList.add('char-1-play');
      is_char_1_n.classList.add('char-1-n-play');
      is_char_1_a_1.classList.add('char-1-a-1-play');
      is_char_1_y.classList.add('char-1-y-play');
	is_char_1_e.classList.add('char-1-e-play');
	is_char_1_a_2.classList.add('char-1-a-2-play');

      is_char_2_f.classList.add('char-2-f-play');
      is_char_2_r.classList.add('char-2-r-play');
      is_char_2_o.classList.add('char-2-o-play');
      is_char_2_n_1.classList.add('char-2-n-1-play');
      is_char_2_t.classList.add('char-2-t-play');
      is_char_2_e.classList.add('char-2-e-play');
      is_char_2_n_2.classList.add('char-2-n-2-play');
      is_char_2_d.classList.add('char-2-d-play');

      is_char_3_d.classList.add('char-3-d-play');
	is_char_3_e_1.classList.add('char-3-e-1-play');
	is_char_3_v.classList.add('char-3-v-play');
	is_char_3_e_2.classList.add('char-3-e-2-play');
	is_char_3_l.classList.add('char-3-l-play');
	is_char_3_o.classList.add('char-3-o-play');
	is_char_3_p.classList.add('char-3-p-play');
	is_char_3_e_3.classList.add('char-3-e-3-play');
	is_char_3_r.classList.add('char-3-r-play');
}












var is_menu = false;

var toggle_menu = document.querySelector('.menu');
var toggle_logo = document.querySelector('.logo');

toggle_menu.onclick = toggleButtonAction;
// toggle_logo.onclick = toggleLogoAction;

console.log(header);
console.log(toggle_menu);

function toggleButtonAction(){

	if( is_menu === false ){
		console.log('버튼누름');
            var pre_header_class = header.getAttribute('class');
		header.setAttribute('class', pre_header_class+' '+'header-w-large');
		var pre_title_class = title.getAttribute('class');
		title.setAttribute('class', pre_title_class+' '+'title-hidden');
	}
	else{
		console.log('버튼 안눌렀습니다');
	}

};

// function toggleLogoAction(){

// 	if( is_menu === false ){
// 		console.log('로고누름');
// 		var pre_header_class = header.getAttribute('class');
// 		var removed_class = pre_header_class.replace('header-w-large','');
//             header.setAttribute('class', removed_class.trim());
//             var pre_header_class = header.getAttribute('class');
// 		header.setAttribute('class', pre_header_class+' '+'header-w-small');
// 	}
// 	else{
// 		console.log('버튼 안눌렀습니다');
// 	}

// };

// console.log(button_title);

// button_title.onclick =function(){

//     var pre_char_1_o_class = is_char_1_o_ani.getAttribute('class');

//        if( pre_char_1_o_class === 'char-1-o')
//         {  is_char_1_o_ani.setAttribute('class', pre_char_1_o_class+' '+'char-1-o-ani') } 
//        else
// 	  {    
// 	  	var removed_class = pre_char_1_o_class.replace('char-1-o-ani','');
// 	       is_char_1_o_ani.setAttribute('class', removed_class.trim() );
// 	  }

// };