<template>
    <section id="secret"></section>
</template>

<script>
export default {
    name: 'Secret',
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

#secret {
    @include hlh($h);
    border-radius: $bd;
    background-color: $sand;
}
</style>
