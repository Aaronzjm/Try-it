(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth>640) clientWidth=640;
      docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
      correctpx();
    };
    function correctpx(){
      var docEl = document.documentElement;
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth>640) clientWidth=640;
      var div = document.createElement('div');
      div.style.width = '1.4rem';
      div.style.height = '0';
      document.body.appendChild(div);
      var ideal = 28 * clientWidth / 320;
      var rmd = (div.clientWidth / ideal);
      if(rmd >1.2)
        docEl.style.fontSize = 20 * (clientWidth / 320)/ rmd + 'px';
      document.body.removeChild(div);
    }

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);