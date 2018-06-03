# Getting started

In this example we will build a simple Hello World! page.

## Prerequests

__Teach__ is written in [NodeJS](https://nodejs.org/en/). Make sure to install it before you proceed.

We use [Git](https://git-scm.com/) later to download __Teach__.

## Installation

Download from github:

```
git clone https://github.com/foldik/teach.git
```

Install npm dependencies and link the package:

```
cd teach

npm install

npm link
```

Now you can use the `teach` command.


## Hello World!

__1.__ Initialize a new project.

```
teach init hello-world && cd hello-world
```

__2.__ Build the project.

```
teach build
```

__3.__ Show your website.

```bash
npm install http-server -g
```

```bash
http-server ./dist
```

##### You did it! Open [http://localhost:8080](http://localhost:8080) in the browser!
