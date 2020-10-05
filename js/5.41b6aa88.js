(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2ff9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"fit",attrs:{padding:!1}},[a("div",{staticClass:"row window-height"},[a("div",{staticClass:"col-3 q-pa-lg"},[a("side-navigation-bar",{attrs:{title:t.$auth.user.name,subtitle:t.$auth.user.email,icon:"face","menu-enabled":!0}},[a("template",{slot:"menu"},[a("q-list",[a("q-item",{staticClass:"q-my-sm",attrs:{clickable:""},on:{click:t.logout}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"md",name:"exit_to_app",color:"primary"}})],1),a("q-item-section",[a("q-item-label",[t._v("Logout")]),a("q-item-label",{attrs:{caption:""}},[t._v("Log out of dukt.")])],1)],1)],1)],1)],2)],1),a("div",{staticClass:"col-9 q-pa-lg"},[a("q-card",{staticStyle:{width:"50vw","max-width":"1000px"}},[a("q-card-section",[a("ol",[a("li",[a("span",{staticClass:"text-subtitle2"},[t._v("Download the commandline interface client")]),a("div",[a("p",[t._v("Before you can get started, you will need to download the CLI client for your system.")]),a("q-btn",{staticClass:"q-mb-md q-mr-lg",attrs:{type:"a",color:"primary",href:"https://github.com/duktio/dukt/releases",target:"_blank"}},[t._v("Releases")]),a("p",[t._v("\n                  Put the executable somewhere in your path:\n                ")]),a("q-tabs",{attrs:{dense:"",ripple:!1},model:{value:t.os,callback:function(e){t.os=e},expression:"os"}},[a("q-tab",{attrs:{name:"linux",label:"Linux"}}),a("q-tab",{attrs:{name:"macos",label:"Mac OS"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.os,callback:function(e){t.os=e},expression:"os"}},[a("q-tab-panel",{attrs:{name:"linux"}},[a("pre",[t._v("mv ./dcli-linux-amd64 /usr/local/bin/")])]),a("q-tab-panel",{attrs:{name:"macos"}},[a("pre",[t._v("mv ./dcli-macos-amd64 /usr/local/bin/")])])],1)],1)]),a("li",[a("span",{staticClass:"text-subtitle2"},[t._v("Download the credentials file")]),a("div",[a("p",[t._v("The credentials file contains the information needed for the client to identify itself")]),a("q-btn",{staticClass:"q-mb-md",attrs:{color:"primary"},on:{click:t.onCredsDownload}},[t._v("Download Credentials File")]),a("p",[t._v("\n                  Move the credentials file to your home directory:\n                ")]),a("pre",[t._v("mkdir ~/.dukt && mv ./cli.creds ~/.dukt/cli.creds")])],1)]),a("li",[a("span",{staticClass:"text-subtitle2"},[t._v("Run the client")]),a("div",[a("p",[t._v("The client will pick up the credentials file from ~/.dukt/cli.creds")]),a("pre",[t._v("dcli me")])])])])])],1)],1)])])},i=[],n=a("ded3"),l=a.n(n),o=a("2f62"),c=a("df45"),r=a("a357"),d={name:"profile",components:{SideNavigationBar:c["a"]},data:()=>({tab:"namespaces",os:"linux"}),methods:{login(){this.$auth.loginWithRedirect()},logout(){this.$auth.logout({returnTo:window.location.origin})},onCredsDownload(){const t=this.me.token.creds;Object(r["a"])("cli.creds",window.atob(t))}},computed:l()({},Object(o["c"])("auth",["me"])),mounted(){this.$auth.getTokenSilently().then((t=>{this.token=t}))},preFetch({store:t}){return t.dispatch("auth/getMe")}},m=d,u=a("2877"),b=a("9989"),p=a("1c1c"),h=a("66e5"),q=a("4074"),v=a("0016"),f=a("0170"),_=a("f09f"),g=a("a370"),w=a("9c40"),C=a("429b"),x=a("7460"),Q=a("eb85"),k=a("adad"),y=a("823b"),$=a("eebe"),S=a.n($),I=Object(u["a"])(m,s,i,!1,null,null,null);e["default"]=I.exports;S()(I,"components",{QPage:b["a"],QList:p["a"],QItem:h["a"],QItemSection:q["a"],QIcon:v["a"],QItemLabel:f["a"],QCard:_["a"],QCardSection:g["a"],QBtn:w["a"],QTabs:C["a"],QTab:x["a"],QSeparator:Q["a"],QTabPanels:k["a"],QTabPanel:y["a"]})},"495c":function(t,e,a){},b6f2:function(t,e,a){"use strict";var s=a("495c"),i=a.n(s);i.a},df45:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-card",[a("q-card-section",{staticClass:"bg-primary text-white"},[a("q-item",{staticClass:"bg-primary text-white",attrs:{dark:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"lg",name:t.icon}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.title))]),a("q-item-label",{staticClass:"text-subtitle2"},[t._v(t._s(t.subtitle))])],1),t.menuEnabled?a("q-item-section",{attrs:{side:""}},[a("q-btn",{attrs:{color:"white",flat:"",icon:"more_vert"}},[a("q-menu",{attrs:{"auto-close":"","max-width":"300px"}},[t._t("menu")],2)],1)],1):t._e()],1)],1),t.contentEnabled?a("q-separator"):t._e(),t.contentEnabled?a("q-card-actions",{attrs:{align:"right"}},[t._t("default")],2):t._e()],1),t.title!==t.$auth.user.name?a("q-card",{staticClass:"q-mt-lg",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("q-item",{staticClass:"text-grey-5",attrs:{dark:"",clickable:"",to:"/me"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"lg",name:"face"}})],1),a("q-item-section",[a("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.$auth.user.name))]),a("q-item-label",{staticClass:"text-subtitle2"},[t._v(t._s(t.$auth.user.email))])],1)],1)],1)],1):t._e()],1)])},i=[],n=a("ded3"),l=a.n(n),o=a("2f62"),c={name:"SideNavigationBar",components:{},props:["icon","title","subtitle","contentEnabled","menuEnabled"],data(){return{}},computed:l()({},Object(o["c"])("namespaces",["namespaces"])),methods:{loadNamespaces(){return this.$store.dispatch("namespaces/getNamespaces")},logout(){this.$auth.logout({returnTo:"/"})}}},r=c,d=(a("b6f2"),a("2877")),m=a("f09f"),u=a("a370"),b=a("66e5"),p=a("4074"),h=a("0016"),q=a("0170"),v=a("9c40"),f=a("4e73"),_=a("eb85"),g=a("4b7e"),w=a("ead5"),C=a("eebe"),x=a.n(C),Q=Object(d["a"])(r,s,i,!1,null,null,null);e["a"]=Q.exports;x()(Q,"components",{QCard:m["a"],QCardSection:u["a"],QItem:b["a"],QItemSection:p["a"],QIcon:h["a"],QItemLabel:q["a"],QBtn:v["a"],QMenu:f["a"],QSeparator:_["a"],QCardActions:g["a"],QBreadcrumbs:w["a"]})}}]);