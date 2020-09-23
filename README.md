# Dummy Vue project
For reference and experiment only, don't be too serious about it.
## Before setup
### Install NodeJS
**Make sure you install NodeJS first!**

https://nodejs.org/zh-cn/download/

### Install Vue CLI
Follow the official guide:

https://cli.vuejs.org/zh/guide/installation.html

Or use the command below in your teminal.
```shell
npm install -g @vue/cli
```
### Install dependencies
In your project directory
```shell
npm install
```

## Project setup
### Compiles and hot-reloads for development
```shell
npm run serve
```

### How to use axios in this project
Example: fire a GET request with parameter and print the response in console.
```js
this.$axios.get("\api\greeting?name=value").then((response) => {console.log(response)});
```

## Reference documents
- Vue: https://cn.vuejs.org/index.html
- Axios: https://github.com/axios/axios

## VSCode plugin
- Vetur
- ESLint
- npm
- Path Intellisense
- Node.js Extension Pack
