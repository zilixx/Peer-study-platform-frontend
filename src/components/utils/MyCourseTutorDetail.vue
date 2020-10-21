<template>
  <div id="container">
    <BackHeader :content="content" :from="from" />
    <el-table
      :data="tutorList"
      stripe
      style="width: 100%"
      empty-text="No content available!"
    >
      <el-table-column prop="tutorSID" label="TutorSID">
      </el-table-column>
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="courseName" label="CourseName">
      </el-table-column>
      <el-table-column prop="date" label="Available time"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BackHeader from "../utils/BackHeader"

export default {
  name: "MyCourseTutorDetail",
  methods: {},
  data() {
    // Add tutor info list here
    return {
      content: "Your tutors",
      from: "/mycourse",
      tutorList: [
        {
          tutorSID: "490345232",
          name: "Nio Wang",
          courseName: "COMP5619",
          date: "Monday",
        },
        {
          tutorSID: "490345232",
          name: "Tom Jerry",
          courseName: "COMP5619",
          date: "Friday",
        },
      ],
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