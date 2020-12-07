<template>
    <div>
        <experience-card
            title='Luminator Technology Group'
            job-title='Sofware Engineer Intern'
            date='Nov 2019 - Feb 2020'
            :tasks='[
                "Hello",
                "World",
                "There",
                "General",
                "Kenobi"
            ]'
        />
        <experience-card
            title='Hey Mayo!'
            job-title='iOS Developer'
            date='Apr 2020 - present'
        />
        <experience-card
            title='Quantitative Skills Center'
            job-title='Computer Science Lead Tutor'
            date='Apr 2019 - June 2020'
        />
    </div>
</template>

<script>
import ExperienceCard from './ExperienceCard';

export default {
    name: 'TheContent',

    data () {
        return {
            content: 'Hello this is Jeremy\'s personal website'
        }
    },

    components: {
        ExperienceCard
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-bottom: 10px
}
</style>