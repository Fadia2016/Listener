function CustomValidation(){
	this.invalidities=[];
}


CustomValidation.prototype={
	addInvalidaity: function(message){
		this.invalidities.push(message);
	},
	getInvalidities: function(){
		return this.invalidities.join('. \n');
	},
	checkValidity: function(input){

		if(input.value.length < 3){
			this.addInvalidaity('need to be more than 3');
			var element= document.querySelector('label[for="username"] li:nth-child(1)');
			element.classList.add('invalid');
			element.classList.remove('valid');

		}else{

			var element= document.querySelector('label[for="username"] li:nth-child(1)');
			element.classList.remove('invalid');
			element.classList.add('valid');
		}

		if(input.value.match(/[^a-zA-Z0-9]/g) ){
			this.addInvalidaity('only letters');
			var element= document.querySelector('label[for="username"] li:nth-child(2)');
			element.classList.add('invalid');
			element.classList.remove('valid');

		} else{

			var element= document.querySelector('label[for="username"] li:nth-child(2)');
			element.classList.remove('invalid');
			element.classList.add('valid');

		}
	}
};

var n = 0;


function CustomValidation2(){
	this.invalidities2=[];
}


CustomValidation2.prototype={
	addInvalidaity2: function(message){
		this.invalidities2.push(message);
	},
	getInvalidities2: function(){
		return this.invalidities2.join('. \n');
	},
	checkValidity2: function(input){

		if(input.value.length < 10){
			this.addInvalidaity2('need to be 10 charactars or more');
			var element= document.querySelector('label[for="password"] li:nth-child(1)');
			element.classList.add('invalid');
			element.classList.remove('valid');

		}else{

			var element= document.querySelector('label[for="password"] li:nth-child(1)');
			element.classList.remove('invalid');
			element.classList.add('valid');
		}

		if(input.value.includes("q")||input.value.includes("w")|| input.value.includes("e")||input.value.includes("r")||input.value.includes("t")||input.value.includes("y")
			||input.value.includes("u")||input.value.includes("i")||input.value.includes("o") ||input.value.includes("p")||input.value.includes("a")||input.value.includes("s")||input.value.includes("d")
			||input.value.includes("f")||input.value.includes("g")||input.value.includes("h")||input.value.includes("j")||input.value.includes("k")||input.value.includes("l")||input.value.includes("z")
			||input.value.includes("x")||input.value.includes("c")||input.value.includes("v")||input.value.includes("b")||input.value.includes("n")||input.value.includes("m") ){

			var element= document.querySelector('label[for="password"] li:nth-child(2)');
			element.classList.remove('invalid');
			element.classList.add('valid');

		} else{
			this.addInvalidaity2('small letters ');
			var element= document.querySelector('label[for="password"] li:nth-child(2)');
			element.classList.add('invalid');
			element.classList.remove('valid');

		}

		if(input.value.includes("Q")||input.value.includes("W")|| input.value.includes("E")||input.value.includes("R")||input.value.includes("T")||input.value.includes("Y")
			||input.value.includes("U")||input.value.includes("I")||input.value.includes("O") ||input.value.includes("P")||input.value.includes("A")||input.value.includes("S")||input.value.includes("D")
			||input.value.includes("F")||input.value.includes("G")||input.value.includes("H")||input.value.includes("J")||input.value.includes("K")||input.value.includes("L")||input.value.includes("Z")
			||input.value.includes("X")||input.value.includes("C")||input.value.includes("V")||input.value.includes("B")||input.value.includes("N")||input.value.includes("M") ){

			var element= document.querySelector('label[for="password"] li:nth-child(3)');
			element.classList.remove('invalid');
			element.classList.add('valid');

		} else{
			this.addInvalidaity2('big letters');
			var element= document.querySelector('label[for="password"] li:nth-child(3)');
			element.classList.add('invalid');
			element.classList.remove('valid');

		}

		if(input.value.includes("0")||input.value.includes("1")|| input.value.includes("2")||input.value.includes("3")||input.value.includes("4")||input.value.includes("5")
			||input.value.includes("6")||input.value.includes("7")||input.value.includes("8") ||input.value.includes("9")){

			var element= document.querySelector('label[for="password"] li:nth-child(4)');
			element.classList.remove('invalid');
			element.classList.add('valid');

		} else{
			this.addInvalidaity2('numbers');
			var element= document.querySelector('label[for="password"] li:nth-child(4)');
			element.classList.add('invalid');
			element.classList.remove('valid');

		}


	}
};






function CustomValidation3(){
	this.invalidities3=[];
}


CustomValidation3.prototype={
	addInvalidaity3: function(message){
		this.invalidities3.push(message);
	},
	getInvalidities3: function(){
		return this.invalidities3.join('. \n');
	},
	checkValidity3: function(input,y){

		if(input.value ==passwordInput.value){
			
			var element= document.querySelector('label[for="password2"] li:nth-child(1)');
			element.classList.remove('invalid');
			element.classList.add('valid');

		}else{
			this.addInvalidaity3('need to be more than 3');
			var element= document.querySelector('label[for="password2"] li:nth-child(1)');
			element.classList.add('invalid');
			element.classList.remove('valid');
		}

	}
};










var usernameInput =document.getElementById('username');
usernameInput.CustomValidation = new CustomValidation();




var passwordInput =document.getElementById('password');
passwordInput.CustomValidation2 = new CustomValidation2();




var passwordRepeatInput = document.getElementById('rpass');

passwordRepeatInput.CustomValidation3 = new CustomValidation3();



usernameInput.addEventListener('keyup', function(){

	usernameInput.CustomValidation.checkValidity(this);
})



passwordInput.addEventListener('keyup', function(){

	passwordInput.CustomValidation2.checkValidity2(this);
	passwordRepeatInput.CustomValidation3.checkValidity3(passwordRepeatInput,passwordInput);
})





passwordRepeatInput.addEventListener('keyup', function(){

	passwordRepeatInput.CustomValidation3.checkValidity3(this,passwordInput);
})







