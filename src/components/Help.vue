<template>
    <section class="help">
        <p>Click on the pegs to change the colors, then on "Check" to get feedback.</p>
        <p>
            A black feedback means right color and position.<br />
            A red feedback means right color but wrong position.
        </p>
        <p>Remember that duplicate colors are not allowed!</p>
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

<style>
.help {
    background-color: var(--fiorentina);
    color: var(--white);
    border-radius: var(--border-radius);
    font-weight: normal;
    position: absolute;
    left: calc(var(--air) * -1);
    bottom: calc(var(--peg-radius) + var(--air-s) * 3);
    width: calc(100% + var(--air) * 2);
    padding: var(--air);
    pointer-events: none;
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.1s linear, opacity 0.1s linear;
}

.help.active {
    pointer-events: auto;
    transform: translateX(0);
    opacity: 1;
}

.help:after {
    width: 0px;
    height: 0px;
    content: '';
    position: absolute;
    bottom: calc(var(--air-s) * -1);
    left: calc(var(--air-s) * 4.3);
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: var(--fiorentina) transparent transparent transparent;
}

.help > p + p {
    margin-top: var(--air-s);
}

.help p {
    font-size: 16px;
    line-height: 1.4;
}

.help .actions {
    text-align: right;
}
</style>
