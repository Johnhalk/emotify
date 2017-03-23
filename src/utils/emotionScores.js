export function emotionAverager (dataset) {
  var faceNumber = dataset.length
  var emotions = Object.keys(dataset[0].scores)
  var averageEmotions = {}

  emotions.forEach(function(emotion) {
    averageEmotions[emotion] = 0
    dataset.forEach(function(face) {
      averageEmotions[emotion] += face.scores[emotion]
    })
    averageEmotions[emotion] = averageEmotions[emotion] / faceNumber
  })
  return averageEmotions
}

export function getLargestEmotion(dataset) {
  var emotionsList =  Object.keys(removeNeutral(dataset))
  var maxEmotion = emotionsList.reduce(function(maxEmotion, currEmotion) {
      return Number(dataset[maxEmotion]) > Number(dataset[currEmotion]) ? maxEmotion : currEmotion
  });
  return maxEmotion
};

export function removeNeutral(dataset) {
  delete dataset['neutral'];
  return dataset
}
