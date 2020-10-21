<template>
  <div id="container">
    <el-page-header
      title="Go back"
      @back="goBack"
      content="Available tutors"
    ></el-page-header>
    <el-table
      :data="tutorList"
      stripe
      style="width: 100%"
      empty-text="No tutor available for this course!"
      v-loading="loading"
    >
      <el-table-column prop="sid" label="Student ID" width="250">
      </el-table-column>
      <el-table-column prop="name" label="Tutor name" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>name: {{ scope.row.name }}</p>
            <p>hobby: {{ scope.row.hobby }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="available_time" label="Available on" width="200">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button
            slot="reference"
            size="mini"
            type="primary"
            icon="el-icon-star-on"
            @click="handleBooking(scope.$index, scope.row, this)"
            :disabled="disable"
            >Booking</el-button
          >
          <!-- </el-popconfirm> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      tutorList: [],
      theme: "primary",
      disable: false,
      loading: true,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/allcourse");
    },
    getData() {
        // asynchronously fetch data
      setTimeout(() => {
        this.tutorList = Array(5).fill({
          sid: "490573282",
          name: "John",
          available_time: "Monday 3:00-5:00",
          hobby: "唱跳rap",
        });
        this.loading = false;
      }, 500);
    },
    handleBooking(index, row, that) {
      console.log(index, row);
      console.log(that);
      this.disable = true;
      this.$message({
        message: `Successfully booked course of ${row.name}`,
        type: "success",
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
#container {
  padding: 20px;
}
.el-page-header {
  padding: 20px;
}
</style>