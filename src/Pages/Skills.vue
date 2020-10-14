<template>
    <div style="margin-bottom: 5rem">
        <router-link to="/" class="back-button">🔙</router-link>
        <h1 style="font-size: 4rem">Min techstack (WIP)</h1>
        <!-- TODO: Add pagination -->
        <div v-for="item in this.knowledgeItems[this.currentCategory]" :key="item.tag" class="list-container">
            <KnowledgeStatus :knowledgeItem=item />
        </div>
    </div>
</template>

<script>
import KnowledgeStatus from '../components/KnowledgeStatus'

export default {
    Name: 'Skills',
    components: {
        KnowledgeStatus,
    },
    data: function () {
        return {
            knowledgeItems: {
                "languages": [
                    {
                        "tag": "C#",
                        "value": 85,
                        "color": "lime"
                    },
                    {
                        "tag": "Javascript",
                        "value": 69,
                        "color": "yellow"
                    },
                    {
                        "tag": "SQL",
                        "value": 65,
                        "color": "lime"
                    },
                    {
                        "tag": "Vue.JS",
                        "value": 45,
                        "color": "yellow"
                    },
                    {
                        "tag": "PHP",
                        "value": 40,
                        "color": "yellow"
                    },
                    {
                        "tag": "Python",
                        "value": 15,
                        "color": "lime"
                    },
                ]
            },
            currentCategory: "languages",
        }
    },
}
</script>

<style>
    .back-button {
        position: fixed; 
        top: .5rem;
        left: 5vw;
        font-size: 2.5rem;
    }

    .list-container {
        display: flex;
        flex-flow: column nowrap;

        width: 100%;
        height: 100%;
    }

    .divider {
        background-color: black;
        width: 80%;
        height: 1px;
        margin: 1rem 0 1rem 10%;
    }

    @media (min-width: 786px) {
        .container {
            flex-flow: row nowrap;
        }

        .column {
            width: 48%;
            height: 100%;
        }

        .divider {
            width: 2%;
            height: 0;
        }
    }
</style>