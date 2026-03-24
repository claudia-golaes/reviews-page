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