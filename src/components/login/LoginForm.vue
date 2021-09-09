<template>
  <div class="loginfrom">
    <div class="loginfromList">
      <template v-for="(item,index) in loginList">
        <a href="#" class="fromLink" :class="{'test': item.value === 1}" :key="index">
          <img :src="item.img" />
          <div class="fromParse">
            <p>{{item.firstTitle}}</p>
            <p>{{item.secondTitle}}</p>
          </div>
        </a>
      </template>
    </div>
    <div class="loginfromInput">
      <div class="code">
        <div class="text">扫码登录在这里</div>
        <a href="#"></a>
      </div>
      <div class="loginInputForm">
        <div class="inputFormButton">
          <div class="acquiesce">密码登录</div>
          <div>短信登录</div>
        </div>
        <div class="inputFormInput">
          <div class="formnumber">
            <div class="formicon">
              <i class="el-icon-mobile-phone"></i>
            </div>
            <button class="formNumber">
              +86
              <i class="el-icon-arrow-down"></i>
            </button>
            <input type="text" placeholder="手机号" v-model="inPhone" @blur="getInPhone" />
          </div>
          <div class="secondformnumber">
            <div class="secondformicon">
              <i class="el-icon-lock"></i>
            </div>
            <input
              type="password"
              placeholder="密码"
              v-model="inPassWord"
              @blur="getPassWord"
              @keyup.enter="getBindKey"
            />
          </div>
          <div class="struts">
            <a href="#">
              <div class="circle"></div>
              <div class="check">点击按钮进行验证</div>
            </a>
          </div>
          <button class="button" @click="getLogin">登录</button>
        </div>
        <div class="inputFormFooter">
          <a href="#" class="inputFormFootericon">
            <span>微信登录</span>
          </a>
          <a href="#">扫码登录</a>
          <a href="#">免费注册</a>
        </div>
        <div class="addressable">
          登录即视为您同意
          <a href="#">《网页版服务协议》</a>
        </div>
      </div>
      <footer>
        <p>客服电话 400-065-5799 工作时间：9:30-18:30</p>
        <div class="last">
          <a href="#">
            人力服务资源许可证|
            营业执照|
            朝阳区人社局监督电话
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loginList: [
                {
                    firstTitle: '找工作',
                    value: 1,
                    secondTitle: '我要跟老板谈',
                    img: "https://static.zhipin.com/v2/web/geek/images/logo.png",
                },
                {
                    firstTitle: '找工作',
                    value: 2,
                    secondTitle: '我要跟老板谈',
                    img: "https://static.zhipin.com/v2/web/geek/images/logo.png",
                },
                {
                    firstTitle: '找工作',
                    value: 3,
                    secondTitle: '我要跟老板谈',
                    img: "https://static.zhipin.com/v2/web/geek/images/logo.png",
                },
            ],
            inPhone: '',
            inPassWord: '',
        }
    },
    methods: {
        getInPhone() {
            console.log(this.inPhone)
        },
        getPassWord() {
            console.log(this.inPassWord)
        },
        getBindKey() {
            console.log(this.inPassWord)
        },
        getLogin() {
            if(this.inPhone === '123' && this.inPassWord === '123456'){
                this.$store.commit('SET_LOGIN',1)
                this.$store.commit('SET_PASS','Administrator') 
                this.$router.push({name:'Home',params:{}})
            }else{
                this.$message.error('错误')
            }
        }
    }
}
</script>

<style>
</style>