<template>
  <div>
    <el-row>
      <el-col :span="11">
        <Search_input v-model="inputvalue"></Search_input>
      </el-col>
      <el-col :span="5">
        <button class="button button1" @click="submit">Search</button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchBar from "../utils/SearchBar";
export default {
  name: "AllCourse",
  data() {
    return {
      inputvalue: "",
    };
  },
  components: {
    Search_input: SearchBar,
  },
  methods: {
    submit() {
      console.log(this.inputvalue);
    },
  },
};
</script>

<style>
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