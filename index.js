
javascript:(function() {
  var cards = document.getElementsByClassName('list-wrapper')[document.getElementsByClassName('list-wrapper').length - 2].getElementsByClassName('list-card');
  var total = 0;
  var pointValues = [ '1', '3', '5', '8', '13'];
  for (i = 0; i < cards.length ; i++ ) {
  var labels;
  if (cards[i].getElementsByClassName('list-card-labels').length ) {
    labels = cards[i].getElementsByClassName('list-card-labels');
  }
    if (labels[0].getElementsByClassName('card-label-green').length) {
      for (x = 0; x < labels[0].getElementsByClassName('card-label-green').length; x++ ) {
        var title = labels[0].getElementsByClassName('card-label-green')[x].getAttribute('title');
        if (pointValues.includes(title)) {
          total = total + parseInt(title);
        }
      }
    }
  }

  window.alert('Points completed ' + total);
  })();