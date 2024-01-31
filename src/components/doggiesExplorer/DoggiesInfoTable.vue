<template>
    <div class="doggies_info_table">
        <table>
        <tr>
            <th>Trait</th>
            <th>Value</th>
        </tr>
        <tr v-for="(attribute, index) in tokenData.attributes" :key="index">
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
    tokenData: Object,
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