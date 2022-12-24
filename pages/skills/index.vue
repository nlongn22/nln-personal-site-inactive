<template>
    <main class="skills__page">
        <section>
            <h1 class="skills__title">Work experience</h1>
            <ul>
                <li v-for="(experience, index) in experiences" :key="index">
                    {{ experience.company }}
                    <span class="skills__company-duration">
                        ({{ experience.duration }})
                    </span>
                </li>
            </ul>
        </section>

        <section>
            <h2 class="skills__title">Technologies</h2>
            <ul>
                <li v-for="(technology, index) in technologies" :key="index">
                    {{ technology }}
                </li>
            </ul>
        </section>

        <section>
            <h2 class="skills__title">Languages</h2>
            <ul>
                <li v-for="(language, index) in languages" :key="index">
                    {{ language }}
                </li>
            </ul>
        </section>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

export interface IExperience {
    company: string;
    duration: string;
}

@Component({})
export default class IndexPage extends Vue {
    get experiences(): IExperience[] {
        return [
            {
                company: 'Apploud Digital',
                duration: 'January 2022 - August 2022',
            },
        ];
    }

    get languages(): string[] {
        return ['Czech', 'English', 'German', 'Vietnamese'];
    }

    get technologies(): string[] {
        return [
            'Nuxt.js',
            'Vue.js',
            'Javascript + Typescript',
            'HTML 5',
            'CSS + SASS',
            'GSAP',
            'GIT',
            'REST API',
            'GraphQL',
            'DatoCMS',
        ];
    }

    head() {
        return {
            title: 'Ngoc Long Nguyen | Skills',
        };
    }
}
</script>

<style lang="scss" scoped>
.skills__page {
    display: flex;
    flex-direction: column;
    row-gap: $space-4;
}

.skills__title {
    margin-bottom: $space-1;
}

.skills__company-duration {
    font-size: r(14);
    font-style: italic;
    font-weight: $font-weight-light;
}
</style>
