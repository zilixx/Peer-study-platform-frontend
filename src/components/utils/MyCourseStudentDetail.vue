<template>
  <div id="container">
    <BackHeader :content="content" :from="from" />
    <el-table
      :data="studentList"
      stripe
      style="width: 100%"
      empty-text="No content available!"
    >
      <el-table-column prop="SID" label="Student ID">
      </el-table-column>
      <el-table-column prop="name" label="Student Name"> </el-table-column>
      <el-table-column prop="courseName" label="Course Name">
      </el-table-column>
      <el-table-column prop="date" label="Available time"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BackHeader from '../utils/BackHeader'

export default {
    name: "MyCourseStudentDetail",
    data() {
        return {
            content: "Students you are responsible for",
            from: "/mycourse",
            studentList: []
        }
    },
    components: {
        BackHeader
    },
    method() {

    },
    mounted() {

    },
}
</script>

<style>

</style>