<template>
    <nav class="navbar">
        <section :class="{ active: $route.name === 'Home' }">
            <nuxt-link to="/" class="navbar__link"> Home </nuxt-link>
        </section>

        <section class="navbar__right">
            <span class="navbar__link" :class="{ active: $route.name === 'Projects' }">
                <nuxt-link to="/projects"> Projects </nuxt-link>
            </span>
            <i
                class="navbar__theme-switcher"
                :class="currentTheme === 'dark-theme' ? 'far fa-moon' : 'fas fa-moon'"
                @click="toggleTheme"
            ></i>
        </section>
    </nav>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import ThemeDetector from '@/mixins/ThemeDetector';

@Component({})
export default class Navbar extends mixins(ThemeDetector) {}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    margin-block-end: $space-7;
}

.navbar__link {
    padding-block-end: $space-0;
    border-block-end: r(2.5) solid transparent;
    transition: border-color $transition-duration-default;

    &:hover,
    &.nuxt-link-exact-active {
        border-color: $color-border-regular;
    }
}

.navbar__right {
    display: flex;
    align-items: center;
    margin-left: $space-2;
}

.navbar__theme-switcher {
    margin-top: r(-6.5);
    margin-left: $space-2;
    color: $color-foreground;
    cursor: pointer;
    transition: color $transition-duration-default;

    &:hover {
        color: $color-primary-regular;
    }
}

body.dark-theme {
    .navbar__link {
        &:hover,
        &.nuxt-link-exact-active {
            border-color: $color-border-darker;
        }
    }

    .navbar__theme-switcher {
        color: $color-background;

        &:hover {
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
