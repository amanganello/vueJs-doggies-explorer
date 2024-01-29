<template>
    <div class="doggies_info_card">
        <div class="doggies_info_general">
            <div class="text_info_container">
                <div class="text_element" >
                    <label class="info_label">
                        Title and Owner
                    </label>
                    <span class="info_content">
                        Doggies Title Owner
                    </span>
                </div>
                <div class="text_element" >
                    <label class="info_label">
                        Description
                    </label>
                    <p class="info_content">
                        Doggies description lorem ipsum adfasdf 
                    </p>
                </div>
            </div>
            <img class="doggies_img" src="../assets/images/doggies_changing.gif" alt="Doggi Image">
        </div>
        <div class="doggies_info_table">
            <table>
                <tr>
                    <th>Trait</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Trait one</td>
                    <td>Value trait one</td>
                </tr>
                <tr>
                    <td>Trait two</td>
                    <td>Value trait two</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DoggiesInfo",
}
</script>

<style lang="scss" scoped>
@use '../assets/main';
.doggies_info_card {
    box-shadow: main.$primary_box_shadow;
    background: transparent;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: auto;
    padding: main.$normal_padding;
    .doggies_info_general {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-bottom: 70px;
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
                    color: main.$primary_font_color_white
                }
            }
        }
        .doggies_img {
            box-shadow: main.$primary_box_shadow;
            border-radius: 20px;
        }
    }
    .doggies_info_table {
        table {
            width: 100%;
            table-layout: fixed;
            th {
                background-color: main.$primary_green;
                color: main.$primary_font_color_white;
            }
            td, th {
                border: 1px solid main.$primary_black;
                text-align: left;
                padding: 8px;
                border-radius: 5px;
                text-align: center; 
                vertical-align: middle;
            }
            tr:nth-child(odd) {
                background-color: main.$primary_light_green;
                border-radius: 5px;
            }
            tr:nth-child(even) {
                background-color: main.$primary_white;
                border-radius: 5px;
            }
        }
    }
}
</style>