<template>
    <div>
        <el-button @click="visible = true">Button</el-button>
        <el-dialog v-model="visible" title="Hello World">
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                visible: false
            }
        }
    }
</script>
