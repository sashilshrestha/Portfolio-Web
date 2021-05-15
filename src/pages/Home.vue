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
                            <a href="" uk-icon="icon: instagram"></a>
                            <a href="" uk-icon="icon: linkedin"></a>
                            <a href="" uk-icon="icon: github"></a>
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
    .uk-container-large {
        display: flex;
        max-width: 1520px;

        .left-side {
            position: relative;

            img {
                width: 42.25rem;
            }

            &::after {
                content: '';
                width: 7.375rem;
                height: 7.375rem;
                background: transparent url(../assets/Vector.png) no-repeat;
                position: absolute;
                left: 0;
                bottom: 0;
                background-size: contain;
            }
        }

        .right-side {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 0 0 2.375rem;
            position: relative;

            .my-info {
                margin-bottom: 8rem;
                h5 {
                    color: #fff;
                    font-size: 2.125rem;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin: 0 0 0.375rem 0;
                    font-weight: 100;
                }
                h1 {
                    color: #fff;
                    font-size: 5.25rem;
                    font-weight: 700;
                    margin: 0 0 0.375rem 0;

                    span {
                        position: relative;
                        z-index: 0;

                        &::after {
                            content: '';
                            height: 1.8125rem;
                            width: 100%;
                            background-color: #0767c2;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            z-index: -1;
                        }
                    }
                }
                p {
                    color: #fff;
                    font-size: 2.0625rem;
                    margin: 0 0 1.625rem 0;
                }
                .cta-sec {
                    display: flex;
                    align-items: center;
                    a {
                        &.btn-download {
                            color: #fff;
                            text-decoration: underline;
                            text-transform: uppercase;
                            font-size: 1.125rem;
                            text-underline-offset: 8px;
                            letter-spacing: 1px;
                            margin: 0 2.5rem 0 0;
                        }
                    }
                    .social-icons {
                        a {
                            color: #fff;
                            margin: 0 1.5625rem 0 0;
                            padding: 0.6rem;
                            border-radius: 50%;
                            transition: all 0.3s ease-in-out;
                            border: 1px solid #fff;

                            &:hover {
                                background: #fff;
                                color: #160929;
                            }

                            svg {
                                width: 5rem;
                            }
                        }
                    }
                }
            }

            &::after {
                content: '';
                width: 9.5625rem;
                height: 9.5625rem;
                background: transparent url(../assets/Vector.png) no-repeat;
                position: absolute;
                top: 0;
                right: 0;
                background-size: contain;
            }
        }
    }
}
</style>
