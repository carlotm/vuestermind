<template>
    <button
        class="pippolo"
        @click="loopColor"
        v-bind:style="{ backgroundColor: colors[colorIndex] }"
    ></button>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Pippolo',
    data: () => {
        return {
            colorIndex: -1,
        };
    },
    computed: {
        ...mapState(['colors']),
    },
    methods: {
        loopColor() {
            this.colorIndex =
                this.colorIndex === this.colors.length - 1 ? 0 : ++this.colorIndex;
        },
    },
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
