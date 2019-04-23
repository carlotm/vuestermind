<template>
    <div class="feedback">
        <i class="led" v-for="x in 4" v-bind:key="x" v-bind:class="fbClass(x - 1)"></i>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Feedback',
    props: {
        fb: {
            type: String,
        },
    },
    computed: {
        ...mapState(['current', 'currentTurn', 'feedback']),
        fbClass() {
            return x => {
                if (this.fb === undefined) return null;
                const fb = this.fb.trim()[x];
                return fb === undefined ? null : `fb-${fb}`;
            };
        },
    },
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
    transition: opacity 0.4s ease;
    opacity: 0.1;

    &.active {
        opacity: 1;
    }
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
    transition: all 0.4s;

    &.fb-1,
    &.fb-0 {
        @include size(12px, 12px);
    }

    &.fb-1 {
        background-color: $black;
        box-shadow: 0 0 2px 2px rgba($black, 0.4);
    }

    &.fb-0 {
        background-color: $mao;
        box-shadow: 0 0 2px 2px rgba($mao, 0.4);
    }
}
</style>
