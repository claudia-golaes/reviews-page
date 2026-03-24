<template>
    <section class="reviews">
        <div class="reviews__container">
            <div class="reviews__toolbar">
                <div class="filter-group">
                    <button 
                        class="filter-btn"
                        @click="toggleFilters">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="filter-btn__icon">
                            <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clip-rule="evenodd"/>
                        </svg>
                        Filters
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const filtersOpen = ref(false)

function toggleFilters() {
    filtersOpen.value = !filtersOpen.value
}

</script>

<style scoped>
.reviews {
    background-color: #0f1117;
    padding: 40px 24px;
}

.reviews__container {
    max-width: 80rem;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

.filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    justify-content: center;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.875rem;
    font-weight: 600;
}

.filter-btn:hover{
    background: rgba(255, 255, 255, 0.05);
}

.filter-btn__icon {
    width: 20px;
    height: 20px;
}
</style>

