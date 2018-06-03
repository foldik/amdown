# Getting started

__Amdown__ is a command line tool which helps you to create documentations, descriptions and teaching materials using an extendable markdown language.

Let's quickly go through the example below to get the idea, how can you use __Amdown__.

## Prerequests

__Amdown__ is written in [NodeJS](https://nodejs.org/en/). Make sure to install it before you proceed.

We use [Git](https://git-scm.com/) later to download __Amdown__.

## Installation

Download __Amdown__ from github:

```
git clone https://github.com/foldik/amdown.git
```

Install npm dependencies and link the package:

```
cd amdown

npm install

npm link
```


## Hello World!

Create an empty folder in your computer and open up a command line or bash.

Create a new folder called `pages` where you will store the content for your site.

```bash
mkdir pages
```

Create your hello world page.


```bash
echo # Hello World! > pages/hello.md
```

Configure the menu.


```bash
echo [{ "link": "/hello", "name": "Hello World" }] > menu.json
```

And generate your site!

```bash
amdown
```

### Congratulation!

Now you can serve your content to the public via [GitHub Pages](https://pages.github.com/) or just try it locally using the `static-server` npm package.

```bash
npm -g install static-server
```

```bash
cd dist/

static-server -p 8080
```

And you did it! [Here](http://localhost:8080) you go! :)
