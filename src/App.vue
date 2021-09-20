<template>
    <main class="App">
        <Board />
        <section class="Feedbacks">
            <Feedback
                v-for="turn in total"
                v-bind:class="{ 'is-active': isActive(total - turn) }"
                v-bind:key="total - turn + 1"
                v-bind:fb="feedback[total - turn + 1]"
            />
        </section>
        <Check v-bind:style="{ transform: checkButtonTranslation }" />
        <Dialog v-if="won" status="happy" />
        <Dialog v-if="lost" status="sad" />
        <Help @gotHelp="showHelp = false" v-bind:class="{ 'is-active': showHelp }" />
    </main>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';

import Board from './components/Board.vue';
import Feedback from './components/Feedback.vue';
import Check from './components/Check.vue';
import Dialog from './components/Dialog.vue';
import Help from './components/Help.vue';

export default {
    name: 'app',
    components: {
        Board,
        Feedback,
        Check,
        Dialog,
        Help,
    },
    data() {
        return {
            showHelp: true,
        };
    },
    computed: {
        ...mapGetters(['checkButtonTranslation', 'isActive']),
        ...mapState(['current', 'total', 'won', 'lost', 'feedback']),
    },
    methods: {
        ...mapActions(['generateSecret']),
    },
    mounted() {
        this.generateSecret();
    },
};
</script>

<style>
.App {
    max-width: 290px;
    width: 100%;
    position: relative;
    z-index: 1;
}

.Feedbacks {
    max-width: calc(var(--peg-radius) + var(--air));
    width: 100%;
    background-color: var(--sand);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    box-shadow: var(--shadow-main);
    padding-bottom: var(--air-s);
    position: absolute;
    top: calc(var(--air-s) + var(--peg-radius));
    right: 0;
    z-index: -1;
}
</style>
