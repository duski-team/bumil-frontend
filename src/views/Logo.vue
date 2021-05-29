<template>
    <div class="container">
        <img @click="goLogin()" class="img" src="../assets/images/vlamuid.jpeg"/>
    </div>
</template>

<script>
export default {
    name:'Logo',
    methods: {
        goLogin(){
            this.$router.push({ path: "/login" });
        }
    }
}
</script>

<style scoped>
    .container {
        height: 100vh;
    }
    .img {
        height: 100vh;

    }
</style>