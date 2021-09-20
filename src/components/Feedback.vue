<template>
    <div class="Feedback">
        <i class="Led" v-for="x in 4" :key="x" :class="fbClass(x - 1)" />
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
.Feedback {
    width: var(--peg-radius);
    height: var(--peg-radius);
    margin-left: var(--air);
    margin-top: var(--air-s);
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    transition: opacity 0.4s ease;
    opacity: 0.1;
}

.Feedback.is-active {
    opacity: 1;
}

.Led {
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

.Led.fb-1,
.Led.fb-0 {
    width: 12px;
    height: 12px;
}

.Led.fb-1 {
    background-color: var(--black);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
}

.Led.fb-0 {
    background-color: var(--mao);
    box-shadow: 0 0 2px 2px rgba(255, 64, 87, 0.5);
}
</style>
