<template>
    <h1>{{ title }}</h1>
</template>

<script>
import { TITLE } from '../constants'

export default {
    name: 'TheHeader',

    data () {
        return {
            title: TITLE
        }
    }
}
</script>

<style scoped>

h1 {
    font-size: 60px;
}

</style>