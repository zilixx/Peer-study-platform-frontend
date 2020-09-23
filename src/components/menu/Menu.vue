<template>
    <el-row>
        <el-col>
            <el-menu
                default-active="/"
                class="el-menu-vertical-demo"
                :router="true"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="/">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">Home</span>
                </el-menu-item>

                <el-menu-item index="/allcourse">
                    <i class="el-icon-menu"></i>
                    <span slot="title">All Courses</span>
                </el-menu-item>

                <el-menu-item index="/mycourse">
                    <i class="el-icon-menu"></i>
                    <span slot="title">My Courses</span>
                </el-menu-item>

                <el-submenu index="profile">
                    <template slot="title">
                        <i class="el-icon-s-tools"></i>
                        <span>My Profile</span>
                    </template>
                    <el-menu-item index="/viewbooking">
                        <i class="el-icon-s-order"></i>
                        <span slot="title">View Booking</span>
                    </el-menu-item>
                    <el-menu-item index="/register">
                        <i class="el-icon-s-promotion"></i>
                        <span slot="title">Resigter as Tutor</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {};
</script>

<style scoped>
span {
    font-size: 1.2em;
    padding-left: 10%;
}
i{
    padding-left: 20%;
}
</style>