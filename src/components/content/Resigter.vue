<template>
  <div>
    <h3>Select Courses</h3>
    <el-select v-model="value" placeholder="please choose" id="selection" class="selection">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>

    <uploading></uploading>
  </div>

</template>

<script>
import uploading from "../utils/Upload"

export default {
  name: "Register",
  components: {
    uploading
  },
  data() {
    return {
      options: [{
        value: 'Option1',
        label: 'ELEC5619'
      }, {
        value: 'Option2',
        label: 'ELEC5620'
      }, {
        value: 'Option3',
        label: 'COMP5347'
      }, {
        value: 'Option4',
        label: 'INFO5990'
      }, {
        value: 'Option5',
        label: 'INFO6007'
      }],
      value: ''
    }
  }
}
</script>

<style>
.selection{
  width: 400px;
  margin: 20px auto;
}
</style>