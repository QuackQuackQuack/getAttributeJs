/**
 * getDataAttribute description
 * @param  {Object} obj Object.
 * @param  {array| string} searchWord searchWord.
 * @return {Object} get attributes info
 */
function getDataAttribute(obj, searchWord) {

  const newObj = {};
  const objAttributes = obj[0].attributes;
  for (let i = 0; i < objAttributes.length; i++) {
    if (objAttributes[i].specified) {

      // searchWord
      if (searchWord) {

        if (Array.isArray(searchWord)) {
          for (let j = 0; j < searchWord.length; j++) {
            if (objAttributes[i].name.indexOf(searchWord[j]) !== -1 ) {
              newObj[objAttributes[i].name] = objAttributes[i].value;
            }
          }
        } else {
          if (objAttributes[i].name.indexOf(searchWord) !== -1 ) {
            newObj[objAttributes[i].name] = objAttributes[i].value;
          }
        }
      } else {
        newObj[objAttributes[i].name] = objAttributes[i].value;
      }
    }
  }
  return newObj;
}
