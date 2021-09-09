<template>
  <div class="post">
    <div class="title">热招职位</div>
    <div class="postKeyWord">
      <div class="word">
        <ul>
          <li
            :class="[isword == index  ? 'active' : '']"
            v-for="(item,index) in wordList"
            :key="index"
            @click="getWordItem(item.value,index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="card">
        <ul>
          <li v-for="(item,index) in iscard" :key="index">
            <div class="cardwhite">
              <div class="cardtop">
                <a href="#">
                  <div class="cardlocation">
                    <div>
                      <span class="cardicontop">
                        <div class="cardtext">{{item.title}}</div>
                        <div class="cardicon"></div>
                      </span>
                      <span class="cardmoney">{{item.salary}}</span>
                    </div>
                    <span class="cardspan">
                      {{item.position}}
                      <span></span>
                      {{item.wrokingTime}}
                      <span></span>
                      {{item.record}}
                    </span>
                  </div>
                  <p></p>
                </a>
              </div>
              <div class="cardbottom">
                <a href="#">
                  <img
                    :src="item.url"
                    data-src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg?x-oss-process=image/resize,w_60,limit_0"
                    alt="美的IoT"
                  />
                  <span class="cardbottomtext">{{item.company}}</span>
                  <span class="cardnone">{{item.type}}</span>
                  <span class="cardline"></span>
                  <span class="cardnone">{{item.market}}</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <a href="#" class="postmore">查看更多</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wordList: [
        { name: "IT·互联网", value: 1 },
        { name: "金融", value: 2 },
        { name: "房地产·建筑", value: 3 },
        { name: "教育培训", value: 4 },
        { name: "娱乐传媒", value: 5 },
        { name: "医疗健康", value: 6 },
        { name: "法律咨询", value: 7 },
        { name: "供应链", value: 8 },
        { name: "供应链", value: 9 },
      ],
      cardList: [
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "IT·互联网",
          value: 1,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        {
          name: "金融",
          value: 2,
          contentList: {
            title: "前端架构师",
            salary: "18-30K·14薪",
            position: "北京",
            wrokingTime: "3-5年",
            record: "本科",
            url:
              "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190415/43ab0a67719bb965717ba96ebbcea5e00bad8bde934602bb63f8e695556594de_s.jpg",
            company: "美的IOT",
            type: "互联网",
            market: "上市"
          }
        },
        

      ],
      isword: 0,
      iscard: [],
    };
  },
  created() {
    this.getFor(this.wordList[0].value);
  },
  methods: {
    getWordItem(res, index) {
      this.isword = index;
      this.getFor(res)
    },
    // 判断数组
    getFor(res) {
      let self = this.cardList;
      let len = this.cardList.length;
      let arr = [];
      for (var i = 0; i < len; i++) {
        if ( self[i].value == res) {
          arr.push(self[i].contentList);
        }
      }
      this.iscard = arr;
    }
  }
};
</script>

<style>
</style>