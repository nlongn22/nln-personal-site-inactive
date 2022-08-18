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
        'https://www.instagram.com/nlongn22',
        'mailto:22nlongn@gmail.com',
        'https://github.com/nlongn22',
    ];

    iconTitles: string[] = ['Go to instagram.com', 'Email 22nlongn@gmail.com', 'Go to github.com'];

    iconNames: string[] = ['fab fa-instagram', 'far fa-envelope', 'fab fa-github'];
}
</script>

<style lang="scss" scoped>
.footer {
    margin-block-start: $space-7;
}

.footer__icon {
    font-size: 24px;
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
