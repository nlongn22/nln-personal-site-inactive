<template>
    <main>
        <section class="person__wrapper">
            <address class="person__name">Ngoc Long Nguyen</address>
            &#8226;
            <label class="person__job">Frontend developer</label>
        </section>

        <section>
            <h1 class="message__header">
                {{ message }}
                <span
                    class="message__cursor"
                    :class="{
                        'message__cursor--blinking': message === 'Welcome!',
                    }"
                >
                    |
                </span>
            </h1>
        </section>

        <section>
            <p>
                Hey there &#128075;.
                <br>
                My name is Ngoc Long Nguyen but most people call me Filip. I'm a
                20 year old frontend developer who currently lives in
                <s>Munich</s> Berlin, Germany. At the moment I'm studying
                computer science at the Technical University of Berlin.
                <br>
                <br>
                In my free time (when I'm not learning anything) I like to watch
                TV shows or hang out with my friends. I'm quite a big fan of
                Formula 1 so every weekend is spent watching races and following
                news. To stay in shape I try to run every other day.
            </p>
        </section>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class IndexPage extends Vue {
    get message() {
        return 'Welcome!';
    }

    //  typeWriter(string: string): void {
    //      const stringArray = string.split('');
    //      this.message += stringArray[this.index];
    //      this.index++;
    //  }

    //  initTypeWriter(message: string): Promise<void> {
    //      return new Promise((resolve) => {
    //          setTimeout(() => {
    //              const interval = setInterval(() => {
    //                  this.typeWriter(message);
    //                  if (this.message === 'Welcome!') {
    //                      resolve();
    //                      clearInterval(interval);
    //                      return;
    //                  }

    //                  if (this.message === message) {
    //                      this.message = '';
    //                      this.index = 0;
    //                      resolve();
    //                      clearInterval(interval);
    //                  }
    //              }, 175);
    //          }, 350);
    //      });
    //  }

    //  mounted(): void {
    //      this.initTypeWriter('Welcome!');
    //  }

    head() {
        return {
            title: 'Ngoc Long Nguyen | Home',
        };
    }
}
</script>

<style lang="scss" scoped>
.person__wrapper {
    margin-block-end: $space-4;
}

.person__name {
    display: inline;
    font-weight: $font-weight-semibold;
}

.person__job {
    font-weight: $font-weight-light;
}

.message__header {
    margin-block-end: $space-5;
    font-size: r(36);
    font-weight: $font-weight-bold;
}

@keyframes blink {

    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.message__cursor {
    font-weight: $font-weight-regular;
    color: $color-primary-regular;

    &--blinking {
        animation: blink 1.5s infinite 0.3s;
    }
}

body.dark-theme {

    .message__cursor {
        color: $color-primary-darker;
    }
}

@include breakpoint(r(700)) {

    .message__header {
        font-size: r(48);
    }
}
</style>
