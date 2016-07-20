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

    b = document.getElementsByTagName('a') ;

    links = [] ;

    for(var i =0 ;i<b.length ;i++){

      if(b[i].href.search('/file/') > 0){ 
          links.push(b[i].href) ;
      }

    }      

    downloadAll(links) ;
      
    }
  }
);

