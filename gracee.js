/**
 * create obj
 *
 * loop over arr
 *  if word is python,
 *    if exists, add
 *    otherwise, create
 *  if word is js,
 *    if exists, add
 *    otherwise, create
 *  otherwise
 *    push to obj.other
 *
 * returns obj
 */

function separateLanguages(arr) {
  const languageCount = { python: 0, javascript: 0, other: [] };

  for (let language of arr) {
    if (language === "python") {
      languageCount.python++;
    } else if (language === "javascript") {
      languageCount.javascript++;
    } else {
      languageCount.other.push(language);
    }
  }

  return languageCount;
}

function separateLanguages(arr) {
  const langObj = { python: 0, javascript: 0, other: [] };

  for (let lang of arr) {
    if (lang === "python") {
      langObj.python++;
    } else if (lang === "javascript") {
      langObj.javascript++;
    } else {
      langObj.other.push(lang);
    }
  }

  return langObj;
}

function separateLanguages(languages) {
  let result = {
    python: 0,
    javascript: 0,
    other: [],
  };
  for (let language of languages) {
    if (language === "python") {
      result.python++;
    } else if (language === "javascript") {
      result.javascript++;
    } else {
      result.other.push(language);
    }
  }
  return result;
}
