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
        :key="course.id"
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
    handleSearch(keyword) {
      if (keyword == "") this.getData();
      else
        this.courses = this.courses.filter(
          (course) =>
            course.id.includes(keyword) || course.name.includes(keyword)
        );
    },
    getData() {
      this.courses = Array(3).fill({
        id: "COMP1234",
        name: "Object Oriented Application Framework",
      });
      this.courses.push(
        { id: "ELEC1112", name: "Advanced Network technology" },
        { id: "MATH1234", name: "Management System" }
      );
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