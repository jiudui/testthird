<template>
   <div class="recruiting">
                <div class="busWord">
                    <a href="#">
                        <span>城市热招</span>
                    </a>
                </div>
                <div class="busCard" >
                    <template v-for=" (item,index) in buscardImgList" >
                        <a href="#" class="cardFirst"  v-if="index <(isnum*12+12) && index >= (0+12*isnum)" :key="index">
                        <img :src="item.url">
                        <div class="model"></div>
                    </a>
                    </template>
                    <div class="leftbutton">
                        &lt;
                    </div>
                    <div class="rightbutton" @click="getRight()">
                        &gt;
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    data () {
        return {
            buscardImgList: [
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url: "https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101010100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                 {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                 {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                 {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                 {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                 {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                //  {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
                // {url:"https://static.zhipin.com/zhipin-geek/v450/web/geek/images/city_101020100.png"},
            ],
            isnum: 0,
        }
    },
    computed: {
        // buscardImgList() {
        //     return this.buscardImgList.filter(function(e) {
        //         console.log(e)
        //     })
        // }
    },
    methods: {
        getBusCard(index) {
            // console.log(this.buscardImgList)
            console.log(index)
        },
        getRight() {
            let num = this.buscardImgList.length %12;
            let len = this.buscardImgList.length;
            console.log(len)
            console.log(num)
            if ( num == 0) {
                console.log(this.isnum)
                this.isnum += 1; 
            } 
        }
    }
}
</script>

<style>

</style>