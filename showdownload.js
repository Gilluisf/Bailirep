
function startShowingDownloads(){
//console.log('show new downloads')
FileManager.getPaths(cordova.file.externalApplicationStorageDirectory + 'files/', function(folders) {

    //var totalFolders = 0
    //var pathsScaned = 0
    
    folders.forEach(function(elem) {

        

        if (getAllFileNames().includes(elem.name)) {

        } else if (elem.isDirectory) {

            //totalFolders++

            FileManager.get(elem.nativeURL + elem.name + '.mp4', function(entry) {
                //pathsScaned++
                //console.log(entry)
                var video = ShowDownloads
                video.entry = {
                    nativeURL: entry.nativeURL,
                    name: entry.name
                }

                //console.log(video.entry)
                video.print()
                video.mainTag = Tag(`div[alt=${removeAccent(video.entry.name)}]`)

                video.addEvents()
                video.exists()
                

                video.existsHandler = function(){

                   // console.log('existe')
                   setTimeout(function(){

                        video.exists()

                   }, 1000)
                    
                   
                }

                video.notexistsHandler=function(){

                    
                    //console.log('nao_existe')

                    if (video.mainTag) {

                        video.mainTag.remove()
                    }
                       //console.log(video.mainTag)

                }
                

                var alt_attribute = video.mainTag.getAttribute('alt')
                var size = 0
                var tag_size = Tag(`div[alt=${alt_attribute}] a`)
                //console.log(tag_size)
                video.getSize(function(info_file){

                    size += info_file.size
                    tag_size.innerText = formatBytes(size)       

                })

                var duration = 0
                var tag_duration = Tag(`div[alt=${alt_attribute}] span`)
                //console.log(tag_duration)
                //console.log(`Tag('div[alt=${alt_attribute}] span.card_title')`)
                video.getVideoDuration(function(info){


                       //setTimeout(function(){
                       		tag_duration.innerText = video.convertSeconds(info)
                       //}, 500)
                       
                       
 
                        
                })

                video.getThumb(function(){
                    var tag_cover = Tag(`div[alt=${alt_attribute}] img`)
                    //console.log(tag_cover)
                    tag_cover.src = (arguments[0])

                    if(tag_cover.src.indexOf('cache') > 1){

                    } else {

                        video.moveToCache(tag_cover.src, function(){

                            console.log(arguments[0])
                        })
                    }

                }, function(){

                    console.error(arguments[0])

                })
               // console.log(entry)



            }, function(error) {
                //pathsScaned++
                //This is not video
            })

        } else {

           //This is not a dir

        }
    })


    /*var timer_folders = setInterval(function(){

        if (totalFolders == pathsScaned) {

            clearInterval(timer_folders)
            startShowingDownloads()

        }
    },4000)*/
    
}, function(error) {

    //console.log(folders)
    //There are no videos

})

}
document.addEventListener('deviceready',startShowingDownloads)