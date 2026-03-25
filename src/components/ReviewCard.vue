<template>
    <div class="card">
        <div class="card__header">
            <div class="card__quote">
                <img 
                    src="../../public/testimonial-quote-illustration.svg" 
                    alt="Quote icon" 
                    loading="lazy"
                    class="card__quote-img">
            </div>
            <h3 class="card__title">{{ review.title }}</h3>
        </div>

        <div class="card__body">
            <div class="card__content">
                <div class="card__text" :class="{ 'card__text--expanded': isExpanded }">
                    <p v-for="(paragraph, index) in review.body" :key="index" class="card__paragraph">
                        {{ paragraph }}
                    </p>
                </div>
                <button
                    v-if="review.body.length > 1 || (review.body[0] && review.body[0].length > 300)"
                    class="card__read-more"
                    @click="isExpanded = !isExpanded">
                    {{ isExpanded ? 'Show Less' : 'Read More' }}
                </button>
                <div class="card__author">
                    <div class="card__author-info">
                        <a
                            v-if="review.author.linkedin" :href="review.author.linkedin"
                            class="card__linkedin"
                        >
                            <svg aria-hidden="true" width="18" height="19" viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="card__linkedin-icon">
                                <path d="M18 1.32939V16.6823C18 17.0334 17.8606 17.37 17.6123 17.6182C17.3641 17.8664 17.0275 18.0059 16.6765 18.0059H1.32353C0.972508 18.0059 0.635863 17.8664 0.387653 17.6182C0.139443 17.37 0 17.0334 0 16.6823L0 1.32939C0 0.978367 0.139443 0.641722 0.387653 0.393512C0.635863 0.145302 0.972508 0.00585938 1.32353 0.00585938L16.6765 0.00585938C17.0275 0.00585938 17.3641 0.145302 17.6123 0.393512C17.8606 0.641722 18 0.978367 18 1.32939ZM5.29412 6.88821H2.64706V15.3588H5.29412V6.88821ZM5.53235 3.97645C5.53375 3.77622 5.49569 3.57768 5.42035 3.39216C5.34502 3.20664 5.23387 3.03777 5.09328 2.89521C4.95268 2.75264 4.78537 2.63916 4.60091 2.56126C4.41646 2.48335 4.21846 2.44254 4.01824 2.44115H3.97059C3.5634 2.44115 3.17289 2.60291 2.88497 2.89083C2.59705 3.17875 2.43529 3.56926 2.43529 3.97645C2.43529 4.38363 2.59705 4.77414 2.88497 5.06206C3.17289 5.34999 3.5634 5.51174 3.97059 5.51174C4.17083 5.51667 4.37008 5.48209 4.55696 5.40998C4.74383 5.33788 4.91467 5.22966 5.0597 5.09151C5.20474 4.95335 5.32113 4.78798 5.40223 4.60483C5.48333 4.42168 5.52755 4.22434 5.53235 4.0241V3.97645ZM15.3529 10.2129C15.3529 7.66645 13.7329 6.67645 12.1235 6.67645C11.5966 6.65006 11.0719 6.7623 10.6019 7.00196C10.1318 7.24163 9.73285 7.60034 9.44471 8.04233H9.37059V6.88821H6.88235V15.3588H9.52941V10.8535C9.49115 10.3921 9.63649 9.93421 9.93388 9.57933C10.2313 9.22446 10.6567 9.00126 11.1176 8.95821H11.2182C12.06 8.95821 12.6847 9.48763 12.6847 10.8217V15.3588H15.3318L15.3529 10.2129Z"/>
                            </svg>
                        </a>
                        <div class="card__author-text">
                            <p class="card__author-name">{{ review.author.name }}</p>
                            <p v-if="review.author.jobTitle" class="card__author-job">
                                {{ review.author.jobTitle }}
                                <span v-if="review.author.company"> at {{ review.author.company }}</span>
                            </p>
                        </div>
                    </div>
                    <div v-if="review.author.avatar" class="card__avatar card__avatar--mobile">
                        <img
                            :src="review.author.avatar"
                            :alt="`Review author: ${review.author.name}`"
                            loading="lazy"
                            class="card__avatar-img"
                        />
                    </div>
                    <div v-if="review.author.avatar" class="card__avatar card__avatar--desktop">
                        <img
                            :src="review.author.avatar"
                            :alt="`Review author: ${review.author.name}`"
                            loading="lazy"
                            class="card__avatar-img"
                        />
                    </div>
                </div>

                <!-- footer: 1st type-->
                <div v-if="review.useCases" class="card__footer">
                    <div class="card__use-cases">
                        <p class="card__footer-label">USE CASES</p>
                        <ul class="card__tags">
                            <li v-for="useCase in review.useCases" :key="useCase" class="card__tag">
                                {{ useCase }}
                            </li>
                        </ul>
                    </div>
                    <div v-if="review.author.industry" class="card__industry">
                        <p class="card__footer-label">INDUSTRY</p>
                        <span class="card__tag">
                            {{ review.author.industry }}
                        </span>
                    </div>
                </div> 
                
                <!-- footer: 2nd type-->
                <div v-else-if="review.rating" class="card__footer card__footer--source">
                    <p class="card__footer-label">SOURCE</p>
                    <div class="card__source">
                        <div class="card__stars">
                            <svg 
                                v-for="i in review.rating"
                                :key="i"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="card__star">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <a
                            v-if="review.source" :href="review.source.url"
                            class="card__source-link">
                            <img
                                v-if="review.source.name === 'G2'"
                                src="../../public/g2.svg"
                                alt="G2 Review"
                                loading="lazy"
                                width="32"
                                height="32"
                                class="card__source-img"
                            />
                            <span v-else> {{ review.source.name }} </span>
                        </a>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    review: {
        title: string
        body: string[]
        author: {
            name: string
            avatar?: string
            jobTitle?: string
            company?: string
            industry?: string
            linkedin?: string
        }
        useCases?: string[]
        rating?: number
        source?: {
            name: string
            url: string
        }
    }
}>()

