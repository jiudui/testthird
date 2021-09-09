<template>
    <div class="content">
        <div class="contentForm"  @mouseleave="leaveHidden">
            <ul  >
                <template v-for="(item,index) in contentFormList" >
                    <li class="contentFormFirstli" v-if="item.value < isNum" :key="index">
                    <b>{{item.title}}</b>
                    <a href="#" v-for="(content,i) in item.child" :key="i">{{content.name}}</a>
                    <div class="contentFormList">
                        <p>{{item.title}}</p>
                        <dl  v-for=" (it, idx) in childrenList" :key="idx">
                            <dd>
                                <div class="contentFormListLeft">
                                    {{it.smileTitle}}
                                </div>
                                <div class="contentFormListRight">
                                    <a href="#" v-for="(ite, inx) in it.children" :key="inx">{{ite.content}}</a>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </li>
                </template>
                <li :class="[isHidden ? 'leave' : 'move']" class="contentFormLastli" @mouseenter="getHidden">
                    显示全部职位
                </li>
            </ul>
        </div>
        <div class="middle">
            <ul class="picList">
                <li class="picListMain">
                    <a href="#">
                        <img
                            src="https://img.bosszhipin.com/beijin/upload/image/20191225/3f7fda0998317f22ec614bfc392848b9.jpg?x-oss-process=image/format,jpg">
                    </a></li>
                <li class="picListSlave">
                    <a href="#">
                        <img
                            src="https://img.bosszhipin.com/beijin/upload/image/20191225/35f18357bbff0625465bb716d94f336a.jpg?x-oss-process=image/format,jpg">
                    </a></li>
            </ul>
            <ul class="minPicList">
                <li>
                    <a href="#">
                        <img
                            src="https://img.bosszhipin.com/beijin/upload/image/20191225/719b5568228bda8229408e1401457f13.jpg?x-oss-process=image/format,jpg">
                    </a>
                </li>
                <li><a href="#">
                        <img
                            src="https://img.bosszhipin.com/beijin/upload/image/20191225/631e45e84ab482efaaf0a2bafb4d9219.jpg?x-oss-process=image/format,jpg">
                    </a></li>
                <li><a href="#">
                        <img
                            src="https://img.bosszhipin.com/beijin/upload/image/20191225/f1ab4555112c48503c7fdd8712531102.jpg?x-oss-process=image/format,jpg">
                    </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contentFormList:[
                {
                    title: '技术',
                    value: 1,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                },
                {
                    title: '科学',
                    value: 2,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '设计',
                    value: 3,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '运营',
                    value: 4,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '市场',
                    value: 5,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '人事财务行政',
                    value: 6,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                    ],
                    children: []
                },
                {
                    title: '高级管理',
                    value: 7,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '高级管理',
                    value: 8,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '高级管理',
                    value: 9,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '高级管理',
                    value: 10,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '高级管理',
                    value: 11,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
                {
                    title: '高级管理',
                    value: 12,
                    child: [
                        {
                            name: 'Java',
                            count: 1,
                        },
                        {
                            name: 'PHP',
                            count: 2,
                        },
                        {
                            name: 'web前端',
                            count: 3,
                        },
                        {
                            name: '算法工程师',
                            count: 4,
                        }
                    ],
                    children: []
                },
            ],
            childrenList: [
                        {
                            smileTitle: '后端开发',
                            smileNum: 1,
                            children: [
                                {content: 'java',num: 1},
                                {content: 'C++',num: 2},
                                {content: 'PHP',num: 3},
                                {content: 'C',num: 4},
                                {content: 'C#',num: 5},
                                {content: 'NET',num: 6},
                                {content: '语音/视频/图形开发',num: 7},
                                {content: '数据采集',num: 8},
                                {content: '全栈工程师',num: 9},
                                {content: 'Gis工程师',num: 10},
                                {content: '后端开发',num: 11},
                            ]
                        },
                        {
                            smileTitle: '后端开发',
                            smileNum: 2,
                            children: [
                                {content: 'java',num: 1},
                                {content: 'C++',num: 2},
                                {content: 'PHP',num: 3},
                                {content: 'C',num: 4},
                                {content: 'C#',num: 5},
                                {content: 'NET',num: 6},
                                {content: '语音/视频/图形开发',num: 7},
                                {content: '数据采集',num: 8},
                                {content: '全栈工程师',num: 9},
                                {content: 'Gis工程师',num: 10},
                                {content: '后端开发',num: 11},
                            ]
                        },
                        {
                            smileTitle: '后端开发',
                            smileNum: 2,
                            children: [
                                {content: 'java',num: 1},
                                {content: 'C++',num: 2},
                                {content: 'PHP',num: 3},
                                {content: 'C',num: 4},
                                {content: 'C#',num: 5},
                                {content: 'NET',num: 6},
                                {content: '语音/视频/图形开发',num: 7},
                                {content: '数据采集',num: 8},
                                {content: '全栈工程师',num: 9},
                                {content: 'Gis工程师',num: 10},
                                {content: '后端开发',num: 11},
                            ]
                        },
                        {
                            smileTitle: '后端开发',
                            smileNum: 2,
                            children: [
                                {content: 'java',num: 1},
                                {content: 'C++',num: 2},
                                {content: 'PHP',num: 3},
                                {content: 'C',num: 4},
                                {content: 'C#',num: 5},
                                {content: 'NET',num: 6},
                                {content: '语音/视频/图形开发',num: 7},
                                {content: '数据采集',num: 8},
                                {content: '全栈工程师',num: 9},
                                {content: 'Gis工程师',num: 10},
                                {content: '后端开发',num: 11},
                            ]
                        },
                        {
                            smileTitle: '后端开发',
                            smileNum: 2,
                            children: [
                                {content: 'java',num: 1},
                                {content: 'C++',num: 2},
                                {content: 'PHP',num: 3},
                                {content: 'C',num: 4},
                                {content: 'C#',num: 5},
                                {content: 'NET',num: 6},
                                {content: '语音/视频/图形开发',num: 7},
                                {content: '数据采集',num: 8},
                                {content: '全栈工程师',num: 9},
                                {content: 'Gis工程师',num: 10},
                                {content: '后端开发',num: 11},
                            ]
                        },
                        {
                            smileTitle: '后端开发',
                            smileNum: 2,
                            children: [
                                {content: 'java',num: 1},
                                {content: 'C++',num: 2},
                                {content: 'PHP',num: 3},
                                {content: 'C',num: 4},
                                {content: 'C#',num: 5},
                                {content: 'NET',num: 6},
                                {content: '语音/视频/图形开发',num: 7},
                                {content: '数据采集',num: 8},
                                {content: '全栈工程师',num: 9},
                                {content: 'Gis工程师',num: 10},
                                {content: '后端开发',num: 11},
                            ]
                        },
            ],
            isHidden: true,
            isNum: 8,
        }
    },
    methods: {
        getContentForm(rev) {
            let arr = [];
        },
        getHidden() {
            this.isNum = this.contentFormList.length+1;
            this.isHidden = false;
        },
        leaveHidden() {
            this.isNum = 8;
            this.isHidden = true;
        }
    }
}
</script>

<style>

</style>