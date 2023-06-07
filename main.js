document.addEventListener('deviceready', function() {
 $('.tabs').tabs({swipeable:false});
 $('.sidenav').sidenav({
     onOpenEnd:function(){

         //console.log('menu_opened')
         Tag('.sidenav').setAttribute('open','true')
         Navigate.actions.push('sidenav')
     },onCloseEnd:function (argument) {

         Tag('.sidenav').setAttribute('open','false')

     },preventScrolling:true
     
     
 })
 $('.modal').modal();
 $('.fixed-action-btn').floatingActionButton();
 
 
 /*Tag(".sidenav ul li a",4).forEach(
 	elem => 
 	elem.addEventListener("click", function(){
 		Navigate.goBack()
 	})
 )*/
 Tag('.fixed-action-btn').addEventListener('click', function(){
	 document.forms[0].reset()
     $('.fixed-action-btn').floatingActionButton('open');
 
 }) 
	
	//Changing indicator color to purple
 	Tag(".indicator").style.background='#7e57c2' 
 
 //var logo = Tag('.brand-logo')
	requestPermission()
	/*var divLogo = Tag("#logo") 
	divLogo.style.opacity='0'
	setTimeout(a=>  divLogo.remove(),500)*/
})

//Creating a random key to encrypt and decrypt data
if (localStorage.getItem('key')) {

	localStorage.setItem('key', randomNumber(0,50000))
 
}


//API.setPoints()
//API.setPoints()
//setInterval(() => API.setPoints(); 1000)
//alert(cordova.file.externalCacheDirectory)