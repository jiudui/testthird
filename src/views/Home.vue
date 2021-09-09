<template>
  <div class="home">
      <ContainNav />
      <Search />
      <Content />
      <Post />
      <Recruiting />
  </div>
</template>

<script>
import ContainNav from '../components/home/ContainNav'
import Search from '../components/home/Search'
import Content from '../components/home/Content'
import Post from '../components/home/Post'
import Recruiting from '../components/home/Recruiting'
export default {
  name: 'Home',
  components: {
      ContainNav,Search,Content,Post,Recruiting
  }
}
</script>
