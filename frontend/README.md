# Pirate GPT Project - Front End

This directory contains the front end for the **Pirate GPT Chatbot Project** at [traintocode.com/projects/pirate-gpt](https://traintocode.com/projects/pirate-gpt/).  The front end is build with [https://vitejs.dev/](https://vitejs.dev/) using React and Typescript.

## Running Locally

Open a new terminal in this subfolder of the repostiory and run

```sh
npm install

npm run dev
```

Then navigate to the URL in your terminal.

## Connecting The Back End

Once you have build and deployed the [back end code](../backend/README.md) to AWS Lambda and created a function URL, copy this url to your [App.tsx component](./src/App.tsx#L24)

```
    // NOTE: replace this url with the url of your lambda function once deployed:
    const response = await fetch('https://xxxxxxxx.lambda-url.eu-west-2.on.aws/', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages })
    });
```

## Deploying

You can deploy this front end as a static web application to most web hosting providers, see the Vite documentation on [deploying a static site](https://vitejs.dev/guide/static-deploy).  Below are instructions for some popular static hosting providers:

* [Deploying to Netlify](https://docs.netlify.com/welcome/add-new-site/)
* [Vite on Vercel](https://vercel.com/docs/frameworks/vite)
* [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
* [Hosting a static website using Amazon S3
 ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)