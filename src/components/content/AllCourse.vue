<template>
  <div>
    <h1>This is course overview content</h1>
    <div style="float: left">
      <Search_input v-model="inputvalue"></Search_input>
    </div>
    <div style="float: right">
      <button class="button button1" @click="submit">Search</button>
    </div>
  </div>

</template>

<script>
  import SearchBar from "../utils/SearchBar";
  export default {
    name: "AllCourse",
    data(){
      return {
        inputvalue:''
      }
    },
    components:{
      'Search_input':SearchBar
    },
    methods:{
      submit(){
        console.log(this.inputvalue)
      }
    }
}
</script>

<style>
  .button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 8px 20px;
    /*margin: 8px 0;*/
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .button1{
    background-color: #4CAF50;
    color: white;
    border: none;
  }

  .button1:hover {
    background-color: white;
    color: #4CAF50;
  }
</style>