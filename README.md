# create-ts-jest

A project generator for Node, Jest, and TypeScript apps.

## Getting Started

```bash
$ git clone git@github.com:Otis0620/create-ts-jest.git
```

### Prerequisites

- UNIX based systems
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/index.html#download-links)

### Installing

```bash
$ npm install
$ cd <location/of/create-ts-jest>/src
$ tsc
```

### Create New Project

#### Using Node

```bash
$ cd <location/where/new/project/should/live>
$ node <location/of/create-ts-jest>/index.js
```

#### Using Symlink

```bash
$ cd <location/of/create-ts-jest>
$ npm link
$ cd <location/where/new/project/should/live>
$ npx create-ts-jest <project-name>
```

Unlink project

```bash
$ cd <location/of/create-ts-jest>
$ npm unlink
```
