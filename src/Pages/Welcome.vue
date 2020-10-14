<template>
    <div>
        <transition name="slide-fade">
            <h1 id="slide-header" v-if="showMessage">{{ this.currentMessage }}</h1>
        </transition>

        <div id="main-content">
            Här kommer du att hitta mitt <router-link to="/skills" style="color: inherit">CV</router-link> och lite annat skoj när sidan väl är klar :)
            <!-- TODO: Gör en kontaktsida och länka den här -->
        </div>
    </div>
</template>

<script>
export default {
    Name: 'Welcome',
    data: function() {
        return {
            translatedWelcomeMessages: [
                'Välkommen till min webbsida',
                'Welcome to my website',
                'Willkommen auf meiner Webseite'
            ],
            currentMessage: String,
            shiftDelay: 5000,
            showMessage: false,
        }
    },
    methods: {
        cycleTranslation: function(currentIndex) {
            this.showMessage = false;
            let maxIndex = this.translatedWelcomeMessages.length - 1;

            switch (currentIndex) {
                case maxIndex: 
                    currentIndex = 0;
                    break;
                default: 
                    currentIndex++;
                    break;
            }

            this.currentMessage = this.translatedWelcomeMessages[currentIndex];
            setTimeout(() => this.showMessage = true, this.shiftDelay / 5);
            setTimeout(this.cycleTranslation, this.shiftDelay, currentIndex);
        }
    },
    mounted: function() {
        this.currentMessage = this.translatedWelcomeMessages[0];
        this.showMessage = true;
        setTimeout(this.cycleTranslation, this.shiftDelay, 0);
    }
    
}
</script>

<style>
    #slide-header {
        font-size: 3rem;
        margin: 0 .7rem;
    }

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

    #main-content {
        position: fixed;
        top: 40vh;
        left: 5vw;
        right: 5vw;
        font-size: 1.5rem;
    }
</style>