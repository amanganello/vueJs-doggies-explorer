<template>
    <div class="doggies_info_general">
            <div class="text_info_container">
                <div class="text_element" >
                    <label class="info_label" tabindex="0">
                        Title and Owner
                    </label>
                    <p class="info_content" tabindex="0">
                        {{ tokenData.name }}<br>{{ tokenData.ownerOf }}
                    </p>
                </div>
                <div class="text_element" >
                    <label class="info_label" tabindex="0">
                        Description
                    </label>
                    <p class="info_content" tabindex="0">
                        {{ tokenData.description }} 
                    </p>
                </div>
            </div>
            <img class="doggies_img" :src="tokenData.image_url" alt="Doggi Image" tabindex="0">
        </div>
</template>

<script>
export default {
  name: "DoggiesGralInfo",
  props: {
    tokenData: Object,
  },
};
</script>

<style scoped lang="scss">
@use '../../assets/main';

.doggies_info_general {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 70px;
    gap: 30px;
    .text_info_container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .text_element{
            display: flex;
            flex-direction: column;
            .info_label {
                font-size: 1.5em;
                margin-bottom: 10px;
            }
            .info_content {
                font-weight: 200;
                color: main.$primary_font_color_white;
                white-space: pre-wrap;
                margin-block-start: 1em;
                margin-block-end: 1em;
            }
        }
    }
    .doggies_img {
        box-shadow: main.$primary_box_shadow;
        border-radius: 20px;
        width: 350px;
        height: 350px;
    }
}
</style>