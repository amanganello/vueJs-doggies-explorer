<template>
    <div class="loading-card">
        <div class="loading-info">
            <div class="loading-title"></div>
            <div class="loading-description"></div>
        </div>
        <div class="loading-img loading-animation"></div>
    </div>
</template>

<script>
export default {
    name: "LoadingCard",
    props: {
        isLoading: {
            type:Boolean,
            required: true
        },
        className: {
            type: String,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/main';
.loading-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 70px;
}

.loading-info {
    padding: 20px;
    width: 70%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.loading-title,
.loading-description,
.loading-img {
    background-color: #e2e5e7;
    border-radius: 10px;
    background-image:linear-gradient(90deg,rgba(#fff, 0), rgba(#fff, 0.5),rgba(#fff, 0));
    background-size: 40px 100%; // width of the shine
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: loadingAnimation 1s ease infinite;
}

.loading-title,
.loading-description {
    height: 100px;
    margin-bottom: 30px;
}

.loading-img {
    width: 350px;
    height: 350px;
    margin-top: 20px;
    border-radius: 20px;
}

@keyframes loadingAnimation {
    to {
        background-position: right -40px top 0;
    }
}
</style>