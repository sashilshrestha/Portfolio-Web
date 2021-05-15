<template>
    <Home />
</template>

<script>
import Home from './pages/Home';

export default {
    name: 'App',
    components: {
        Home,
    },
};
</script>

<style lang="scss">
@import url('./scss/main.scss');

// 1. Your custom variables and variable overwrites.
$global-link-color: #da7d02;

// 2. Import default variables and available mixins.
@import '~uikit/src/scss/variables-theme.scss';
@import '~uikit/src/scss/mixins-theme.scss';

// 3. Your custom mixin overwrites.
@mixin hook-card() {
    color: #000;
}

// 4. Import UIkit.
@import '~uikit/src/scss/uikit-theme.scss';

// Some font smoothing
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

#app {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
