<template>
  <div id="back-header">
    <el-page-header
      title="Go back"
      @back="goBack"
      :content="content"
    ></el-page-header>
  </div>
</template>

<script>
export default {
  name: "BackHeader",
  props: ["content", "from"],
  methods: {
    goBack() {
      this.$router.push(this.from);
    },
  },
  mounted() {
    console.log(this.from);
  },
};
</script>

<style scoped>
#back-header {
  padding: 20px;
}
</style>