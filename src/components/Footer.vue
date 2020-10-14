<template>
    <div class="footer">
        <transition name="footer-fade">
            <p v-if="show">
                <a 
                    class="footer-link" 
                    target="blank" 
                    :href="this.chosenFooterText.url">
                        {{ this.chosenFooterText.text }}
                </a>
            </p>

        </transition>
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
                // {
                //     url: 'https://youtu.be/sAn7baRbhx4',
                //     text: "Didn't expect this, did ya?!"
                // }
            ],
            chosenFooterText: {
                url: "",
                text: ""
            },
            changeDelay: 8000,
            show: Boolean,
        }
    },
    methods: {
        getFooterText: function(currentIndex) {
            this.show = true;
            let index;
            do {
                index = Math.floor(Math.random() * this.footerText.length);
            }
            while (index == currentIndex)

            this.chosenFooterText = this.footerText[index];
            setTimeout(() => this.show = false, this.changeDelay - this.changeDelay / 8);
            setTimeout(this.getFooterText, this.changeDelay, index);
        }
    },
    mounted: function() {
        this.getFooterText(0);
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
        z-index: 99;

        background-color: #141414;
        border-top: solid rgb(109, 109, 109);
        padding: .4rem 0;
    }

    .footer > p {
        margin-top: .5rem;
    } 

    .footer-link {
        color: inherit;
    }

    .footer-link:hover {
        font-size: 1.1rem;
    }

    .footer-fade-enter-active, .footer-fade-leave-active {
        transition: opacity .5s;
    }

    .footer-fade-enter, .footer-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>