<template>
    <footer class="footer">
        <section>
            <a
                v-for="(link, index) in contactLinks"
                :key="link"
                :href="contactLinks[index]"
                :title="contactTitles[index]"
                target="_blank"
                class="footer__contact border-bottom"
            >
                {{ contactNames[index] }} &#8250;
            </a>
        </section>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Footer extends Vue {
    get contactLinks(): string[] {
        return [
            'https://linkedin.com/in/ngoc-long-nguyen-0aa4bb243',
            'mailto:22nlongn@gmail.com',
            'https://github.com/nlongn22',
        ];
    }

    get contactTitles(): string[] {
        return [
            'Go to linkedin.com',
            'Email 22nlongn@gmail.com',
            'Go to github.com',
        ];
    }

    get contactNames(): string[] {
        return ['LinkedIn', 'Email', 'GitHub'];
    }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-block-start: $space-7;
}

.footer__contact {

    &:nth-child(2) {
        margin-inline: $space-2;
    }
}
</style>
