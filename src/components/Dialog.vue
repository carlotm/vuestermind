<template>
    <section class="Dialog">
        <div class="Message">
            <p v-text="status === 'happy' ? 'You won :)' : 'You lost :('"></p>
            <div class="SecretRevealed" :class="status">
                <Pippolo
                    v-for="i in 4"
                    v-bind:key="i"
                    v-bind:isDisabled="true"
                    v-bind:color="secret[i - 1]"
                />
            </div>
            <button
                @click="startNewGame"
                v-text="status === 'happy' ? 'New Game' : 'Try Again'"
            />
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
.Dialog {
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

.Message {
    box-shadow: var(--main-shadow);
    background-color: var(--white);
    padding: calc(var(--air) * 2);
    border-radius: var(--border-radius);
    font-size: 32px;
    text-align: center;
}

.SecretRevealed {
    margin-top: calc(var(--air) * 2);
}

.SecretRevealed > * + * {
    margin-left: var(--air-s);
}

.SecretRevealed > * {
    animation-iteration-count: infinite;
    animation-duration: 0.8s;
    animation-timing-function: ease-in;
}

.SecretRevealed > *:nth-child(2) {
    animation-delay: 0.2s;
}

.SecretRevealed > *:nth-child(3) {
    animation-delay: 0.3s;
}

.SecretRevealed > *:nth-child(4) {
    animation-delay: 0.4s;
}

.SecretRevealed.happy > * {
    animation-name: dance;
}

.SecretRevealed.sad > * {
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
</style>
