function getFaces (multi_face) {
  var face = []
  for(var i =0; i<multi_face.length; i++){
    face.push(multi_face[i].scores)
  }
  averageEmotions(face)
}

function averageEmotions (face) {
  var totals = face.reduce(function(totals, object, index) {
    Object.keys(object).forEach(function(key) {
      if (index !== face.length -1){
        totals[key] = totals[key] ? totals[key] + object[key] : object[key]
      } else {
        totals[key] = totals[key] ? (totals[key] + object[key])/face.length : object[key]
      }
    })
    console.log(totals)
    return totals
    // return totals

  }, {anger: 0});
}
