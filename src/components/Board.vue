<template>
    <section id="board">
        <Secret />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
        <Turn />
    </section>
</template>

<script>
import Secret from './Secret.vue';
import Turn from './Turn.vue';

export default {
    name: 'Board',
    components: {
        Secret,
        Turn,
    },
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

#board {
    @include limit-to(242px);
    background-color: $white;
    border-radius: $bd;
    display: flex;
    flex-direction: column;
    padding: $aria;
}
</style>
