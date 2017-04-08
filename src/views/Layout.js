var     m = require("mithril")
    ,   Navbar = require("./Navbar")
    ;

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m(Navbar),
            m("nav.menu", [
                m("a[href='/list']", {oncreate: m.route.link}, "List")
            ]),
            m("section", vnode.children)
        ])
    }
}