<template>
    <el-menu router :default-active='$router.path' background-color="#545c64">
        <template v-for="(item) in $router.options.routes" v-if="item.menuShow&&item.hasChild">
            <router-link v-if="item.children.length===1&&!item.children[0].children" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
                <el-menu-item :index="item.path+'/'+item.children[0].path">
                    <span v-if="item.children[0].meta&&item.children[0].meta.title">
                        {{item.children[0].meta.title}}
                    </span>
                </el-menu-item>
            </router-link>

            <el-submenu v-else :index="item.name||item.path" :key="item.name">
                <template slot="title">
                    <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
                </template>

                <template v-for="child in item.children" v-if="child.menuShow">
                    <sidebar-item v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path">

                    </sidebar-item>

                    <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
                        <el-menu-item :index="item.path+'/'+child.path">
                            <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
                        </el-menu-item>
                    </router-link>
                </template>

            </el-submenu>

        </template>
    </el-menu>
</template>

<script>
export default {
    name: "SidebarItem",
    props:{
        routes:{
            type:Array
        }
    }
};
</script>
