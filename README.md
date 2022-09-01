# News App Backend 📰

### Table of Contents

-   [Description](#description)
    -   [Technologies Used](#technologies-used)
-   [Launching the Project](#launching-the-project)
    -   [Check for NodeJS](#check-for-nodejs)
    -   [Cloning and Installing dependencies](#cloning-and-installing-dependencies)
    -   [Environment dependencies](#environment-dependencies)
    -   [Running the code](#running-the-code)
    -   [Testing the API](#testing-the-api)
-   [Live Version of App](#live-version-of-app)
-   [Credits](#credits)
-   [Author](#author)

## Description

News App is a mini data-as-a-service project built on top of [NewsCatcher API](https://docs.newscatcherapi.com/) to make easier the process of using the services provided by NewsCatcher API.

**NOTE** This application is not affiliated in anyway to the [NewsCatcher API](https://docs.newscatcherapi.com/) or their developers. This is merely a side project.

### Technologies Used 👩‍💻🏗

This project was built using:

-   NodeJS, Express.js
-   Axios (for fetching data)

## Launching the Project 🚀🚀

To be able to run this project on your local machine, make sure you have [NodeJS](https://nodejs.org/) installed on your computer.

#### Check for NodeJS

On your terminal, run the code below

```shell
npm --version
npx --version
```

### Cloning and Installing dependencies ⚙

On your terminal, run the code below

```shell
git clone https://github.com/E-Zbox/news_app.git
```

Once you have successfully cloned the repository, `cd news_app` on your terminal.

While in the root directory of the project, run the code below on your terminal

```shell
npm install
```

After installation, go to [NewsCatcher API](https://docs.newscatcherapi.com/) and setup an account if you are a new user, follow the steps provided on their page to create a unique API key.

### Environment dependencies

Update your `.env.development` file in the root directories with your unique API key gotten from the NewsCatcher API.

Now, set your **NODE_ENV** variable on your terminal with this code

-   For Linux or mac OS users

```shell
export NODE_ENV=development
```

-   For Windows users

```shell
SET NODE_ENV=development
```

### Running the code

Run the code below on your terminal

```shell
npm run dev
```

### Testing the API 🧪

On your browser or Postman, run the following code below to get news articles about "Elon Musk"

```shell
localhost:[[PORT]]/search?topic="Elon Musk"
```

#### DON'T FORGET TO INCLUDE THE API KEY PROVIDED BY NEWSCATCHER API IN YOUR HEADERS

Perform the operation below in your browser or Postman

```javascript
...
{
headers: {
	"x-api-key": `[[YOUR_API_KEY]]`
	}
}
```

**Phew.**

**Congratulations 🎉🍾 you successfully made your first request**

### Live Version of App

[**Node Project**](https://)

[**Postman Documentation**](https://)

### Credits

[NewsCatcher API](https://docs.newscatcherapi.com/)

### Author

Developed by [Ononogbu Ebenezer](https://twitter.com/ceoCodes)
