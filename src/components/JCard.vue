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
    background:  $secondary;
    color: $primary;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 10px;
}

</style>