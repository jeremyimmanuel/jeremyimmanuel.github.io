<template>
    <div class='links-container'>
        <a
            v-for="(value) in links"
            :key="value.link" :href="value.link"
            target='_blank'
        >
            <img :src="value.icon" >
        </a>
        <j-card></j-card>
    </div>
</template>

<script>
export default {
    name: 'TheLinks',

    data () {
        return {
            links: {
                github: {
                    link: 'https://github.com/jeremyimmanuel',
                    icon: require('./../assets/icons/github.png')
                },
                twitter: {
                    link: 'https://twitter.com/jeremytandjung',
                    icon: require('./../assets/icons/twitter.png')
                },
                linkedin: {
                    link: 'https://linkedin.com/in/jeremytandjung',
                    icon: require('./../assets/icons/linkedin.png')
                }
            },
            test: '../assets/icons/linkein.png'
        }
    }
}
</script>

<style lang="scss" scoped>
.links-container {
    display: flex;
    justify-content: space-between;
    width: 20%
}
img {
    height: 25px;
    width: 25px;
}

</style>