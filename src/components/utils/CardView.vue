<template>
  <el-card :body-style="{ padding: '3px' }" shadow="hover">
    <div id="jumbo">
      <h3>{{ course.name }}</h3>
    </div>
    <div id="caption">
      <p id="course-id">{{ course.id }}</p>
      <p id="course-name">{{ course.name }}</p>
      <p id="detail">
        <el-link
          type="primary"
          icon="el-icon-search"
          @click="seeDetail(course.id)"
          >See detail
        </el-link>
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "CardView",
  data() {
    return {
      activeName: "student",
      courses: [],
    };
  },
  props: ["course"],
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.courses = Array(200).fill({
        id: "COMP5173",
        name: "Web application development",
      });
    },
    seeDetail(courseId) {
      this.$router.push(`/course/${courseId}`);
    },
  },
};
</script>

<style scoped>
.el-card {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
#jumbo {
  width: 290px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #3f87a6, #f69d3c);
  color: white;
}
#caption {
  margin: 10px 8px 3px 8px;
  font-size: 13px;
  color: #3f87a6;
}
#caption:hover {
    text-decoration: underline;
}
#detail {
  text-align: right;
}
p#course-id,
p#course-name,
p#detail {
  margin: 2px;
  word-wrap: break-word;
}
</style>