<template functional>
    <el-menu-item :index="props.item.path" class="hs-menu-item-iii">
        <i>
            <img :src="props.item.icon" class="item-icon"/>
        </i>
        {{props.item.name}}
    </el-menu-item>
</template>
<script>
export default {
    props:["item","index"]
}
</script>      