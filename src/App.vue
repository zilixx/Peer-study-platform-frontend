<template>
    <el-container>
        <el-header>
            <Header :user="user" />
        </el-header>
        <el-container class="main">
            <el-aside width="25%">
                <Menu />
            </el-aside>
            <el-main>
                <!-- <h1>{{placeholder}}</h1> -->
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from "./components/header/Header.vue";
import Menu from "./components/menu/Menu.vue";

export default {
    name: "App",
    components: {
        Header,
        Menu,
    },
    methods: {
        updateUser: function () {
            this.$axios.get("/api/getuser").then((response) => {
                this.user = response.user;
            });
        },
    },
    data() {
        return {
            user: {
                name: "user 1",
            },
            placeholder: "In progress",
        };
    },
};
</script>

<style>
html,
body,
#app,
.el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0;
    /*外部间距也是如此设置*/
    margin: 0;
    /*统一设置高度为100%*/
    height: 100%;
}

/* Element UI Style */
.el-header,
.el-footer {
    background-color: #cde3ecfd;
    color: rgb(0, 0, 0);
    text-align: center;
    line-height: 60px;
}

.el-aside {
    color: #333;
    text-align: left;
    line-height: 200px;
}

.el-main {
    background-color: #f5f5f5;
    color: #333;
}

body {
    height: 100%;
}

body > .el-container {
    /* margin-bottom: 40px; */
    /* height: 100%; */
}

.main {
    height: 100%;
}

/* Remove the padding from Element UI */
main.el-main{
    padding: 0 0;
}
</style>

