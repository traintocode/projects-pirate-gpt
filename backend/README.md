# Backend for Pirate GPT Project

This directory contains the front end for the **Pirate GPT Chatbot Project** at [traintocode.com/projects/pirate-gpt](https://traintocode.com/projects/pirate-gpt/).  The back end consists of one [AWS Lambda](https://aws.amazon.com/lambda/) function written in Typescript and called with an HTTP request to the [function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html).  [Serverless Framework](https://www.serverless.com/) is used to simplify the deployment process.

## Getting Started

1. Install [Serverless Framework](https://www.serverless.com/) globally with `npm install -g serverless`


## Debugging Locally

There is a local entry point [./debug.ts](./debug.ts) that you can run with a NodeJS debugger such as [that included in Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-debugging).  Simply clone this repository, open in VSCode and hit **F5** (or select _Run -> Start Debugging_).





This directory contains the front end for the

project.  The front end is build with [https://vitejs.dev/](https://vitejs.dev/) using React and Typescript.

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
