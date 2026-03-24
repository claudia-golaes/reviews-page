<template>
    <section class="hero">
        <img
            class="hero__bg"
            src='../../public/blue-red-30.webp'
            aria-hidden="true"
            alt="Background"
            fetchpriority="high"

        />
        <div class="hero__container">
            <div class="hero__content">
                <div class="text-group">
                    <h1 class="hero__title">
                        Pentest-Tools.com 
                        <span class="title-nowrap">
                            reviews and testimonials
                        </span>
                    </h1>
                    <p class="hero__description">
                        Want to know how your peers use Pentest-Tools.com? Explore why security and IT teams worldwide rely on our toolkit to run the key steps of a penetration test, easily and without expert hacking skills.
                    </p>
                </div>
            </div>
        </div>
        <div class="illustration">
            <img
                class="illustration-img"
                src="../../public/target-bug-illustration.svg"
                alt="Target bug illustration"
            />
        </div>
    </section>
</template>

<script>
    export default {
        name:'Hero'
    }
</script>

<style scoped>
.hero{
  background-color: #171717;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 950px;
  overflow: hidden;
}

.hero__bg{
    pointer-events: none;
    position: absolute;
    max-width: none;
    width: 2000px;
    left: 0;
    top: 50%;
    transform: translate(-25%, -50%);
}

.hero__container{
    position: relative;
    z-index: 10;
    max-width: 80rem;
    margin: 0 auto;
    width: 100%;
    padding: 64px 24px;
    box-sizing: border-box;
}

.hero__content{
    max-width: 760px;
}

.text-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
}

.hero__title{
    font-size: 3rem;
    font-weight: 700;
    line-height: 56px;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
}

.title-nowrap{
    display: block;
}

.hero__description{
    color: rgba(255, 255, 255, 0.55); 
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
}

.illustration{
    pointer-events: none;
    position: absolute;
    inset: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
}

.illustration-img{
    position: absolute;
    right: -25%;
    top: 0;
    height: auto;
    width: 384px;
}

/* SM */
@media (min-width: 640px){
    .container{
        padding: 80px 40px;
    }

    .text-group{
        align-items: start;
        text-align: left;
    }

    .title{
        font-size: 64px;
        line-height: 72px;
    }

    .title-nowrap{
        white-space: nowrap;
    }

    .description{
        font-size: 1.125rem;
    }

    .illustration-img{
        right: 16px;
        width: 384px;
    }

}

/* LG */
@media (min-width: 1024px) {
    .container{
        padding: 128px 64px;
    }
    .illustration-img{
        right: -80px;
        top: 64px;
        width: 576px;
    }
}

/* XL */
@media (min-width: 1280px) {
    .illustration-img{
        right: 0;
    }
}


@media (max-height: 950px) {
  .hero {
    min-height: 100vh;
  }
}


</style>