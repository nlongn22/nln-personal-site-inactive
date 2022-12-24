<template>
    <div class="container">
        <Navbar />
        <Nuxt />
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ThemeDetector from '@/mixins/ThemeDetector';

@Component({ components: { Navbar, Footer } })
export default class DefaultLayout extends mixins(ThemeDetector) {
    mounted(): void {
        this.setTheme(this.mediaPreference);
        this.listenToThemeChange();
    }
}
</script>

<style lang="scss" scoped>
.container {
    @include page-gutter;

    inline-size: 100%;
    max-inline-size: $global-max-width;
    margin-inline: auto;
    padding-block: $space-4;
}

@include breakpoint(r(700)) {

    .container {
        padding-block: r(65);
    }
}

@include breakpoint(medium) {

    .container {
        padding-block: r(120);
    }
}

@include breakpoint(large) {

    .container {
        padding-block: r(140);
    }
}
</style>
