require("./styles/index.scss");
var m = require("mithril")

document.title = "Mithril App!";

var List = require("./views/List")
// var UserForm = require("./views/UserForm")
var Layout = require("./views/Layout")

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(List))
        }
    },
    // "/edit/:id": {
    //     render: function(vnode) {
    //         return m(Layout, m(UserForm, vnode.attrs))
    //     }
    // },
})