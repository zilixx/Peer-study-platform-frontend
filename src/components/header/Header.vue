<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="5">
            <div id="welcome"><i class="el-icon-user" id="usericon"></i>{{user.name}}</div>
        </el-col>
        <el-col :span="5">
            <img src="../../assets/usyd-logo.png" id="logo"/>
        </el-col>
        <el-col :span="5">
            <el-button @click="userLogout(user.name)">Logout</el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Header",
    props: ["user"],
    methods: {
        // TODO: untested API call
        userLogout: function (userName) {
            this.$axios
                .get("/api/logout", {
                    params: {
                        userName: userName,
                    },
                })
                .then((response) => {
                    if (response.logoutStat) {
                        console.log(userName + " has logout.");
                    } else {
                        console.log(userName + " logut failed !");
                    }
                });
        },
    },
};
</script>

<style scoped>
img {
    height: 55px;
}
#welcome {
    font-size: 1.2em;
}
#welcome i{
    font-size: 1.3em;
}
#usericon{
    padding-right: 2%;
}
.el-row{
    height: 100%;
}
.el-col{
    height: 100%;
}
</style>
