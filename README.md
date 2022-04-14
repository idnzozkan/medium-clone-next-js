# Medium Clone

Medium-like web application built with `Next.js` and `Sanity CMS`.

[Sanity](https://www.sanity.io/) is a content management system that lets the content teams work together in real-time. In this project, it is used as a kind of backend solution.

**Other used technologies are:** TypeScript, Tailwind CSS, React Hook Form

🔗 [Demo Link](https://medium-clone-next-js-pearl.vercel.app/)

## Installation

1 - Install the Sanity command line interface

```bash
$ npm i -g @sanity/cli
```

2 - Get to the `sanity` folder and initiate your own Sanity project in that folder

```bash
$ sanity init
```

3 - Add a CORS-origin rule to allow the frontend to request data

```bash
$ sanity cors add http://localhost:3000 --no-credentials
```

4 - Change your directory to `next` and rename the existing file named `.env.example` to `.env.local`. After that, open up the file and fill it in like the following.

```bash
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=
```

> You can obtain NEXT_PUBLIC_SANITY_DATASET and NEXT_PUBLIC_SANITY_PROJECT_ID from the sanity/sanity.json file. In order to get SANITY_API_TOKEN, you need to log in to Sanity, and then navigate to your project. After that, you should be able to see your API Token under the bottom of the API tab.

5 - Get to the `next` folder and install frontend dependencies

```bash
$ npm install
```

## Running locally

Run the Next.js project in development mode by using the following command

```bash
$ npm run dev
```

After that, you should be able to display the app on http://localhost:3000 in your browser.

## License

MIT License

Copyright (c) 2022 Deniz Ozkan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
