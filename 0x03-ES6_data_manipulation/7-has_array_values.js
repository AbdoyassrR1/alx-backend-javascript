export default function hasValuesFromArray(set, list) {
  /* eslint-disable array-callback-return */
  let verdict = true;
  list.map((x) => {
    if (!set.has(x)) {
      verdict = false;
    }
  });
  return verdict;
}
