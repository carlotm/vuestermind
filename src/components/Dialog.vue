<template>
    <section class="dialog">
        <div class="message">
            <p v-text="status === 'happy' ? 'You won :)' : 'You lost :('"></p>
            <div class="secretRevealed" v-bind:class="status">
                <Pippolo
                    v-for="i in 4"
                    v-bind:key="i"
                    v-bind:isDisabled="true"
                    v-bind:color="secret[i - 1]"
                />
            </div>
            <button
                class="cta"
                @click="startNewGame"
                v-text="status === 'happy' ? 'New Game' : 'Try Again'"
            ></button>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Pippolo from './Pippolo.vue';

export default {
    name: 'Dialog',
    components: {
        Pippolo,
    },
    props: {
        status: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(['secret']),
    },
    methods: {
        ...mapActions(['startNewGame']),
    },
};
</script>

<style>
.dialog {
    width: 100%;
    height: 100%;
    animation-iteration-count: 1;
    animation-name: appear;
    animation-duration: 0.2s;
    background-color: var(--fiorentina);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
}

.message {
    box-shadow: var(--main-shadow);
    background-color: var(--white);
    padding: calc(var(--air) * 2);
    border-radius: var(--border-radius);
    font-size: 32px;
    text-align: center;
}

.secretRevealed {
    margin-top: calc(var(--air) * 2);
}

.secretRevealed > * + * {
    margin-left: var(--air-s);
}

.secretRevealed > * {
    animation-iteration-count: infinite;
    animation-duration: 0.8s;
    animation-timing-function: ease-in;
}

.secretRevealed > *:nth-child(2) {
    animation-delay: 0.2s;
}

.secretRevealed > *:nth-child(3) {
    animation-delay: 0.3s;
}

.secretRevealed > *:nth-child(4) {
    animation-delay: 0.4s;
}

.secretRevealed.happy > * {
    animation-name: dance;
}

.secretRevealed.sad > * {
    animation-name: shake;
}

@keyframes dance {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(4px);
    }

    50% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(-4px);
    }
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(-10px);
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

.cta {
    background-color: var(--sand);
    border-radius: var(--border-radius);
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: var(--air-s) var(--air);
    margin-top: calc(var(--air) * 2);
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
}
</style>
