<template>
    <section class="turn">
        <Pippolo />
        <Pippolo />
        <Pippolo />
        <Pippolo />
    </section>
</template>

<script>
import Pippolo from './Pippolo.vue';

export default {
    name: 'Turn',
    components: {
        Pippolo,
    },
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

.turn {
    @include hlh($h);
    border-radius: $bd;
    margin-top: $aria;
    display: flex;
    justify-content: space-between;
    transition: opacity 0.4s ease;
    opacity: 0.2;

    &.active {
        opacity: 1;
    }
}
</style>
