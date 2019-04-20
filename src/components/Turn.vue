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
}
</style>
