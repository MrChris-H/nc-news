
# [North News](https://north-news.netlify.app/)

The [North News](https://north-news.netlify.app/) front-end JS project integrates with the [NC-News-Chris API](https://github.com/MrChris-H/nc-news-chris) API to generate a news article website that includes comments and likes and dislikes. Project includes: 

  - View List of Articles
  - Filter by Article Topic
  - Sort by various properties
  - Order ASC or DESC
  - Mobile and Desktop Navigation
  - View More Information for Individual Articles
  - View List of Article comments
  - Post comment
  - Delete Comments/Articles (Signed in User)
  - Voting Comments/Articles 

When visiting the webpage all articles are rendered. You can filter articles using the navigation bar along the top (desktop) or the drop-down menu between the header and articles list. Between the header and articles list is a sorting and ordering feature. The specific article information, including body and comments, is loaded when you click an article. Commenting can be done from the articles/articleId pages by providing an input below the article card. You can delete comments and articles by pressing the black x, provided that you are logged in as the author. Each article and comment can be voted on using the up and down arrows located at the bottom left corner.    [BACK END PROJECT](https://github.com/MrChris-H/nc-news-chris)
## Run Locally
### Requirements

node - v17.3.0\

### Cloning & Set-up

#### Clone the project

```bash
  git clone https://github.com/MrChris-H/nc-news.git
```

#### Go to the project directory

```bash
  cd nc-news
```

#### Install dependencies

```bash
  npm install
```

### Starting

#### Start React App

```bash
  npm run start
```


## Tech Stack

**App:** Node, React, HTML, CSS
