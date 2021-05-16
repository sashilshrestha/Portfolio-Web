<template>
    <div id="particle-js"></div>
    <Home />
</template>

<script>
import 'particles.js';
import Home from './pages/Home';

export default {
    name: 'App',
    components: {
        Home,
    },
    mounted() {
        this.initParticles();
    },
    methods: {
        initParticles() {
            window.particlesJS('particle-js', {
                particles: {
                    number: {
                        value: 8,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: '#271c38',
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#261a38',
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    opacity: {
                        value: 0.4,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 60,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 800,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: false,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab',
                        },
                        onclick: {
                            enable: false,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            });
        },
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

#particle-js {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
