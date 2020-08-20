<template>
    <div class="navbar">
        <ul>
            <li class="navitem"><a href="https://github.com/Drawserqzez" target="_blank"><img src="../assets/github-logo.png" alt="Github"></a></li>
            <li class="navitem centerItem"><div class="header">Algot Holton</div></li>
            <li class="navitem"><a href="https://www.linkedin.com/in/algot-holton"><img class="dum-logga" src="../assets/LI-In-Bug.png" alt="LinkedIn"></a></li>
        </ul>
        <!-- <h1>Algot Holton</h1> -->
    </div>
</template>

<script>
export default {
   name: "Navigation",
   components: {
   } 
}
</script>

<style scoped>
    .navbar {
        border-bottom: solid black;
        padding-bottom: 8%;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .navitem {
        float: left;
        width: 25%;
        margin-left: auto;
        margin-top: 12px;
    }

    .centerItem {
        width: 50%;
    }

    .header {
        color: black;
        font-size: 2em;
    }

    .dum-logga {
        width: 15%;
        filter: brightness(0%)
    }

</style>