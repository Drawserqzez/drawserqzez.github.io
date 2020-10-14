<template>
    <div class="container">
        <div class="header">{{ this.knowledgeItem.tag }}</div>
        <div class="status-bar">
            <div class="fill" :style="{ width: this.knowledgeItem.value + '%', backgroundColor: this.knowledgeItem.color }"></div>
        </div>
    </div> 
</template>

<script>
export default {
    name: "KnowledgeStatus",
    props: {
        knowledgeItem: Object
    },
    
}
</script>

<style scoped>
    .container {
        display: flex; 
        width: 90%;
        margin: .4rem auto;
        height: 100%;
        justify-content: space-between;
        border-bottom: solid darkslategrey;
        margin-bottom: 2rem;

    }

    .header {
        font-weight: bold;
        margin-right: 1rem;
        font-size: 1.5em;
    }

    .status-bar {
        width: 15rem;
        height: 1.5rem;
        justify-self: end;
        background-color: rgb(93, 93, 93);
    }

    .fill {
        /* background-color: rgb(21, 0, 116); */
        height: inherit;
    }

    @media (min-width: 1101px) {
        .container {
            width: 100%;
        }

        .header {
            margin-right: 1rem;
            font-size: 3rem;
        }

        .status-bar {
            width: 25rem;
            height: 3rem;
        }
    }
</style>