<template>
    <div class="feedback">
        <i class="led" v-for="x in 4" v-bind:key="x" v-bind:class="fbClass(x - 1)"></i>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Feedback',
    props: {
        fb: {
            type: String,
        },
    },
    computed: {
        ...mapState(['current', 'currentTurn', 'feedback']),
        fbClass() {
            return x => {
                if (this.fb === undefined) return null;
                const fb = this.fb.trim()[x];
                return fb === undefined ? null : `fb-${fb}`;
            };
        },
    },
};
</script>

<style>
.feedback {
    width: var(--peg-radius);
    height: var(--peg-radius);
    margin-left: var(--air);
    margin-top: var(--air-s);
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    transition: opacity 0.4s ease;
    opacity: 0.1;
}

.feedback.active {
    opacity: 1;
}

.led {
    width: 8px;
    height: 8px;
    background-color: var(--sand-d);
    border-radius: 8px;
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s;
}

.led.fb-1,
.led.fb-0 {
    width: 12px;
    height: 12px;
}

.led.fb-1 {
    background-color: var(--black);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
}

.led.fb-0 {
    background-color: var(--mao);
    box-shadow: 0 0 2px 2px rgba(255, 64, 87, 0.5);
}
</style>
