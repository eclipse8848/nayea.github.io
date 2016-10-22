
var button_title = document.querySelector('.title');
var header = document.querySelector('header');
var title = document.querySelector('.title');
var logo = document.querySelector('.logo');
// var is_char_1_o_ani= document.querySelector('.char-1-o');
// var is_char_1_h_ani= document.querySelector('.char-1-h');
// var is_char_1__ani= document.querySelector('.char-1-');
// var is_char_1_n_ani= document.querySelector('.char-1-n');
// var is_char_1_a_1_ani= document.querySelector('.char-1-a-1');
// var is_char_1_y_ani= document.querySelector('.char-1-y');
// var is_char_1_e_ani= document.querySelector('.char-1-e');
// var is_char_1_a_2_ani= document.querySelector('.char-1-a-2');



var is_menu = false;

var toggle_menu = document.querySelector('.menu');
var toggle_logo = document.querySelector('.logo');

toggle_menu.onclick = toggleButtonAction;
// toggle_logo.onclick = toggleLogoAction;

console.log(header);
console.log(toggle_menu);

function toggleButtonAction(){

	// var pre_header_class = header.getAttribute('class');
	// console.log(pre_header_class);
	if( is_menu === false ){
		console.log('버튼누름');
		// var pre_header_class = header.getAttribute('class');
		// var removed_class = pre_header_class.replace('d-11','');
  //           header.setAttribute('class', removed_class.trim());
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