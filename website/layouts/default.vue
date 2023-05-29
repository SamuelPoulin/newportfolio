<template>
    <div id="page-container">
        <header>
            <slot name="header">
                <Header />
            </slot>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <slot name="footer">
            <Footer />
            </slot>
        </footer>
    </div>
</template>

<style>
#page-container {
    display: flex;
    flex-direction: column;

    padding: 0px 50px;
    max-width: 100vw;

}
</style>

<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';
</script>