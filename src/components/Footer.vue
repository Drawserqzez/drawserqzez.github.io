<template>
    <div class="footer">
        <p><a class="footer-link" target="blank" :href="this.chosenFooterText.url">{{ this.chosenFooterText.text }}</a></p>
    </div>    
</template>

<script>

export default {
    Name: "Footer",
    data: function() {
        return {
            footerText: [
                {
                    url: 'https://vuejs.org',
                    text: 'Made with ❤ using Vue.js'
                },
                {
                    url: 'https://github.com/drawserqzez/drawserqzez.github.io',
                    text: 'Hosted on Github!'
                },
                {
                    url: 'https://youtu.be/sAn7baRbhx4',
                    text: "Didn't expect this, did ya?!"
                }
            ],
            chosenFooterText: {
                url: "",
                text: ""
            },
        }
    },
    methods: {
        getFooterText: function() {
            let index = Math.floor(Math.random() * this.footerText.length);

            this.chosenFooterText = this.footerText[index];
            setTimeout(this.getFooterText, 8000);
        }
    },
    mounted: function() {
        this.getFooterText();
    }
}
</script>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
        background-color: #0fa3b1;

        border-top: solid black;

        padding: .4rem 0;
    }

    .footer > p {
        margin-top: .5rem;
    } 

    .footer-link {
        color: black;
        text-decoration: none;
    }

    .footer-link:hover {
        text-decoration: underline;
    }
</style>