<template>
    <div class="doggies_info_table">
        <table>
        <tr tabindex="0">
            <th>Trait</th>
            <th>Value</th>
        </tr>
        <tr v-for="(attribute, index) in tokenData.attributes" :key="index" tabindex="0">
            <td>{{ attribute.trait_type }}</td>
            <td>{{ attribute.value }}</td>
        </tr>
        </table>
    </div>
</template>
  
<script>
export default {
    name: "DoggiesInfoTable",
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
.doggies_info_table {
    table {
        width: 100%;
        table-layout: fixed;
        td, th {
            border: 1px solid main.$primary_black;
            text-align: left;
            padding: 8px;
            border-radius: 5px;
        }
        th {
            background-color: main.$primary_green;
            color: main.$primary_font_color_white;
            text-align: center; 
            vertical-align: middle;
        }
        td {
            @include main.responsive(mobile) {
                font-size: 11px;
                padding: 8px 0;
            }
            @include main.responsive(small) {
                font-size: 14px;
            }
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
</style>