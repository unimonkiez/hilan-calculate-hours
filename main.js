alert(
  [].slice.call(
    document.getElementById('mainIFrame').contentWindow.document.getElementsByClassName('cDM')
  ).filter(function(td) {
    return td.innerHTML !== '&nbsp;'
  }).map(function(td) {
    var html = td.innerHTML;
    if (html.match(/[0-9]:[0-9]{2}/)) {
      var split = html.split(':');
      var hours = Number(split[0]);
      var minutes = Number(split[1]);
      var wholeTd = td.parentNode.parentNode.parentNode.parentNode;
      var isFriday = Array.from(wholeTd.parentNode.childNodes).indexOf(wholeTd) === 7;
      return (hours * 60) + minutes - (isFriday ? 0 : (9 * 60));
    } else {
      return false;
    }
  }).reduce(function(a, b) {
    return a + b;
  })
);
