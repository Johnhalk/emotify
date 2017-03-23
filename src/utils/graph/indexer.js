export function positiveIndexer (dataset) {
  const index = (
    ((dataset.anger * -8) +
    (dataset.happiness * 10) +
    (dataset.disgust * -6) +
    (dataset.fear * -2) +
    (dataset.contempt * -4) +
    (dataset.sadness * -10) +
    (dataset.neutral * 0)) / 10
  );
    return index
};
