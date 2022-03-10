const axios = require("axios").default;

const newsApi = axios.create({
  baseURL: "https://nc-news-chris.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get(`/articles`, { params: { topic: topic } })
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then(({ data }) => {
    return data;
  });
};

export const getArticle = (id) => {
  return newsApi.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (articleId, limit) => {
  return newsApi
    .get(`/articles/${articleId}/comments`, { params: { limit: limit } })
    .then(({ data }) => {
      return data;
    });
};

export const getUser = (username) => {
  return newsApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const postComment = (username, comment, articleId) => {
  return newsApi
    .post(`articles/${articleId}/comments`, {
      username: username,
      body: comment,
    })
    .then(({ data }) => {
      return data;
    });
};
