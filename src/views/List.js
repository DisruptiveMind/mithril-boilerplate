var m = require("mithril")
var List = require("../models/List")

module.exports = {
    view: function() {
        return m(".list", List.items.map((item) => {
            return m(".item", item);
        }))
    }
};