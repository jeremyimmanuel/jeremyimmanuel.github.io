<template>
    <div class='card'>
        <slot />
    </div>
</template>

<script>
export default {
    name: 'JCard'
}
</script>

<style lang="scss" scoped>
@import './../styles/_globals.scss';

.card {
    display: inline-block;
    background: $accent;
    color: $primary;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 10px 20px;
    transition: all .2s ease-in-out;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    // background:  $primary;
    // color: $secondary;
    transform: scale(1.03);
}



</style>