// in arr of strs
// out - obj with pyth, js, and other keys

// create lang obj
// loop over arr
// if el is pyth, increment pyth val by one
// if el is js, increment js val by one
// if anything else, push el to val of other key

// return lang obj

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

// 10 mins
// Perfect!

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

separateLanguages(["python", "python", "python", "javascript", "c++"]);
/*
{
  python: 3,
  javascript: 1,
  other: ["c++"],
}
*/
separateLanguages(["python", "python", "spanish", "javascript"]);
/*
  python: 2,
  javascript: 1,
  other: ["spanish"],
}
*/
separateLanguages(["greek", "french", "yoruba", "python"]);
/*
{
  python: 1,
  javascript: 0,
  other: ["greek", "french", "yoruba"],
}
*/
