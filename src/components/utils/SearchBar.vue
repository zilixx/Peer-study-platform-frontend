<!-- Search bar component -->
<template xmlns:size="http://www.w3.org/1999/xhtml">
  <div>
    <input
      :value="currentValue"
      @input="inputload"
      placeholder="Please enter class number, eg: COMP5619"
      class="input"
    />
    <input type="button" class="button button1" value="Submit">
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return {
      currentValue: this.value,
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    },
  },
  methods: {
    setCurrentValue(value) {
      console.log(value);
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
    inputload(event) {
      let value = event.target.value;
      this.$emit("input", value);
    },
  },
};
</script>

<style>
.input {
  display: inline-block;
  padding: 6px 10px;
  width: 755px;
  margin-right: 20px;
}
.button {
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