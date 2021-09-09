<template>
  <div class="login">
    <div class="wrapper">
        <LoginForm />
        <HeatRay />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/login/LoginForm'
import HeatRay from '../components/login/HeatRay'
export default {
    components:{ LoginForm, HeatRay}
};
</script>

<style>
</style>