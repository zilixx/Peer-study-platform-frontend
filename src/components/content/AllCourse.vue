<template>
  <div>
    <h1>This is course overview content</h1>
    <div>
      <Search_input v-model="inputvalue"></Search_input>
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

</style>