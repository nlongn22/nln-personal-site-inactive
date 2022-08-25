<template>
    <footer class="footer">
        <a
            v-for="(link, index) in iconLinks"
            :key="index"
            :href="iconLinks[index]"
            :title="iconTitles[index]"
            target="_blank"
            class="footer__icon"
        >
            <i :class="iconNames[index]" />
        </a>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Footer extends Vue {
    iconLinks: string[] = [
        'https://linkedin.com/in/ngoc-long-nguyen-0aa4bb243',
        'mailto:22nlongn@gmail.com',
        'https://github.com/nlongn22',
    ];

    iconTitles: string[] = [
        'Go to linkedin.com',
        'Email 22nlongn@gmail.com',
        'Go to github.com',
    ];

    iconNames: string[] = ['fa fa-linkedin', 'fas fa-at', 'fab fa-github'];
}
</script>

<style lang="scss" scoped>
.footer {
    margin-block-start: $space-7;
}

.footer__icon {
    font-size: $space-3;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: $color-primary-regular;
    }

    &:nth-child(2) {
        margin-inline: $space-2;
    }
}

body.dark-theme {
    .footer__icon {
        &:hover {
            color: $color-primary-darker;
        }
    }
}
</style>
