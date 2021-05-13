export const fetchData = async (url) => {
  const response = await fetch(url);
  return response.text();
};

export const sanitizeString = (data) => {
  const regex = /[-.,]/g;
  data = data
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(regex, "")
    .split(" ")
    .filter((word) => word.trim().length > 0);

  return data;
};

export const calculateFrequencies = (words) => {
  // console.log(words);
  var freq = {};
  words.forEach((word) => {
    if (!freq[word]) {
      freq[word] = 0;
    }
    freq[word] += 1;
  });
  // console.log(freq);
  const computed = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return computed;
};
