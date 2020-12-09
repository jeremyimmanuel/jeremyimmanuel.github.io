<template>
    <div>
        <j-card
            class="card"
            @click="show = !show"
        >
            <h2 class="title">
                {{ title }}
            </h2>
            <div class='subtitle'>
                <span id='job-title'>
                    {{ jobTitle }}
                </span>
                <span id='date'>{{ date }}</span>
            </div>
            <transition name="fade">
                <ul
                    v-if="show"
                    class="tasks"
                >
                    <li class='task' v-for='task in tasks' :key='task'>
                        {{ task }}
                    </li>
                </ul>
            </transition>
        </j-card>
    </div>
</template>

<script>
export default {
    name: 'ExperienceCard',

    data () {
        return {
            show: false
        }
    },

    props: {
        title: String,
        jobTitle: String,
        date: String,
        tasks: Array
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 280px;
    height: 210px;
    margin-bottom: 30px;
}

.title {
    font-size: 20px;
}


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
    font-size: 14px;
}
</style>