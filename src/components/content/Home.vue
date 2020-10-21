<template>
    <div>
        <h1>Welcome, {{username}} </h1>
<!--        TODO: remove this test uploader-->
        <el-upload action="http://localhost:8888/api/upload">
            <el-button>Upload</el-button>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: "Home",
    props: ["username"]
}
</script>

<style>

</style>