# Inkantress.com Source Code

## To Run

This is a vite app built with typescript. It should function normally by installing dependencies as regular through `yarn` and run locally through `yarn dev`.

## To Deploy

- [push.js](https://github.com/ConorKelleher/inkantress.com/blob/main/push.js): This is simply how I deploy the website, authenticating with AWS (using a gitignored `.env` file), clearing the current s3 bucket containing my website and reuploading the new static build.

# License

MIT © [ConorKelleher](https://github/com/ConorKelleher)