const isExpanded = ref(false);
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #222222;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
}

.card__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 32px;
    gap: 16px;
}

.card__quote {
    display: flex;
    justify-content: flex-end;
}

.card__quote-img {
    width: 72px;
    height: auto;
}

.card__title {
    font-size: 1.25rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
    line-height: 1.4;
}

.card__body {
    display: flex;
    flex-direction: column-reverse;
    gap: 28px;
    flex-grow: 1;
}

.card__content {
    flex: 1;
}

.card__text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}

.card__text--expanded {
    display: block;
    -webkit-line-clamp: unset;
}

.card__paragraph {
    margin: 0 0 8px 0;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.6;
    font-size: 1rem;
}

.card__read-more {
    margin-top: 12px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0;
}

.card__read-more:hover {
    color: rgba(255, 255, 255, 0.9);
}

.card__author {
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
}

.card__author-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.card__linkedin-icon {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.75);
}

.card__author-name {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.75);
}

.card__author-job {
    margin: 0;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.55);
}

.card__avatar-img {
    width: 80px;
    border-radius: 12px;
    object-fit: cover;
}

.card__avatar--desktop {
    display: none;
}

.card__avatar--mobile {
    display: block;
}

.card__footer {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 24px;
    gap: 24px;
}

.card__footer-label {
    margin: 0 0 12px 0;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
}

.card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.card__tag {
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.55);
    padding: 4px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
}

.card__footer--source {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.card__source {
    display: flex;
    align-items: center;
    gap: 24px;
}

.card__stars {
    display:flex;
}

.card__star {
    width: 14px;
    height: auto;
    color: rgba(255, 255, 255, 0.55);
}

.card__source-link {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 0.875rem;
}

@media (min-width: 640px) {
    .card {
        padding: 24px;
    }

    .card__header {
        flex-direction: row-reverse;
        align-items: flex-end;
        gap: 48px;
    }

    .card__quote {
        flex: 0 0 auto;
        width: 128px;
        align-items: flex-start;
    }

    .card__quote-img {
        width: 128px;
    }

    .card__title {
        font-size: 1.5rem;
    }

    .card__footer {
        flex-direction: row;
    }
}

@media (min-width: 768px) {
    .card__body {
        flex-direction: row;
        flex-grow: 1;
    }

    .card__author {
        margin-top: 48px;
    }

    .card__avatar--desktop {
        display: block;
    }

    .card__avatar--mobile {
        display: none;
    }

    .card__avatar-img {
        width: 160px;
        height: 160px;
    }

    .card__star {
        width: 20px;
    }
}

</style>