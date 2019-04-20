<template>
    <main id="app">
        <Board />
        <section id="feedbacks">
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
        </section>
        <Check />
    </main>
</template>

<script>
import Board from './components/Board.vue';
import Feedback from './components/Feedback.vue';
import Check from './components/Check.vue';

export default {
    name: 'app',
    components: {
        Board,
        Feedback,
        Check,
    },
};
</script>

<style lang="scss">
@import './sass/reset';
@import './sass/settings';
@import './sass/utils';
@import './sass/main';

#app {
    @include limit-to(290px);
    margin: 20px auto;
    position: relative;
    z-index: 1;
}

#feedbacks {
    @include limit-to($h + ($aria * 2));
    background-color: $sand;
    border-radius: 0 $bd $bd 0;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    height: ($aria * 11) + ($h * 10);
}
</style>
