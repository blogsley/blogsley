(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"013f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("q-input",{attrs:{autocomplete:"username",type:"username",label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("q-input",{attrs:{autocomplete:"current-password",type:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-btn",{attrs:{flat:"",color:"primary",type:"submit",label:"Submit"}})],1)])},n=[],r=a("1b62"),o={name:"LoginPage",mixins:[r["b"],r["a"],r["c"]],data:function(){return{title:"Login",username:"",password:""}},methods:{handleSubmit:function(){var e=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then((function(){e.$router.push("/")}))}}},u=o,i=a("2be6"),l=Object(i["a"])(u,s,n,!1,null,null,null);t["default"]=l.exports}}]);