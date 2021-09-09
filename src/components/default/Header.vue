<template>
  <div class="header">
    <div class="nav">
     <div class="queer">
        <a class="queerlogo" href="https://www.zhipin.com/" title="BOSS直聘" alert="BOSS直聘"></a>
        <a href="">
            <span class="cityIcon">
                <i class="el-icon-location-outline"></i>
                北京
            </span>
            <span class="cityChange">[切换城市]</span>
        </a>
        <ul class="queerMain">
            <li :class="{'new': isNew == index,'hot':  isHot == index}" v-for="(item,index) in queerMainList" :key="index" @click = getClass(index)>
                <a href="#" :class="[isActive === index ? 'active' : '',{'sign': isSign == index, 'active': isDefaultActive == index}]">
                {{item}}
                </a>
            </li>
        </ul>
     </div>
     <div class="control">
        <a href="#" v-for="(item,index) in controlList" :key =" item+index" @click="getControlClass(index)" :class="[ isControlActive === index ? 'active' : '',{'hot': isControlHot == index}]">
            <span>{{item}}</span>
        </a>
        <button>注册</button>
        <button @click="clickLogin">{{isHome}}</button>
     </div>
    </div>
</div>
</template>

<script>
export default {
   data () {
       return {
           queerMainList: ["首页","职位","校园","海归","公司","APP","资讯","发现"],
           isNew: 2,
           isHot: 7,
           isActive: '',
           isDefaultActive: 0,
           isSign: 2,
           controlList: [ '上传简历','我要找工作','我要招聘'],
           isControlActive: '',
           isControlHot: 0,
           isHome: '登录',
       }
   },
   created(){
       this.init()
   },
   methods: {
       init() {
           if (this.$store.state.user.id == 1) {
               return this.isHome = this.$store.state.user.name
           }
       },
       clickLogin() {
           if (this.$store.state.user.id == 1) {
               this.$message.success('您已经成功')
           } else {
                this.$router.push({path:'login'})               
           }
       },
       getClass(index) {
           return index == 0 ? '' : this.isActive = index;
       },
       getControlClass(index) {
           return this.isControlActive = index;
       }
   }
}
</script>

<style>
</style>