<template>
    <div>
        <div class="head-content">
            <span class="iconfont icon-fanhui"  @click="back(path)"></span>
            <span class="head-item"></span>
        </div>
        <div class="profile-photo"><img class="photos" v-if="imgpath !='' " :src="imgpath"/></div>
        <div class="profile-edit">
            <a-upload
            name="file"
            @change="handleChange"
            :action="actionpath"
            :data="data"
            >
                <a-button  style="width:290px"> <a-icon type="upload" /> 上传头像</a-button>
            </a-upload>
        </div>
    </div>
</template>
<script>
import {baseUrl,ImgUrl} from '../../ajax/index'
import {getCacheVal,setCacheVal} from '../../ajax/localStorage'
export default {
    name:"PersonData",
    data() {
        return {
            path:'',
            actionpath:baseUrl+"/api/upload",
            data:{
                userid:getCacheVal("id")
            },
            imgpath:getCacheVal("imgpath") ? getCacheVal("imgpath")  : "",
        }
    },
    methods: {
        back(path){
            this.$router.push({path:'/newmy'})
        },
        handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success(info.file.response.msg);
                this.imgpath = ImgUrl+info.file.response.data.filename
                setCacheVal("imgpath",this.imgpath)
            } else if (info.file.status === 'error') {
                this.$message.error(info.file.response.msg);
            }
        },
    }
}
</script>
<style scoped>
.head-content{
    height: 45px;
    line-height: 45px;
}
.icon-fanhui{
    float: left;
    font-size: 35px;
}
.head-item{
    font-size: 16px;
    margin-left: 20px;
}
.profile-photo{
    width: 100%;
    height: 300px;
    margin: 0px auto;
}
.photos{
   width: 100%;
   height: 100%;
}
.inputs{
    margin: 20px 0px 0px 20px;
}
.profile-edit{
    width: 90%;
    height: 35px;
    margin: 0px 15px;
    margin-top:40px;
}

</style>