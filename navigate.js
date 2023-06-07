Tag('.fixed-action-btn .btn-floating').addEventListener('click', function(){

	Navigate.setAction('fixed-action-btn')

})

//Event fired when click on buttons of fixed-action-btn
let event_click = function (argument) {

	//Navigate.actions.pop()
	Navigate.setAction('modal-download')
	//$('.fixed-action-btn').floatingActionButton('close');

}

let action_tags = Tag('.fixed-action-btn li',3)
action_tags[0].addEventListener('click', event_click)
action_tags[1].addEventListener('click', event_click)

document.addEventListener('backbutton',() => Navigate.goBack())

//open("file:///storage/emulated/0/Android/data/com.gilfrancisco.streamder/files/videod/videod.m3u8","_system")