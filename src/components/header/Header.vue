<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="5">
            <div id="welcome"><i class="el-icon-user" id="usericon"></i>{{this.$store.getters.getUser.username}}</div>
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
        userLogout: function (userName) {
            console.log(userName + "has logout.");
            window.location.href = '/logout';
        }
    }
  }
</script>

<style scoped>
img {
    margin-top: 2px;
    height: 53px;
}
#welcome {
    font-size: 1.2em;
}
#welcome i{
    font-size: 1.3em;
}

#welcome span{
    background-color: #dfefef;
    padding: 3px;
    border-radius: 4px;
}

#usericon {
  padding-right: 2%;
}
.el-row{
    height: 100%;
}
.el-col{
    height: 100%;
}

.el-button#logout-button{
    margin-left: 70px;
}
</style>
