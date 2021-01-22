<template>
    <div id="Loginpage">
       <div id="Loginpages">
        <div class="register-top"><i class="iconfont icon-fanhui" @click="LoginClick(path)"></i></div>
        <div class="register-content">
            <div class="register-title">登录账号</div>
            <p class="register-title-item">是否已有账户?<a href="http://localhost:8080/#/register" class="register-item">注册</a></p>
        </div>
        <div class="register-info">
            <form class="user-info" ref="formlogin">
                <label for="id" class="user-info-mark"><span class="mark">*</span>用户名</label><br>
                <input type="text" placeholder="请输入您的邮箱" name="id" class="user-info-item" v-model="id" @blur="UserRule(id)"/>
                <span ref="sphone" class="promt-info"></span>
                <br>
                <label for="password" class="user-info-mark"><span class="mark">*</span>密码</label><br>
                <input type="password" placeholder="请输入您的密码" name="pwd" class="user-info-item"  v-model="pwd" @blur="PswRule(pwd)"/>
                <span ref="spsw" class="promt-info"></span>
                <br>
                <input type="button" value="登录" class="user-info-items" @click="SuccessLogin()" id="btnR"/>
            </form>
        </div>
       </div>
    </div>
</template>
<script>
import {Http,ImgUrl} from '../../ajax/index'
import {setCacheVal} from '../../ajax/localStorage'

export default {
    name:"Login",
    data() {
        return {
            names:'',
            id:'',
            pwd:'',
            path:'',
            disabled:true,
        }
    },
    methods: {
        LoginClick(path){
            this.$router.push('/my')
        },
        UserRule(id){
            var reg2=/\w+@[a-z0-9]+\.[a-z]{2,4}/
            if(this.id==""){
                 this.$refs.sphone.innerHTML="请输入邮箱"
                 return false
            }else if(!reg2.test(this.id)){
                this.$refs.sphone.innerHTML="请输入正确邮箱"
                return false
            }else{
                this.$refs.sphone.innerHTML=""
                return true
                
            }
        },
        PswRule(pwd){
            var reg1=/[0-9A-z_]{6,10}$/
            if(this.pwd==""){
                 this.$refs.spsw.innerHTML="请输入密码"
                 return false
            }else if(!reg1.test(this.pwd)){
                this.$refs.spsw.innerHTML="请输入由字母数字下划线组成的8-16位密码"
                return false
            }else{
                this.$refs.spsw.innerHTML=""
                var btnR=document.getElementById("btnR")
                btnR.style.opacity=1
                return true
            }
        },
        
        async SuccessLogin(){
            var id=this.UserRule()
            var pwd=this.PswRule()
            if( id && pwd ){
                let p = {
                    id:this.id,
                    pwd:this.pwd
                }
                let res = await Http('/login',p)
                try {
                    if (res.code === 1) {
                        setCacheVal("token",res.data.token)
                        setCacheVal("id",res.data.userid)
                        setCacheVal("name",res.data.username)
                        setCacheVal("imgpath",ImgUrl+res.data.imgpath)
                        this.$message.success({content:res.msg,duration:2})
                        this.$router.replace({path:"/newmy"})
                    } else {
                        this.$message.error({content:res.msg,duration:2})
                    }
                } catch (e) {
                    this.$message.error({content:res.msg,duration:2})
                }
            }else{
                return false
            }

        }
    }
    
}
</script>
<style scoped>
/* #Loginpages{
    background-image:-webkit-cross-fade(url("../../assets/img/Airbnb3.jpg"),url("../../assets/img/Airbnb.gif"),50%);
    background-repeat: no-repeat;
    background-position-x: -180px;
    background-position-y: 75px;
    height: 700px;
}
#Loginpages{
    background-color: #f8f6f1;
}
.register-top{
    border-bottom: 1px solid gainsboro;
    height: 40px;
    margin: 0px 10px;
}
.register-top .iconfont{
    font-size: 25px;
    line-height: 40px;
}
.register-content{
    margin: 0px 15px;
}
.register-title{
    font-size:20px;
    font-weight: bold;
    margin-top: 30px;
    color: rgb(0 0 0/0.8);
}
.register-title-item{
    font-size: 14px;
    font-weight: bold;
    color: #5f5f5f;
    margin-top: 10px;
}
.register-item{
    color:#008489;
    padding-left: 35px;
}
.register-info{
    margin: 100px 20px;
}
.user-info-item{
    margin: 0px 15px;
    border-radius: 5px;
    height: 30px;
    width: 85%;
    border-color: rgb(0 0 0/0.1);
}
.mark{
    color:red;
}
.user-info-mark{
    font-size: 14px;
    color: rgb(0 0 0/0.8);
}
.user-info-items{
    margin: 0px 18px;
    border-radius: 5px;
    height: 40px;
    width: 84%;
    border-color: rgb(0 0 0/0.1);
    color: white;
    background-color: #008489;
    opacity: 0.5;
}
.promt-info{
    font-size: 12px;
    color: rgb(255 0 0/0.5);
    padding: 15px;
    margin: 0px;
} */
</style>