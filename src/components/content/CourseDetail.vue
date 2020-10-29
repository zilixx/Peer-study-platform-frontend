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
      <el-table-column prop="first_name" label="First name" width="180">
      </el-table-column>
      <el-table-column prop="last_name" label="Last name" width="180">
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
            v-on:click.once="handleBooking(scope.row, $event)"
            >Booking
          </el-button>
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
      this.$axios
        .get(`http://localhost:8888/course/${courseCode}`)
        .then((res) => {
          this.tutorList = res.data;
        })
        .then(() => (this.loading = false))
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },

    getBookedTutor(courseCode) {
      this.$axios
        .get(`http://localhost:8888/course/booked/${courseCode}`, {
          params: {
            sid: 1004,
          },
        })
        .then((response) => {
          let bookedList = response.data;

          const buttonList = document.getElementsByClassName("book-button");
          this.tutorList.forEach((el, index) => {
            for (let i = 0; i < bookedList.length; i++) {
              if (el.sid === bookedList[i].tutorSid) {
                buttonList
                  .item(index)
                  .classList.add("el-button--success", "is-disabled");
              }
            }
          });
        });
    },

    handleBooking(row, event) {
      const e = event.currentTarget;
      this.$axios
        .get(`http://localhost:8888/booking/add/${this.courseCode}`, {
          params: {
            studentId: 1004,
            tutorId: row.sid,
          },
        })
        .then((res) => {
          if (res.data.addStat) {
            e.children[1].innerHTML = "Booked";
            e.classList.add("el-button--success", "is-disabled");
            // const e = event.target;
            // if (e.tagName === "BUTTON") {
            //   e.children[1].innerHTML = "Booked";
            //   e.classList.add("el-button--success", "is-disabled");
            // } else if (e.tagName === "I") {
            //     e.nextSibling.innerHTML = "Booked";
            //     e.parentNode.classList.add("el-button--success", "is-disabled");
            // } else if (e.tagName === "SPAN") {
            //     e.innerHTML = "Booked";
            //     e.parentNode.classList.add("el-button--success", "is-disabled");
            // }
            this.$message({
              type: "success",
              message: `You have successfully booked ${row.first_name}'s course. You can cancel this booking in My Profile -> View Booking`,
            });
          } else {
            this.$message({
              type: "error",
              message: "Failed request!",
            });
          }
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getBookedTutor(this.courseCode);
  },
  beforeMount() {
    this.getData(this.courseCode);
  },
};
</script>

<style scoped>
#container {
  padding: 10px;
}
</style>