<template>
    <div class="doggies_info_general">
            <div class="text_info_container">
                <div class="text_element" >
                    <span class="info_label" tabindex="0">
                        Title and Owner
                    </span>
                    <p class="info_content" tabindex="0" data-testid="token_name_owner">
                        <span>{{ tokenData.name }}</span><br> <br><span>{{ tokenData.ownerOf }}</span>
                    </p>
                </div>
                <div class="text_element" >
                    <span class="info_label" tabindex="0">
                        Description
                    </span>
                    <p class="info_content" tabindex="0" data-testid="token_description">
                        {{ tokenData.description }} 
                    </p>
                </div>
            </div>
            <img class="doggies_img" :src="tokenData.image_url" :alt="`${tokenData.name} Image`" tabindex="0">
        </div>
</template>

<script>
export default {
    name: "DoggiesGralInfo",
    props: {
        tokenData: {
                type:Object,
                required: true
            },
    },
};
</script>

<style scoped lang="scss">
@use '../../assets/main';

.doggies_info_general {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: main.$large_padding_margin;
    gap: main.$element_gap_normal;
    @include main.responsive(mobile) {
        gap: main.$element_gap_small;
        margin-bottom: main.$normal_padding_margin;
        flex-direction: column;
        align-items: center;
    }
    @include main.responsive(small) {
        gap: main.$element_gap_small;
        margin-bottom: main.$normal_padding_margin;
        flex-direction: column;
        align-items: center;
    }

    .text_info_container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 60%;
        @include main.responsive(mobile) {
            align-items: flex-start;
            max-width: 100%;
        }
        @include main.responsive(small) {
            align-items: flex-start;
            max-width: 80%;
        }
        .text_element{
            display: flex;
            flex-direction: column;
            width: 100%;
            .info_label {
                font-size: 24px;
                margin-bottom: 10px;
                @include main.responsive(mobile) {
                    font-size: 20px;
                }
            }
            .info_content {
                font-weight: 200;
                color: main.$primary_font_color_white;
                white-space: pre-wrap;
                margin-block-start: 1em;
                margin-block-end: 1em;
                word-wrap: break-word;
                @include main.responsive(mobile) { 
                    font-size: 14px;
                }
                @include main.responsive(small) { 
                    font-size: 14px;
                }

            }
        }
    }
    .doggies_img {
        box-shadow: main.$primary_box_shadow;
        border-radius: 20px;
        width: 320px;
        height: 320px;
        @include main.responsive(mobile) {
            width: 220px;
            height: 220px;
        }
        @include main.responsive(medium) {
            width: 300px;
            height: 300px;
        }
    }
}
</style>