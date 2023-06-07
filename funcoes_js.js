/*function criarScript(a){
	
	var script_js = document.createElement('script')
	script_js.src=`http://${localStorage.getItem('host')}/js/${a}.js?t=`//+encodeURIComponent(new Date)
	document.body.appendChild(script_js)
	return a
}*/

//Returns an HTML element from a selector. If argument b is null it returns an element, unlike returns all elements
function Tag(a,b){
	//alert([a,b].join(""))
	return document[`querySelector${b?'All':''}`](a);
	//return  !b? document.querySelector(a) : document.querySelectorAll(a)
	
}


//Validates if a string is a JSON 
function isJSON(a){
	try{
		JSON.parse(a)
		return true
	} catch(e){
		return false
	}
}

function randomNumber() {

	let min = arguments[0],max = arguments[1]

	return num = Math.floor(Math.random() * (max - min + 1)) + min   
}

function encryptData(url){
	
	
	
	//var url = (arguments[0])
	url = Encrypt.toBase64(url)
		//console.log(url)
	url = Encrypt.splitInTwo(url)
	//url = Encrypt.reverseCase(url)
		//console.log(url)
	url = Encrypt.addNumbersRandomly(url)
		//console.log(url)
	//url = Encrypt.addUuid(url)
		//console.log(url)
	url = Encrypt.toCodePoint(url)
	return url
	
}

function decryptData(){
	//Decryption process
		

	var url = arguments[0]
			
	url = Encrypt.toCodePoint(url, true)
			//url = Decrypt.removeUuid(url)
	url = Decrypt.removeNumbers(url)

			//url = Encrypt.reverseCase(url)
	url = Encrypt.splitInTwo(url)
	url = Decrypt.toBase64(url)
			//url = decodeURI(url)
	return (url)

	
}
/*
function UpdateHost(){

	var url = 'http://gilluisf.blogspot.com/2022/10/sitehttpmeusitecomversao10.html'
	cordova.plugin.http.get(url,{},{},function(evt){

		var tags = new DOMParser().parseFromString(evt.data, 'text/html').querySelectorAll("meta[property]")

		var posicao = Object.keys(tags).find(function(t){

			if (tags[t].getAttribute('property').startsWith('og:title')) {

				return true

			}
		})
		
		var temp_info = tags[posicao].getAttribute('content').split(';')
		
		localStorage.setItem('host', temp_info[0])
		localStorage.setItem('versao_app',temp_info[1])

	}, function(){

		UpdateHost()

	})
	
	//	alert("updating host..."+url)
}*/

//Remove all non alphanumerical characters from a string
function removeAccent(){

    return arguments[0].replace(/[^0-9a-z]/gi,'')

}
/*
	alert("erro")
}*/
//document.addEventListener("deviceready", UpdateHost)