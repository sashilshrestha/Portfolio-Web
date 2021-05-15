<template>
    <div id="homePage">
        <div class="uk-container uk-container-large">
            <div class="left-side">
                <img src="../assets/Profile.png" alt="" />
            </div>
            <div class="right-side">
                <div class="my-info">
                    <h5>Hello !</h5>
                    <h1>I'm <span>Sashil Shrestha</span></h1>
                    <p>Front-End Enthusiast, Student, Learner</p>
                    <div class="cta-sec">
                        <a href="" class="btn-download">
                            Download CV
                        </a>
                        <div class="social-icons">
                            <a href=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style lang="scss" scoped>
#homePage {
    .uk-container {
        display: flex;
    }
}
</style>
