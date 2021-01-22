<template>
    <div>
        <div class="register-top"><i class="iconfont icon-fanhui" @click="RegisterClick(path)"></i></div>
        <div class="register-content">
            <div class="register-title">注册一个账号</div>
            <p class="register-title-item">是否已有账户?<a href="http://localhost:8080/#/login" class="register-item">登录</a></p>
        </div>
        <div class="register-info">
            <form class="user-info" ref="formregister" > 
                <label for="username" class="user-info-mark"><span class="mark">*</span>用户昵称</label><br>
                <input type="text" placeholder="请输入您的用户昵称" name="name" class="user-info-item" v-model="name" @blur="UserRule(name)" />
                <span ref="snames" class="promt-info"></span>
                <br>
                <label for="id" class="user-info-mark"><span class="mark">*</span>邮箱</label><br>
                <input type="text" placeholder="请输入您的邮箱" name="id" class="user-info-item" v-model="id" @blur="IdRule(id)"/>
                <span ref="sphone" class="promt-info"></span>
                <br>
                <label for="pwd" class="user-info-mark"><span class="mark">*</span>密码</label><br>
                <input type="password" placeholder="请输入您的密码" name="pwd" class="user-info-item"  v-model="pwd" @blur="PswRule(pwd)"/>
                <span ref="spsw" class="promt-info"></span>
                <br>
                <label for="repassword" class="user-info-mark"><span class="mark">*</span>确认密码</label><br>
                <input type="password" placeholder="请再次输入密码" name="repassword" class="user-info-item" v-model="psws" @blur="PswsRule(psws)"/>
                <span ref="spsws" class="promt-info"></span>
                <br>
                <input type="button" value="注册" class="user-info-items" id="register" @click="SuccessRegister()"/>
            </form>
        </div>
    </div>
</template>
<script>
import {Http} from '../../ajax'
export default {
    name:"Register",
    data() {
        return {
            name:'',
            id:'',
            psws:'',
            pwd:'',  
        }
    },
    methods: {
        RegisterClick(path){
            this.$router.go('/my')
        },
        UserRule(name){
            var reg2=/[0-9A-z_]{8,16}/
            if(this.name==""){
                 this.$refs.snames.innerHTML="用户昵称不能为空"
                 return false
            }else if(!reg2.test(this.names)){
                this.$refs.snames.innerHTML="输入任意字符数字下划线"
                return false
            }else{
                this.$refs.snames.innerHTML=""
                return true
            }
        },
        IdRule(id){
            var reg=/\w+@[a-z0-9]+\.[a-z]{2,4}/
            if(this.id==""){
                 this.$refs.sphone.innerHTML="请输入邮箱"
                 return false
            }else if(!reg.test(this.id)){
                this.$refs.sphone.innerHTML="请输入正确邮箱"
                return false
            }else{
                this.$refs.sphone.innerHTML=""
                return true
            }
        },
        PswRule(pwd){
            var reg1=/[0-9A-z_]{8,16}$/
            if(this.pwd==""){
                 this.$refs.spsw.innerHTML="请输入密码"
                 return false
            }else if(!reg1.test(this.psw)){
                this.$refs.spsw.innerHTML="请输入由字母数字下划线组成的8-16位密码"
                return false
            }else{
                this.$refs.spsw.innerHTML=""
                return true
            }
        },
        PswsRule(psws){
            if(this.psws==""){
                 this.$refs.spsws.innerHTML="请再次输入密码"
                 return false
            }else if(this.psws!= this.pwd){
                this.$refs.spsws.innerHTML="确认密码与原密码不一致"
                return false
            }else{
                this.$refs.spsws.innerHTML=""
                var register=document.getElementById("register")
                register.style.opacity=1
                return true
            }
        },
        login(){
            this.$router.replace({path:"/login"})
        },
        async SuccessRegister(){
            var name=this.UserRule()
            var id=this.IdRule()
            var pwd=this.PswRule()
            var pasws= this.PswsRule()
            if(name && id && pwd && pasws){
                let p = {
                    id:this.id,
                    name:this.name,
                    pwd:this.pwd,
                }
                let res = await Http('/register',p)
                console.log(p)
                 try {
                    if(res.code ===1){
                        this.$message.success({content:res.msg,duration:2 });
                        this.login()
                    }else{
                         this.$message.error({ content:res.msg,duration:2 });
                    }
                } catch (e) {
                    console.log(e)
                    this.$message.error({ content:e,duration: 2 });
                }  
            }

        }
    }
    
}
</script>
<style scoped>
/* .register-top{
    border-bottom: 1px solid gainsboro;
    height: 35px;
    margin: 0px 10px;
}
.register-top .iconfont{
    font-size: 25px;
}
.register-content{
    margin: 0px 15px;
}
.register-title{
    font-size:20px;
    font-weight: bold;
    margin-top: 10px;
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
    margin: 60px 20px;
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
    color: rgb(0 0 0/0.5);
}
.user-info-items{
    margin: 0px 18px;
    border-radius: 5px;
    height: 40px;
    width: 85%;
    border-color: rgb(0 0 0/0.1);
    background-color: white;
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