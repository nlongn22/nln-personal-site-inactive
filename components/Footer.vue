<template>
    <footer class="footer">
        <section>
            <a
                v-for="(link, index) in contactLinks"
                :key="index"
                :href="contactLinks[index]"
                :title="contactTitles[index]"
                target="_blank"
                class="footer__contact"
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
    contactLinks: string[] = [
        'https://linkedin.com/in/ngoc-long-nguyen-0aa4bb243',
        'mailto:22nlongn@gmail.com',
        'https://github.com/nlongn22',
    ];

    contactTitles: string[] = [
        'Go to linkedin.com',
        'Email 22nlongn@gmail.com',
        'Go to github.com',
    ];

    contactNames: string[] = ['LinkedIn', 'Email', 'GitHub'];
}
</script>

<style lang="scss" scoped>
.footer {
    margin-block-start: $space-7;
}

.footer__contact {
    @include border-bottom-link;

    &:nth-child(2) {
        margin-inline: $space-2;
    }
}

body.dark-theme {
    .footer__contact {
        &:hover,
        &.nuxt-link-exact-active {
            border-color: $color-border-darker;
        }
    }
}
</style>
