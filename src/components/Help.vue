<template>
    <section class="help">
        <p>
            Click on the pegs to change the colors, then on "Check" to get feedback.
        </p>
        <p>
            A black feedback means right color and position.<br />
            A red feedback means right color but wrong position.
        </p>
        <p>
            Remember that duplicate colors are not allowed!
        </p>
        <div class="actions">
            <button class="cta" @click="$emit('gotHelp')">Got it</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Help',
};
</script>

<style lang="scss">
@import '../sass/settings';
@import '../sass/utils';

.help {
    background-color: $fiorentina;
    color: $white;
    box-shadow: 0 0 4px 0 rgba($black, 0.3);
    border-radius: $bd;
    font-weight: normal;
    position: absolute;
    left: -$aria * 2;
    bottom: $h + $aria * 3;
    width: calc(100% + #{$aria} * 4);
    padding: $aria * 2;
    pointer-events: none;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.1s linear, opacity 0.1s linear;

    &.active {
        pointer-events: auto;
        transform: translateX(0);
        opacity: 1;
    }

    &:after {
        @include size(0, 0);
        content: '';
        position: absolute;
        bottom: -$aria;
        left: $aria * 4.3;
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: $fiorentina transparent transparent transparent;
    }

    > p + p {
        margin-top: $aria;
    }

    p {
        font-size: 16px;
        line-height: 1.4;
    }

    .actions {
        text-align: right;
    }
}
</style>
