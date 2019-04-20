<template>
    <button id="check">Check</button>
</template>

<script>
export default {
    name: 'Check',
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

#check {
    @include hlh($h);
    @include button-reset;
    border-radius: $bd;
    background-color: $fiorentina;
    padding-left: $h / 2;
    padding-right: $h / 2;
    color: $white;
    font-family: $main-font;
    font-size: 24px;
    position: absolute;
    text-transform: uppercase;
    bottom: $aria;
    right: -$aria;
    transform: translateX(100%);
}
</style>
