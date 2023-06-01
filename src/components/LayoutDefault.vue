<template>
    <main>
        <div class="app-bar">
            <img src="../../public/localweb.png" alt="Logo LocalWeb" />
        </div>
        <div class="conteudo">
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </main>
</template>
<script>
export default {

    data() {
        return {
            title: 'LocalWeb'
        }
    }
}
</script>
<style>
main {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.app-bar {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100vw;
    height: 70px;
    padding: 5px 10px;
    background-color: #ddd;
}

.app-bar img {
    max-height: 60%;
}

.conteudo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>