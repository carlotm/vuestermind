<template>
    <section id="losedialog">
        <div class="message">
            <p>YOU LOSE :(</p>
            <div class="secretRevealed" v-if="secretAsArray">
                <Pippolo
                    v-for="i in 4"
                    v-bind:key="i"
                    v-bind:isDisabled="true"
                    v-bind:color="secretAsArray[i - 1]"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

import Pippolo from './Pippolo.vue';

export default {
    name: 'LoseDialog',
    components: {
        Pippolo,
    },
    computed: {
        ...mapGetters(['secretAsArray']),
    },
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

#losedialog {
    @include size(100%, 100%);
    animation-iteration-count: 1;
    animation-name: appear;
    animation-duration: 0.2s;
    background-color: rgba($fiorentina, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
}

.message {
    background-color: $white;
    padding: $aria * 4;
    border-radius: $bd;
    font-size: 32px;
    text-align: center;
}

.secretRevealed {
    margin-top: $aria * 4;

    > * + * {
        margin-left: $aria;
    }

    > * {
        animation-iteration-count: infinite;
        animation-name: lose;
        animation-duration: 0.8s;
        animation-timing-function: ease-in;
    }

    > *:nth-child(2) {
        animation-delay: 0.3s;
    }

    > *:nth-child(3) {
        animation-delay: 0.6s;
    }

    > *:nth-child(4) {
        animation-delay: 0.9s;
    }
}

@keyframes lose {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-2px);
    }

    50% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(-6px);
    }
}

@keyframes appear {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
