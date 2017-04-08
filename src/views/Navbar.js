var m = require("mithril");

function NavBar(ctrl) {
    var isToggled = false;

    var items = [
        { title: "Home" },
        { title: "About" }
    ]

    function oninit() {
        
    }

    function toggleNav() {
        isToggled = !isToggled;
    }

    function navItems() {
        return m(".nav-right.nav-menu",
            { class: isToggled ? 'is-active' : '' },
            items.map((item) => {
                return m("a.nav-item", item.title);
            }
        ));
    }

    function view() {
        return m(".nav", [
            m(".nav-left", [
                m("a.nav-item", [
                    m("img", {src: "http://bulma.io/images/bulma-logo.png", alt: "Bulma logo"}),
                ])
            ]),
            navItems(),
            m("span.nav-toggle", 
                { onclick: toggleNav },
                [
                    [1,2,3].map(() => { return m("span")})
                ]
            ),
        ]);
    }

    return {
        oninit: oninit,
        view: view
    }
}

module.exports = NavBar