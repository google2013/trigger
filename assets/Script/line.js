cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        // this.node.color = new cc.Color(255, 0, 0);
        // this.init();
    },

    onEnable: function () {
        this.init();
    },
    
    init: function () {
        this.justHide();
    },

    setColorRed: function () {
        this.node.color = new cc.Color(255, 0, 0);
    },

    setColorBlue: function () {
        this.node.color = new cc.Color(0, 0, 255);
    },

    justShow: function () {
        this.node.setScale(1, 1);
    },

    justHide: function () {
        this.node.setScale(0, 1);
    },

    animShow: function () {
        this.node.setScale(0, 1);
        this.node.runAction(cc.scaleTo(2, 1));
    },

    animHide: function () {
        this.node.setScale(1, 1);
        this.node.runAction(cc.scaleTo(2, 0, 1));
    },





    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
