  document.querySelector('.collapsible__action').style.position = "absolute";
  document.querySelector('.collapsible__action--hidden').style.visibility = "hidden";
  document.querySelector('.collapsible__action--visible').style.visibility = "visible";
   

  function hiddenText() {
    let content = document.querySelector('.collapsible__content').animate([
        {        opacity: '1'    },
        {        opacity: '0'    }
    ],
        {   duration: 500,
            iterations: 1,
            fill: "forwards"} 
      )
      
      let visible = document.querySelector('.collapsible__action--visible').animate([
        {        opacity: '1',   },
        {        opacity: '0'    }
    ],
        {   duration: 800,
            iterations: 1,
            fill: "forwards"}
      )
      let hidden = document.querySelector('.collapsible__action--hidden').animate([
        {        opacity: '0',   },
        {        opacity: '1'    }
    ],
        {   duration: 800,
            iterations: 1,
            fill: "forwards"}
      )
     
  }
  function visibleText() {
    let content = document.querySelector('.collapsible__content').animate([
        {        opacity: '0' ,    },
        {        opacity: '1'  ,  }
    ],
        {   duration: 500,
            iterations: 1,
            fill: "forwards"} 
      )
      
     
      let visible = document.querySelector('.collapsible__action--visible').animate([
        {        opacity: '0',   },
        {        opacity: '1'    }
    ],
        {   duration: 800,
            iterations: 1,
            fill: "forwards"}
      )
      let hidden = document.querySelector('.collapsible__action--hidden').animate([
        {        opacity: '1',   },
        {        opacity: '0'    }
    ],
        {   duration: 800,
            iterations: 1,
            fill: "forwards"}
      )
  };
  let onOff= true;
  document.querySelector ('.collapsible__button').onclick = function hiddenVisible () {
   if(onOff){
    onOff = false;
    hiddenText();
    document.querySelector('.collapsible__action--hidden').style.visibility = "visible";
  document.querySelector('.collapsible__action--visible').style.visibility = " hidden";
   } else {
    visibleText();
    document.querySelector('.collapsible__action--hidden').style.visibility = "hidden";
  document.querySelector('.collapsible__action--visible').style.visibility = "visible";
    onOff= true;
  }
};

