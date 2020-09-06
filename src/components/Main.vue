<template>
    <div>
        <h2>Min techstack</h2>
        <div class="container">
            <div class="column">
                <h3>Frontend</h3>
                <div :key="item.id" v-for="item in this.frontEnd">
                    {{ item }}
                </div>
            </div>
            <span class="divider"></span>
            <div class="column">
                <h3>Backend</h3>
                <div :key="item.id" v-for="item in backEnd">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    Name: 'Main',
    data: function () {
        return {
            frontEnd: [
                "Vue.JS",
                "Bootstrap",
                "HTML",
                "CSS",
                "Vanilla JS"
            ],
            backEnd: [
                ".NET C#",
                "ASP.NET MVC",
                "Blazor",
                "Node.js Express",
                "Python"
            ]
        }
    },
}
</script>

<style>
    .container {
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