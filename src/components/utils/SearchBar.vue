<!-- Search bar component -->
<template xmlns:size="http://www.w3.org/1999/xhtml">
  <div>
    <input
      v-model.lazy="currentValue"
      placeholder="Please enter class number, eg: COMP5619"
      class="input"
    />
    <input type="button" class="button button1" value="Search" @click="inputLoad" />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      currentValue: "",
    };
  },
  methods: {
    inputLoad() {
      this.$emit("input", this.currentValue);
    },
  },
};
</script>

<style>
.input {
  display: inline-block;
  padding: 6px 10px;
  width: 790px;
  margin-left: 13px;
}
.button {
  width: 100px;
  height: 32px;
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