<template>
  <div>
    <h3>Upload CV</h3>
    <el-upload
        class="upload"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="1"
        :file-list="fileList"
        :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">Select a file</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Confirm</el-button>
      <div slot="tip" class="el-upload__tip">No larger than 10MB</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file) {
      return this.$confirm(`Are you sure to delete ${ file.name }？`);
    }
  }
}
</script>

<style scoped>
.upload {
  width: 400px;
  margin: 20px auto;
}
</style>