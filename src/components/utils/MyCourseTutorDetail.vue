<template>
  <div id="container">
    <BackHeader :content="content" :from="from" />
    <el-table
      :data="tutorList"
      stripe
      style="width: 100%"
      empty-text="No content available!"
    >
      <el-table-column prop="tutorSid" label="TutorSID">
      </el-table-column>
      <el-table-column prop="first_name" label="firstname"> </el-table-column>
      <el-table-column prop="last_name" label="lastname">
      </el-table-column>
      <el-table-column prop="name" label="course name">
      </el-table-column>
      <el-table-column prop="matchTime" label="match time"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BackHeader from "../utils/BackHeader"

export default {
  name: "MyCourseTutorDetail",
  props: ["courseCode"],
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get(`http://localhost:8888/course/booked/${this.courseCode}`, {
        params: {
          sid: 1002
        }
      }).then((res) => {
        this.tutorList = res.data
      }).catch((err) => {
        this.$message({
          message: `${err}`,
          type: "error"
        })
      })
    }
  },
  data() {
    // Add tutor info list here
    return {
      content: "Your tutors",
      from: "/mycourse",
      tutorList: [],
    };
  },
  components: {
    BackHeader
  }
};
</script>

<style scoped>
#container {
  padding: 20px;
}
</style>