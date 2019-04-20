<template>
    <button class="pippolo"></button>
</template>

<script>
export default {
    name: 'Pippolo',
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

.pippolo {
    @include size($h, $h);
    @include button-reset;
    border: 0;
    border-radius: $h;
    background-color: $sand;
}
</style>
