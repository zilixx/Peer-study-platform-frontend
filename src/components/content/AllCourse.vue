<template>
  <div>
    <el-row id="search-row">
      <el-col :span="11">
        <Search_input v-model="inputvalue"></Search_input>
      </el-col>
      <el-col :span="5">
        <button class="button button1" @click="submit">Search</button>
      </el-col>
    </el-row>
    <div>
      <el-col id="card-col" :span="6" :offset="1" v-for="course in courses" :key="course.id">
        <CardView :course="course"/>
      </el-col>
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
    Search_input: SearchBar,
    CardView,
  },
  mounted() {
    this.getData()
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
.el-row#search-row {
  margin-top: 10px;
  margin-left: 45px;
  margin-bottom: 10px;
}
#card-col {
  margin-bottom: 30px;
}
.button {
  display: block;
  width: 100px;
  height: 31px;
  background-color: #4caf50;
  color: white;
  padding: 8px 20px;
  /*margin: 8px 0;*/
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button1 {
  background-color: #4caf50;
  color: white;
  border: none;
}

.button1:hover {
  background-color: white;
  color: #4caf50;
}
</style>