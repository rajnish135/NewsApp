export const validCategories = [
  "world", "business", "technology", "entertainment", "sports",
  "science", "health", "lifestyle", "education", "food", "politics"
];

export const isCategory = (input) => {
  return validCategories.includes(input.toLowerCase());
};

export const getNewsUrl = (input, apiKey) => {

  const keywordOrCategory = input || "India";
  const isCat = isCategory(keywordOrCategory); 

  return isCat
    ? `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&category=${keywordOrCategory.toLowerCase()}&language=en`
    : `https://api.currentsapi.services/v1/search?apiKey=${apiKey}&keywords=${keywordOrCategory}&language=en&page_size=100`;
};
