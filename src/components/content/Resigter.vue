<template>
  <div>
    <h3>Select Courses</h3>
    <el-select v-model="course" placeholder="please choose" id="selection" class="selection" action="http://localhost:8888/register"
               @change="submitCourse()">
      <el-option
        v-for="item in options"
        :key="item.courseId"
        :value="item.name"
        >
      </el-option>
    </el-select>

    <h3>Upload CV</h3>
    <el-upload
        class="upload"
        ref="upload"
        action="http://localhost:8888/upload"
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
<!--    <uploading></uploading>-->

  </div>

</template>

<script>
// import uploading from "../utils/Upload"

export default {
  name: "Register",
  // components: {
  //   uploading
  // },
  data() {
    return {
      options: [],
      course: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    };
  },
  mounted() {
    this.$axios.get("http://localhost:8888/register/all", {
      params: {course: this.course}
    })
        .then((res)=>{
          this.options = res.data
          this.$message({
            message: "Data updated.",
            type: "info",
            duration: 1000
          })
        }).catch((err) => {console.log(err)})
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
    },
    submitCourse() {
      console.log('您选择了', this.course)
      this.$axios.get("http://localhost:8888/register/select", {
        params: {courseId: this.course}
      }).then((res)=>{
        console.log(res.data)
      })
      //     .then((res) => {
      //   if (res.data.response.deleteStat){
      //     // 抄来的管用代码，link: https://segmentfault.com/q/1010000011726114
      //     let deletedItem = this.resList.splice(
      //         this.resList.findIndex(item => item.id === itemId), 1)
      //     console.log(deletedItem)
      //     this.deleteHint(true) // TODO: possible async ops here
      //   } else {
      //     this.deleteHint(false)
      //   }
      // })
    }
  }

}
</script>

<style>
.selection{
  width: 400px;
  margin: 20px auto;
}
.upload {
  width: 400px;
  margin: 20px auto;
}
</style>