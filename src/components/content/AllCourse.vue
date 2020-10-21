<template>
  <div>
    <div id="search-row">
        <SearchBar v-model="inputvalue" />
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
    <div style="margin-left: 40px" v-else>
      <h1>No Courses available!</h1>
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
      inputvalue: "",
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
    submit() {
      console.log(this.inputvalue);
    },
    getData() {
      this.courses = Array(20).fill({
        id: "COMP1234",
        name: "Object Oriented Application Framework",
      });
    },
  },
};
</script>

<style>
#search-row {
  margin-top: 10px;
  margin-left: 45px;
  margin-bottom: 10px;
}
#card-col {
  margin-bottom: 30px;
}
</style>