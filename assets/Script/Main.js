cc.Class({
    extends: cc.Component,

    properties: {
        andNo: cc.Node,
        orNo: cc.Node,
    },

    // use this for initialization
    onLoad: function () {

    },

    onClickAndNo: function () {
        this.andNo.active = true;
        // this.orNo.active = false;
    },

    onClickOrNo: function () {
        this.orNo.active = true;
        // this.andNo.active = false;
    },

    onClickClose: function () {
        this.andNo.active = this.orNo.active = false;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
