chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      
      function downloadAll(urls) {
      var link = document.createElement('a');

      link.setAttribute('download', null);
      link.style.display = 'none';

      document.body.appendChild(link);

      for (var i = 0; i < urls.length; i++) {
        link.setAttribute('href', urls[i]);
        link.click();
      }

      document.body.removeChild(link);

    }

     function downloadlinks(){

    b = document.getElementsByTagName('a') ;

    links = [] ;

    for(var i =0 ;i<b.length ;i++){

      if(b[i].href.search('/file/') > 0){ 
          links.push(b[i].href) ;
      }

    }  

    uniq = []

    uniq.push(links[0]) ;

    for(var i=1 ;i<links.length ;i++){
        if(links[i]!=links[i-1]){
          uniq.push(links[i]) ;
        }

      }    

    for(i=0 ;i<uniq.length ;i++){
      uniq1 = [] ;
      uniq1.push(uniq[i]) ;

      downloadAll(uniq1) ;
      
      }
    }
    //main 
     
         window.scrollTo(0,document.body.scrollHeight);
         downloadlinks() ;
  
      
    }
  }
);

