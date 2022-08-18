import {Component, Watch, Vue} from 'nuxt-property-decorator';

@Component({})
class ThemeDetector extends Vue {
    currentTheme: string = '';

    get mediaPreference(): string {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const deviceTheme = prefersDark ? 'dark-theme' : 'light-theme';

        return localStorage.getItem('current-theme') || deviceTheme;
    }

    toggleTheme(): void {
        const currentTheme = localStorage.getItem('current-theme');
        currentTheme === 'light-theme' ? this.setTheme('dark-theme') : this.setTheme('light-theme');
    }

    setTheme(theme: string): void {
        this.currentTheme = theme;
        localStorage.setItem('current-theme', theme);
        document.body.className = theme;
    }

    listenToThemeChange(): void {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            e.matches ? this.setTheme('dark-theme') : this.setTheme('light-theme');
        });
    }

    @Watch('currentTheme')
    updateThemeColor(newVal: string): void {
        this.setMetaThemeColor(newVal);
    }

    setMetaThemeColor(color: string): void {
        const themeColor = color === 'dark-theme' ? '#232931' : '#fbfbfb';
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    }

}

export default ThemeDetector;
