# Project

```
mkdir test-node-env && cd test-node-env
git init
type null > .gitignore
activate tools
git add .gitignore
git status
git cz --name cz_fogoprobr commit
```

```
chore(.gitignore): Initial commit
```

```
npm init
```

# Git
## git config

Alias configuration

```
git config alias.czf "cz --name=cz_fogoprobr commit"
git config alias.l "log --oneline"
git config alias.s "status"
```

# vscode

## python env

Choose python env

```Ctrl``` + ```Shift``` + ```P```

```
>Python: Select Interpreter
```

# Env

Environment file ```.env``` examples in a Node project<sup id="lfn1">[1](#fn1)</sup>.

```
type null > server.js
```

```js
// server.js
const port = process.env.PORT;
console.log(`Your port is ${port}`);
```

```
node server.js
```

```
(tools) \test-node-env>node server.js    
Your port is undefined
```

## Read env variables

### Command Line

|Command|Description|
| - | - |
|```set varname```|Display the value of the variable|
|```set varname=value```|Set or change the value of the variable (Note: no space before and after '=')|
|```set varname=```|Delete the variable by setting to empty string (Note: nothing after '=')|
|```set```|Display ALL the environment variables|

```
set PORT=8626
set PORT
node server.js
```

```
(tools) \test-node-env>node server.js    
Your port is 8626
```

```
set PORT=
set PORT
node server.js
```
```
(tools) \test-node-env>set PORT       
Environment variable PORT not defined

(tools) \test-node-env>node server.js 
Your port is undefined
```

### Env File

```
type nul > .env
```

```py
# .env
NODE_ENV=development
PORT=8626
```

```py
# .gitignore
.env
```

```
(tools) \test-node-env>set PORT       
Environment variable PORT not defined

(tools) \test-node-env>node server.js 
Your port is undefined
```

```
npm install dotenv
```

```js
// server.js
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626
```

```
(tools) \test-node-env>node server.js
Your port is undefined
Your port is 8626
```

The code requires the ```dotenv``` package and executes its config function ```config()```, which reads the ```.env``` file and sets the environment variables.

You can refer to the variables in code using the following syntax: ```process.env.YOUR_ENV_VAR_GOES_HERE```

## Encapsulate

It is recommend to create a module that has the responsibility of gathering environment variables. This makes it easy to see them all at once and map them to readable names.

Here are two good options to consider:

- Setting and exporting them manually in a module
- Use a library to read and export them in a module

Both techniques involve creating a module, but they differ in how the environment variables are mapped and exposed.

### Organizing Manually

```
type nul > config.js
```

```js
// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  nodeenv: process.env.NODE_ENV
};
```

```js
// server.js
const { port } = require('./config');
console.log(`Your port is ${port}`); // 8626
```

### Organize Using a Library

```js
// config.js 
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
const { parsed: envs } = result;
console.log(envs);
module.exports = envs;
```

```js
// server.js
const { NODE_ENV, PORT } = require('./config');
console.log(`Your port is ${PORT}`); // 8626
console.log(`Your env is ${NODE_ENV}`); // development
```

# Footnotes

**Reference:**

<sub>[<a id="fn1">1</a>]
Node.js Everywhere with Environment Variables! ([medium](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786))
[↩](#lfn1)
</sub>