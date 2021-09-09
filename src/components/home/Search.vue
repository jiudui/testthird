<template>
  <div class="search">
                <div class="searchButton">
                    <div class="searchSelection">
                        <div class="selection">
                            职位类型
                        </div>
                        <input type="text" placeholder="请输入内容" @blur="getInput">
                    </div>
                    <button>搜索</button>
                </div>
                <div class="searchKeyWord">
                    <span class="searchTitle">热门职位: </span>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                    <a href="#">
                        <span>硬件测试</span>
                    </a>
                </div>
            </div>
</template>

<script>
export default {
    data() {
        return {
            // bingInput: '',
        }
    },
    methods: {
        getInput() {
            console.log(1)
        }
    }
}
</script>

<style>

</style>