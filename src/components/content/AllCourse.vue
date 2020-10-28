<template>
  <div>
    <div id="search-row">
      <SearchBar @input="handleSearch" />
    </div>
    <div v-if="courses.length">
      <el-col
        id="card-col"
        :span="6"
        :offset="1"
        v-for="course in courses"
        :key="course.courseId"
      >
        <CardView :course="course" />
      </el-col>
    </div>
    <div style="margin-left: 55px" v-else>
      <h1>No courses found!</h1>
    </div>
  </div>
</template>

<script>
import SearchBar from "../utils/SearchBar";
import CardView from "../utils/CardView";

export default {
  name: "AllCourse",
  data() {
    return {
      activeName: "",
      courses: [],
      originalCourses: [],
    };
  },
  components: {
    SearchBar,
    CardView,
  },
  mounted() {
    this.getData();
  },
  methods: {
    // search method
    handleSearch(keyword) {
      if (keyword === "") this.courses = this.originalCourses
      else
        this.courses = this.originalCourses.filter(
          (course) =>
            course.courseCode.toUpperCase().includes(keyword.toUpperCase()) ||
            course.name.toUpperCase().includes(keyword.toUpperCase())
        );
    },
    getData() {
      // fetch course data from api
      this.$axios
        .get("http://localhost:8888/course/all")
        .then((res) => {
          this.courses = res.data;
          this.originalCourses = this.courses.slice()
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#search-row {
  margin-top: 10px;
  margin-left: 45px;
  margin-bottom: 10px;
}
#card-col {
  margin-bottom: 30px;
}
</style>