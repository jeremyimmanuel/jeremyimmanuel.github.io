<template>
    <j-card>
        
            <h2>
                {{ title }}
            </h2>
            <div class='subtitle'>
                <span id='job-title'>
                    {{ jobTitle }}
                </span>
                <span id='date'>{{ date }}</span>
            </div>
            <ul>
                <li class='task' v-for='task in tasks' :key='task'>
                    {{ task }}
                </li>
            </ul>
        
    </j-card>
</template>

<script>
export default {
    name: 'ExperienceCard',

    props: {
        title: String,
        jobTitle: String,
        date: String,
        tasks: Array
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');

.subtitle {
    display: flex;
    justify-content: space-between;
    font-family: 'Spartan';
    font-size: 12px;
}

#job-title {
    margin-right: 50px;
}

.task {
    font-family: 'Spartan';
}

</style>