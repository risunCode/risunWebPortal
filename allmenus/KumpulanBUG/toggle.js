function blockToggle(what) {
  //ico = what+'ico';
  if (document.getElementById(what).style.visibility == "hidden") {
    document.getElementById(what).style.visibility = "visible";
    document.getElementById(what).style.display = "";
    //document.getElementById(ico).src = "{base_dir}images/minus.gif";
  } else {
    document.getElementById(what).style.visibility = "hidden";
    document.getElementById(what).style.display = "none";
    //document.getElementById(ico).src = "{base_dir}images/plus.gif";
  }
}

// to automatically assign the onClick event without violating Content-Security-Policy:
// - the element that should get the onClick (outer) must have class=toggle and an attribute toggle set to the ID of the object to toggle, eg:
// <div class='toggle' toggle='mod1'>Click me to toggle</div><div id='mod1'>I will be toggled</div>
// - the element to toggle (inner) should have style='visibility:hidden;display:none' to be initially invisible
document.addEventListener("DOMContentLoaded", function(){
    function addToggleListener(trigger,mod) {
      trigger.addEventListener('click', function(){blockToggle(mod)}, false);
    }
    var trigs = document.getElementsByClassName('toggle');
    for (var i=0; i<trigs.length; i++) {
      targID = trigs[i].getAttribute('toggle');
      if ( targID != null ) {
        addToggleListener(trigs[i],targID);
      }
    }
}, false);