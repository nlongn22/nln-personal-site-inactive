export interface IState {
    theme: string;
}

export const state = () => ({
    theme: '' as string,
});

export const getters = {
    getTheme(state: IState): string {
        return state.theme;
    },
};

export const mutations = {
    changeTheme(state: IState, newTheme: string): void {
        state.theme = newTheme;
    },
};
