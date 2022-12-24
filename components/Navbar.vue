<template>
    <nav class="navbar">
        <section>
            <nuxt-link to="/" class="navbar__link border-bottom">Home</nuxt-link>
        </section>

        <section class="navbar__right">
            <nuxt-link to="/skills" class="navbar__link border-bottom">
                Skills
            </nuxt-link>
            <nuxt-link to="/projects" class="navbar__link border-bottom">
                Projects
            </nuxt-link>
            <span
                class="navbar__theme-switcher"
                @click="toggleTheme"
            >
                {{ currentThemeLabel }}
            </span>
        </section>
    </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import ThemeDetector from '@/mixins/ThemeDetector';

@Component({})
export default class Navbar extends mixins(ThemeDetector) {
    get currentThemeLabel(): string {
        return this.currentTheme === 'dark-theme' ? 'Light' : 'Dark';
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    margin-block-end: $space-7;
}

.navbar__right {
    display: flex;
    align-items: center;
    column-gap: $space-2;
    margin-left: $space-2;
}

.navbar__theme-switcher {
    margin-top: r(-6.5);
    font-weight: $font-weight-medium;
    cursor: pointer;
    transition: color $transition-duration-default;

    @include has-hover {
        color: $color-primary-regular;
    }
}

body.dark-theme {

    .navbar__theme-switcher {
        @include has-hover {
            color: $color-primary-darker;
        }
    }
}

@include breakpoint(r(700)) {

    .navbar {
        justify-content: space-between;
    }
}
</style>
