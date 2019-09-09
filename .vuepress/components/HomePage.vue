<template>
  <div>
    <div class="content">

    </div>
    <div class="show">

    </div>
  </div>
</template>
<script>
import indexImg from '../public/index.jpg'
  export default {
    data(){
      return {
        indexImg
      }
    }
  }
</script>
 <style scoped>
* {
  margin: 0;
  padding: 0;
}
.content {
  display: inline-block;
  width: 40vw;
  height: 100vh;
}
.show {
  float: right;
  width: 50vw;
  height: 100vh;
  background-image: url("../public/index.jpg");
}
</style>
