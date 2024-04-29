function open_popup(url,wtitle) {
  var pos = (screen.width/2)-400;
  parent.window.open(url, wtitle, "width=800, height=600,top=0,left=" + pos);
}

// to automatically assign the onClick event without violating Content-Security-Policy,
// the anchor must be assigned the class 'popup_help' â€“ e.g.
// <a href='http://example.com/ class='popup_help'>Link</a>
document.addEventListener("DOMContentLoaded", function(){
    function addPopupHelp(elem,link) {
      elem.addEventListener('click', function(event){event.preventDefault(); open_popup(link,'help');}, false);
    }
    var elems = document.getElementsByClassName('popup_help');
    for (var i=0; i<elems.length; i++) {
      href = elems[i].getAttribute('href');
      if ( href != null ) {
        addPopupHelp(elems[i],href);
      }
    }
}, false);