# Peer Study Helping Frontend
This is the working repository for group project Peer Study Helping platform.

Project wiki can be found [here](https://github.sydney.edu.au/ELEC5619-2020/Peer_Study_Helping_Frontend/wiki).

**This is the frontend project repository, if you are looking for the backend project, checkout another repository inside this organization.**

## Setup
We recommend to use JetBrains WebStorm as the development and testing IDE.

If you want to use VSCode instead, there are a few extensions we recommend for Vue.js development in the last section.

### Install NodeJS
**Make sure you install NodeJS first!**

https://nodejs.org/zh-cn/download/

### Install Vue CLI
- Follow the official guide:

    https://cli.vuejs.org/zh/guide/installation.html

- Or use the command below in your terminal.
    ```shell
    npm install -g @vue/cli
    ```
### Install dependencies
In your project directory
```shell
npm install
```

### Compiles and hot-reloads for development
```shell
npm run serve
```

### Testing environment
The testing backend can be found in https://github.sydney.edu.au/ELEC5619-2020/DummyFlask.

Follow the README guide to run the mini backend.

For branch `chli4002`, the response data for testing can be found at `./src/assets/sample_ViewBooking.json`.

## Run
**Make sure you start the backend before the frontend!**

Follow the guide of backend repository to setup the Spring backend server. [Check this link](https://github.sydney.edu.au/ELEC5619-2020/Peer_Study_Helping_Backend/blob/master/README.md)

For frontend application, simply use the command below to run in dev mode.
```bash
npm run serve
```

## Reference documents
- Vue.js: https://cn.vuejs.org/index.html
- Vuex: https://vuex.vuejs.org/zh/guide/
- Vue CLI: https://cli.vuejs.org/guide/
- Element UI: https://element.eleme.io/#/zh-CN/component/layout
- Axios: https://github.com/axios/axios

## VSCode extensions
- Vetur
- ESLint
- npm
- Path Intellisense
- Node.js Extension Pack
