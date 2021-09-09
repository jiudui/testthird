 <template>
  <div class="default">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/default/Header'
import Footer from '../components/default/Footer'
export default {
  components: { Header , Footer }
}
</script>

<style>

</style>
