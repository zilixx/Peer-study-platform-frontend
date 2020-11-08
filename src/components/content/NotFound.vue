<template>
  <div>
    <BackHeader :content="content" :from="from" />
    <div id="container-404">
      <div id="content">
        <p>404</p>
        <h1>The page you are looking for is not found</h1>
        <p>┑(￣Д ￣)┍</p>
      </div>
    </div>
  </div>
</template>

<script>
import BackHeader from "../utils/BackHeader";

export default {
  name: "NotFound",
  data() {
    return {
      content: "Go to home page",
      from: "/",
    };
  },
  components: {
    BackHeader,
  },
};
</script>

<style scoped>
@font-face {
  font-family: myfont;
  src: url("../../assets/myfont.ttf");
}
div#container-404 {
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
div#content {
  text-align: center;
}
p {
  font-family: myfont;
  font-size: 100px;
  margin: 0 auto;
  font-weight: bolder;
  color: #3a5663;
}
h1 {
  margin: 0px;
  color: #3a5663;
}
</style>