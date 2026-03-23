<template>
    <section class="hero">
        <img
            class="bg"
            src='../../public/blue-red-30.webp'
            aria-hidden="true"
            alt="Background"
            fetchpriority="high"

        />
        <div class="container">
            <div class="content">
                <div class="text-group">
                    <h1 class="title">
                        Pentest-Tools.com 
                        <span class="title-nowrap">
                            reviews and testimonals
                        </span>
                    </h1>
                    <p class="description">
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

.bg{
    pointer-events: none;
    position: absolute;
    max-width: none;
    width: 2000px;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
}

.container{
    position: relative;
    z-index: 10;
}

.content{
    max-width: 760px;
}

.text-group{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.title{
    font-size: 3rem;
    font-weight: 700;
    line-height: 56px;
    color: rgba(255, 255, 255, 0.75);
}

.title-nowrap{
    display: block;
}

.description{
    color: rgba(255, 255, 255, 0.55); 
    font-size: 1rem;
    line-height: 1.6;
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
    right: 25%;
    top: 0;
    height: auto;
    width: 384px;
}



</style>