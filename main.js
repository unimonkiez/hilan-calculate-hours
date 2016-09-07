alert(
  [].slice.call(
    document.getElementById('mainIFrame').contentWindow.document.getElementsByClassName('cDM')
  ).filter(function(span) {
    return span.innerHTML !== '&nbsp;'
  }).map(function(span) {
    var html = span.innerHTML;
    if (html.match(/[0-9]:[0-9]{2}/)) {
      var split = html.split(':');
      var hours = Number(split[0]);
      var minutes = Number(split[1]);
      return hours * 60 + minutes - (9 * 60);
    } else {
      return false;
    }
  }).reduce(function(a, b) {
    return a + b;
  })
);
