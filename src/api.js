const axios = require("axios").default;

const newsApi = axios.create({
  baseURL: "https://nc-news-chris.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data;
  });
};
