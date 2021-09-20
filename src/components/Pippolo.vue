<template>
    <button
        class="Pippolo"
        @click="loopColor"
        v-bind:style="{ backgroundColor: colors[colorIndex] }"
        v-bind:disabled="isDisabled"
    />
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Pippolo',
    props: {
        isDisabled: {
            type: Boolean,
            default: true,
        },
        index: {
            type: Number,
        },
        color: {
            type: Number,
            default: -1,
        },
    },
    data: () => {
        return {
            colorIndex: -1,
        };
    },
    computed: {
        ...mapState(['colors', 'forceReset']),
    },
    methods: {
        ...mapActions(['updateCurrentTurn']),
        loopColor() {
            this.colorIndex =
                this.colorIndex === this.colors.length - 1 ? 0 : ++this.colorIndex;
            this.updateCurrentTurn({
                index: this.index - 1,
                colorIndex: this.colorIndex,
            });
        },
    },
    watch: {
        forceReset() {
            this.colorIndex = -1;
        },
    },
    mounted() {
        if (this.color > -1) this.colorIndex = this.color;
    },
};
</script>

<style>
.Pippolo {
    width: var(--peg-radius);
    height: var(--peg-radius);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    border: 0;
    border-radius: var(--peg-radius);
    background-color: var(--sand);
    box-shadow: inset 0 0 4px 0 var(--sand-d);
}
</style>
