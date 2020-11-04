<template>
  <el-card :body-style="{ padding: '3px' }" shadow="hover">
    <div id="jumbo">
      <h3>{{ course.name }}</h3>
    </div>
    <el-tooltip
      class="item"
      effect="light"
      placement="bottom-end"
    >
    <p style="color: #3f87a6;" slot="content">Course code: {{ course.courseCode }}</p>
    <p style="color: #3f87a6;" slot="content">Description: {{ course.description }}</p>
      <div id="caption">
        <p id="course-code">Course code: {{ course.courseCode }}</p>
        <p id="course-description">Description: {{ course.description }}</p>
        <p id="detail">
          <el-link
            type="primary"
            icon="el-icon-search"
            @click="seeDetail(course.courseCode)"
            >See detail
          </el-link>
        </p>
      </div>
    </el-tooltip>
  </el-card>
</template>

<script>
export default {
  name: "CardView",
  props: ["course", "identity"],
  methods: {
    seeDetail(courseCode) {
      if (this.$router.currentRoute.path === "/allcourse") {
        this.$router.push(`/course/${courseCode}`);
      } else if (this.$router.currentRoute.path === "/mycourse") {
        if (this.identity === "tutor") {
          this.$router.push(`/course/${courseCode}/students`);
        } else if (this.identity === "student") {
          this.$router.push(`/course/${courseCode}/tutors`);
        }
      }
    },
  },
};
</script>

<style scoped>
.el-card {
  width: 290px;
  padding: 3px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}
#jumbo {
  width: 280px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #3f87a6, #f69d3c);
  /* background:linear-gradient(45deg, #020031 0%, #6D3353 100%); */
  color: white;
  position: relative;
}
#jumbo:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../../assets/background1.jpeg");
  background-size: cover;
  opacity: 0.1;
}
h3 {
  text-align: center;
  z-index: 1;
}
#caption {
  margin: 10px 6px 3px 6px;
  font-size: 13px;
  color: #3f87a6;
}
#caption:hover {
  text-decoration: underline;
}
#detail {
  text-align: right;
}
p#course-code,
p#course-description,
p#detail {
  margin: 2px;
  word-wrap: break-word;
}

p#course-description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>