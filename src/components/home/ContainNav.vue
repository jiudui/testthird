<template>
  <div class="containNav">
    <div class="logo">
        <img src="https://static.zhipin.com/v2/web/geek/images/fast-reg.png">
    </div>
    <div class="input">
        <div class="inputLogo">
            <img src="https://static.zhipin.com/v2/web/geek/images/fast-reg-text.png">
        </div>
        <input type="text" placeholder="输入手机号" v-model="isNumber">
        <div class="obtain">
            <input type="text" placeholder="验证码" maxlength="6" v-model="isPass">
            <a class="gain" @click="getGain">获取</a>
        </div>
        <button @click="isLogRef">登录/注册</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isNumber:'',
            isPass:'',
        }
    },
    methods: {
        isLogRef() {
            this.phoneLoginRef()
        },
        phoneLoginRef() {
            if(!this.isNumber) {
                return this.$message.error("手机号不能为空")
            }else {
                if(!this.isPass) {
                    return this.$message.error("验证码不能为空")
                }else {
                    return this.$message.success("验证成功")
                }   
            }
        },
        getGain() {
            if(!this.isNumber) {
                return this.$message.error("手机号不能为空")
            }else {
               console.log(this.isNumber)
            }
        }
    }
}
</script>

<style>

</style>