<template>
    <div class="navbar">
        <div class="nav-item">
            <a href="https://github.com/Drawserqzez" target="_blank"><img class="gh-logo" src="../assets/github-logo.png" alt="Github"></a>
        </div>
        <div class="nav-item center-item">
            <a class="nav-header" href="/">Algot Holton</a>
        </div>
        <div class="nav-item">
            <a href="https://www.linkedin.com/in/algot-holton"><img class="li-logo" src="../assets/LI-In-Bug.png" alt="LinkedIn"></a>
        </div>
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
        width: 100%;
        height: 4rem;
        padding: 1rem 0;
        /* margin-bottom: 1rem; */

        border-bottom: solid black;
        
        position: -webkit-sticky;
        position: sticky;
        top: 0;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        color: black;
        background-color: #0fa3b1;
    }

    .nav-item {
        height: 3rem;
        height: 100%;
        width: 6rem;
        padding: 1rem;
        margin-top: -1rem;
    }

    .nav-item:hover {
        background-color: #0D8B96;
    }

    .nav-header {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;
        color: inherit;
    }

    .li-logo {
        height: 2.5rem;
        width: 3rem;
        filter: brightness(0%);
    }

    .gh-logo, .li-logo {
        margin-top: 1rem;
    }
    
    @media (min-width: 786px) {
        .nav-header {
            font-size: 2rem;
        }

        .center-item {
            width: 15rem;
            margin-top: -1rem;
            padding-bottom: 0;
            padding-top: 2rem;
        }
    }

</style>