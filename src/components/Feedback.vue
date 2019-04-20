<template>
    <section class="feedback">
        <i class="led"></i>
        <i class="led"></i>
        <i class="led"></i>
        <i class="led"></i>
    </section>
</template>

<script>
export default {
    name: 'Feedback',
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

.feedback {
    @include size($h, $h);
    margin-left: $aria * 2;
    margin-top: $aria;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
}

.led {
    @include size(8px, 8px);
    background-color: $sand-d;
    border-radius: 8px;
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
