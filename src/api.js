const axios = require("axios").default;

const newsApi = axios.create({
  baseURL: "https://nc-news-chris.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get(`/articles`, { params: { topic: topic } })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then(({ data }) => {
    return data;
  });
};
