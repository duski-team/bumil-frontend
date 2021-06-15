<template>
    <div @click="goLogin()" class="container">       
        <img  class="img" src="../assets/images/vlamuid.jpeg"/>
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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
    .img {
        width:100%;
        height:350px
    }
</style>