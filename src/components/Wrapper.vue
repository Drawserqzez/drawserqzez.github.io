<template>
    <div id="wrapper">
        <Navigation />
        <Main />
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Main from './Main.vue'

export default {
    name: "Wrapper",
    components: {
        Navigation,
        Main
    }
}
</script>

<style scoped>
    #wrapper {
        height: 100%;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0;
        background-color: gray;

        padding: 12px;
        border: solid rgb(32, 32, 32);
        border-radius: .5%;
    }
</style>