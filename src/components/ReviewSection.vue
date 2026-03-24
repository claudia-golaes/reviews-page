<template>
    <section class="reviews">
        <div class="reviews__container">
            <div class="reviews__toolbar">
                <div class="filter-group">
                    <button 
                        class="filter-btn"
                        :class="{'filter-btn--active' : filtersOpen}"
                        @click="toggleFilters">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="filter-btn__icon">
                            <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z" clip-rule="evenodd"/>
                        </svg>
                        Filters
                    </button>
                </div>
            </div>
            <div class="filters" :class="{'filters--open' : filtersOpen}">
                <div class="filters__group">
                    <label class="filters__label">Use case</label>
                    <div class="dropdown" :class="{ 'dropdown--open' : useCaseOpen}">
                        <button 
                            class="dropdown__btn"
                            @click="useCaseOpen = !useCaseOpen">
                            <span>{{ selectedUseCase }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dropdown__arrow">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <ul class="dropdown__list">
                            <li 
                                v-for="option in useCaseOptions" 
                                :key="option" 
                                class="dropdown__item"
                                :class="{ 'dropdown__item--selected' : selectedUseCase === option }"
                                @click="selectUseCase(option)">
                                {{ option }}
                                <svg v-if="selectedUseCase == option"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dropdown__check">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10a.75.75 0 0 1-1.127.075l-4-4a.75.75 0 1 1 1.06-1.06L8.32 13.476l7.684-9a.75.75 0 0 1 1.052-.143Z" clip-rule="evenodd" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filters__group">
                    <label class="filters__label">Industry</label>
                    <div class="dropdown" :class="{ 'dropdown--open' : industryOpen}">
                        <button 
                            class="dropdown__btn"
                            @click="industryOpen = !industryOpen">
                            <span>{{ selectedIndustry }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dropdown__arrow">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <ul class="dropdown__list">
                            <li 
                                v-for="option in industryOptions" 
                                :key="option" 
                                class="dropdown__item"
                                :class="{ 'dropdown__item--selected' : selectedIndustry === option }"
                                @click="selectIndustry(option)">
                                {{ option }}
                                <svg v-if="selectedIndustry == option"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="dropdown__check">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10a.75.75 0 0 1-1.127.075l-4-4a.75.75 0 1 1 1.06-1.06L8.32 13.476l7.684-9a.75.75 0 0 1 1.052-.143Z" clip-rule="evenodd" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filtersOpen = ref(false)
const industryOpen = ref(false)
const useCaseOpen = ref(false)

const selectedIndustry = ref('All')
const selectedUseCase = ref('All')

function toggleFilters() {
    filtersOpen.value = !filtersOpen.value
}

const useCaseOptions = [
    'All',
    'Vulnerability scanning',
    'Exploitation',
    'Internal scanning',
    'Security monitoring',
    'Automation',
    'Pentest reporting',
    'Security auditing',
    'Vulnerability management'
]

const industryOptions = [
    'All',
    'IT & Services',
    'Telecom',
    'Cybersecurity',
    'Consulting',
    'Critical Infrastructure',
    'Beauty',
    'Healthcare',
    'Education',
    'Financial Services',
    'Government',
    'Manufacturing',
    'Consumer Goods',
    'Miscellaneous'
]

function selectIndustry(industry: string) {
    selectedIndustry.value = industry
    industryOpen.value = false
}

function selectUseCase(useCase: string) {
    selectedUseCase.value = useCase
    useCaseOpen.value = false
}

</script>

<style scoped>
.reviews {
    background-color: #171717;
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

.filter-btn--active{
    background: #4192f4;
    color: rgba(255, 255, 255, 0.9);
}

.filters {
    display: none;
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    gap: 12px;
    flex-direction: column;
}

.filters--open {
    display: flex;
}

.filters__label{
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.55);
    margin-top: 4px;
    margin-bottom: 4px;
}

.dropdown {
    position: relative;
}

.dropdown__btn {
    display: inline-flex;
    width: 100%;
    align-items: center;
    padding: 10px 16px;
    font-size: 0.875rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    background: #242629;
}

.dropdown__btn:hover{
    outline: 1px solid rgba(255, 255, 255, 0.8);
}

.dropdown__arrow{
    width: 16px;
    height: 16px;
    margin-left: auto;
    color: rgba(255, 255, 255, 0.55);
    flex-shrink: 0;
}

.dropdown__list{
    display: none;
    z-index: 10;
    margin-top: 8px;
    background: #242729;
    border-radius: 6px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
    max-height: 320px;
    overflow-y: auto;
    list-style: none;
    padding: 0;
}

.dropdown--open .dropdown__list{
    display: flex;
    flex-direction: column;
}

.dropdown__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.55);
    cursor: pointer;
}

.dropdown__item:hover {
    background: #404040;
}

.dropdown__check{
    width: 16px;
    height: 16px;
    color: #fa8072;
    flex-shrink: 0;
}

.filter-group{
    display: inline-flex;
    align-items: stretch;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.dropdown__item--selected {
  background: #404040;
}

@media (min-width: 640px) {
    .filters{
        display: none;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .filters--open {
        display: flex;
    }

    .filters__group {
        width: 256px;
    }
}

</style>

