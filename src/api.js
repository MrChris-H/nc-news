const axios = require("axios").default;

const newsApi = axios.create({
  baseURL: "https://nc-news-chris.herokuapp.com/api",
});

export const getArticles = (topic, sort, order) => {
  return newsApi
    .get(`/articles`, { params: { topic: topic, sort_by: sort, order: order } })
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

export const patchArticle = (articleId, inc) => {
  return newsApi
    .patch(`/articles/${articleId}`, { inc_votes: inc })
    .then(({ data }) => {
      return data;
    });
};
export const patchComment = (commentId, inc) => {
  return newsApi
    .patch(`/comments/${commentId}`, { inc_votes: inc })
    .then(({ data }) => {
      return data;
    });
};
export const deleteComment = (commentId) => {
  return newsApi.delete(`/comments/${commentId}`).then(() => {});
};

export const deleteArticle = (articleId) => {
  return newsApi.delete(`/articles/${articleId}`).then(({ data }) => {});
};
