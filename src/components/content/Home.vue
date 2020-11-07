<template>
    <div id="home-page">
        <br>
        <br>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <h1 id="welcome-msg">Welcome to Peer Helping, {{ this.$store.getters.getUser.username }} </h1>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" :gutter="20">
            <el-col :span="6">
                <p>
                    <span>{{ this.userNum }}</span><br> student users have joined
                </p>
            </el-col>
            <el-col :span="6">
                <p>
                    <span>{{ this.tutorNum }}</span><br> registered student tutor
                </p>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" :gutter="20">
            <el-col :span="6">
                <p>
                    <span>{{ this.courseNum }}</span><br> courses available
                </p>
            </el-col>
            <el-col :span="6">
                <p>
                    <span>{{ this.bookingNum }}</span><br> reserved helping session
                </p>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            userNum: 0,
            tutorNum: 0,
            courseNum: 0,
            bookingNum: 0
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        /**
         * Get statistics from backend
         */
        getData() {
            this.$axios.get("http://localhost:8888/stat").then((response) => {
                let res = response.data[0]
                this.userNum = res.userNum;
                this.tutorNum = res.tutorNum;
                this.courseNum = res.courseNum;
                this.bookingNum = res.bookingNum;
            });
        }
    }
}
</script>

<style scoped>
#home-page {
    width: 100%;
    text-align: center;
}

h1#welcome-msg {
    font-size: 1.5em;
    line-height: 1.2;
}

.el-row {
    text-align: center;
}

.el-row.heading-text {
    margin-top: 15px;
}

p {
    background-color: #fbffff;
    font-size: 1.3em;
    border-radius: 5px;
    padding: 20px 0;
}

.el-col p span {
    line-height: 1.3;
    font-size: 1.6em;

}
</style>