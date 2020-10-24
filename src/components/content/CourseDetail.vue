<template>
  <div id="container">
    <!-- BackHeader component -->
    <BackHeader :content="headerContent" :from="from" />
    <!-- Show tutor list for selected course -->
    <el-table
      ref="tutorTable"
      :data="tutorList"
      stripe
      style="width: 100%"
      empty-text="No tutor available for this course!"
      v-loading="loading"
    >
      <el-table-column prop="sid" label="Student ID" width="250">
      </el-table-column>
      <el-table-column prop="first_name" label="Tutor name" width="180">
      </el-table-column>
      <el-table-column prop="availableTime" label="Available on" width="200">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button
            slot="reference"
            size="mini"
            type="primary"
            icon="el-icon-star-on"
            class="book-button"
            @click="handleBooking(scope.row, $event)"
            >Booking</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BackHeader from "../utils/BackHeader";

export default {
  name: "CourseDetail",
  props: ["courseCode"],
  data() {
    return {
      tutorList: [],
      loading: true,
      headerContent: "Available tutors",
      from: "/allcourse",
    };
  },
  components: {
    BackHeader,
  },
  methods: {
    getData(courseCode) {
      // setTimeout(() => {
      //   this.tutorList.push({
      //     sid: "123456789",
      //     first_name: "jacob",
      //     last_name: "Xavior",
      //     availableTime: "Tuesday 3:00-5:00",
      //   });
      //   this.loading = false;
      // }, 500);
      // TODO: test api
      this.$axios
        .get(`api/course/${courseCode}`)
        .then((res) => {
          this.tutorList = res.data;
        })
        .then(() => (this.loading = false))
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    handleBooking(row, event) {
      // TODO: test api
      if (!event.currentTarget.classList.contains("is-disabled")) {
        // TODO: post request to certain url
        this.$axios
          .post("url", {
            sid: "",
            tutorId: row.sid,
          })
          .then(() => {
            (event.currentTarget.children[1].innerHTML = "Booked"),
              event.currentTarget.classList.add(
                "el-button--success",
                "is-disabled"
              );
            this.$message({
              type: "success",
              message: `You have successfully booked ${row.first_name}'s course. You can cancel this booking in My Profile -> View Booking`,
            });
          })
          .catch((err) => console.log(err));
      } else
        this.$message({
          type: "warning",
          message: `You have booked this course. You can't book this course again`,
        });
    },
  },
  // watch: {
  //   tutorList: {
  //     handler(list) {
  //       // TODO: fetch data
  //       let bookedList = [];
  //       this.$axios
  //         .get(`/api/course/booked/${this.courseCode}`, {
  //           params: {
  //             sid: "",
  //           },
  //         })
  //         .then((res) => {
  //           bookedList = res.data;
  //           console.log(bookedList);
  //         })
  //         .catch((err) => console.log(err));

  //       const userid = "123456789";
  //       list.forEach((el, index) => {
  //         if (el.sid === userid) {
  //           const buttons = document.getElementsByClassName(
  //             "el-button--primary"
  //           );
  //           console.log(index);
  //           console.log(buttons.length);
  //         }
  //       });
  //     },
  //     immediate: true,
  //   },
  // },
  mounted() {
    this.getData("COMP9001");
  },
};
</script>

<style scoped>
#container {
  padding: 10px;
}
</style>