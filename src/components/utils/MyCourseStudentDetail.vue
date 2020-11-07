<template>
  <div id="container">
    <BackHeader :content="content" :from="from"/>
    <el-table
        :data="studentList"
        stripe
        style="width: 100%"
        empty-text="No content available!"
    >
      <el-table-column prop="sid" label="Student ID">
      </el-table-column>
      <el-table-column prop="first_name" label="first name"></el-table-column>
      <el-table-column prop="last_name" label="last name">
      </el-table-column>
      <el-table-column prop="name" label="course name"></el-table-column>
      <el-table-column prop="matchTime" label="match time"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import BackHeader from '../utils/BackHeader'

export default {
  name: "MyCourseStudentDetail",
  props: ['courseCode'],
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
  mounted() {
    this.getData()
    console.log(this.studentList)
  },
  methods: {
    getData() {
      this.$axios
          .get(`http://localhost:8888/booking/tutor/${this.courseCode}`, {
            params: {
              tutorId: this.$store.getters.getUser.sid
            }
          })
      .then((res) => {
        console.log(res.data);
        this.studentList = res.data;
      }).catch((err) => {
        this.$message({
          message: `${err}`,
          type: "error"
        })
      })
    }
  },
}
</script>

<style>

</style>