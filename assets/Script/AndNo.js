cc.Class({
    extends: cc.Component,

    properties: {
        lines: [require('line')],
        tableNodes: [cc.Node],
    },

    // use this for initialization
    onLoad: function () {
    },

    onEnable: function () {
        this.clearLines();
        this.tableNodes.forEach((node)=>{
            node.color = new cc.Color(255, 255, 255);
        });
    },

    onDisable: function () {
        this.unscheduleAllCallbacks();
        this.isShowing = null;
    },

    clearLines: function () {
        this.lines.forEach((line)=>{
            line.justHide();
        });
    },

    drawLine: function (startTime, lineId, color) {
        this.scheduleOnce(()=>{
            if (color == 1) {
                this.lines[lineId].setColorRed();
            }
            else {
                this.lines[lineId].setColorBlue();
            }
            this.lines[lineId].animShow();
        }, startTime);
    },

    showLine: function (lineId, color) {
        if (color == 1) {
            this.lines[lineId].setColorRed();
        }
        else {
            this.lines[lineId].setColorBlue();
        }
        this.lines[lineId].justShow();
    },

    showState: function (S, R, Q) {
        if (this.isShowing == true) {
            return;
        }
        this.isShowing = true;
        this.clearLines();
        if (S == 0 && R == 1) {
            this.drawLine(0, 0, 0);
            this.drawLine(0, 6, 1);
            this.drawLine(2, 1, 1);
            this.drawLine(5, 2, 1);
            this.drawLine(7, 3, 1);
            this.drawLine(9, 4, 1);
            this.drawLine(11, 5, 1);
            this.drawLine(15, 7, 0);
            this.drawLine(16, 8, 0);
            this.drawLine(18, 9, 0);
            this.drawLine(20, 10, 0);
            this.drawLine(22, 11, 0);
            this.scheduleOnce(()=>{
                this.isShowing = null;
            }, 24);
        }
        else if (S == 1 && R == 0) {
            this.drawLine(0, 0, 1);
            this.drawLine(0, 6, 0);
            this.drawLine(4, 7, 1);
            this.drawLine(5, 8, 1);
            this.drawLine(7, 9, 1);
            this.drawLine(9, 10, 1);
            this.drawLine(11, 11, 1);
            this.drawLine(15, 1, 0);
            this.drawLine(16, 2, 0);
            this.drawLine(18, 3, 0);
            this.drawLine(20, 4, 0);
            this.drawLine(22, 5, 0);
            this.scheduleOnce(()=>{
                this.isShowing = null;
            }, 24);
        }
        else if (S == 0 && R == 0) {
            this.drawLine(0, 0, 0);
            this.drawLine(0, 6, 0);
            this.drawLine(4, 1, 1);
            this.drawLine(4, 7, 1);
            this.drawLine(5, 2, 1);
            this.drawLine(5, 8, 1);
            this.drawLine(7, 3, 1);
            this.drawLine(7, 9, 1);
            this.drawLine(9, 4, 1);
            this.drawLine(9, 10, 1);
            this.drawLine(11, 5, 1);
            this.drawLine(11, 11, 1);
            this.scheduleOnce(()=>{
                this.isShowing = null;
            }, 13);
        }
        else if (S == 1 && R == 1) {
            if (Q == 1) {   // Q == 1
                this.scheduleOnce(()=>{
                    [0, 6, 1, 2, 3, 4, 5].forEach((lineId)=>{
                        this.showLine(lineId, 1);
                    });
                    [7, 8, 9, 10, 11].forEach((lineId)=>{
                        this.showLine(lineId, 0);
                    });
                }, 0);
            }
            else {          // Q == 0
                this.scheduleOnce(()=>{
                    [0, 6, 7, 8, 9, 10, 11].forEach((lineId)=>{
                        this.showLine(lineId, 1);
                    });
                    [1, 2, 3, 4, 5].forEach((lineId)=>{
                        this.showLine(lineId, 0);
                    });
                }, 0);
            }
            this.scheduleOnce(()=>{
                this.isShowing = null;
            }, 1);
        }
    },

    _onClick: function (id) {
        if (this.isShowing == true) {
            return;
        }
        for (var i = 0; i < 8; i ++) {
            if (i == id) {
                this.tableNodes[i].color = new cc.Color(0, 255, 0);
            }
            else {
                this.tableNodes[i].color = new cc.Color(255, 255, 255);
            }
        }
        if (id == 0 || id == 1) {
            this.showState(1, 0);
        }
        else if (id == 2 || id == 3) {
            this.showState(0, 1);
        }
        else if (id == 4) {
            this.showState(1, 1, 0);
        }
        else if (id == 5) {
            this.showState(1, 1, 1);
        }
        else if (id == 6 || id == 7) {
            this.showState(0, 0);
        }
    },

    onClick_0: function () {
        this._onClick(0);
    },
    onClick_1: function () {
        this._onClick(1);
    },
    onClick_2: function () {
        this._onClick(2);
    },
    onClick_3: function () {
        this._onClick(3);
    },
    onClick_4: function () {
        this._onClick(4);
    },
    onClick_5: function () {
        this._onClick(5);
    },
    onClick_6: function () {
        this._onClick(6);
    },
    onClick_7: function () {
        this._onClick(7);
    },

    onClickBack: function () {
        if (this.isShowing == true) {
            return;
        }
        this.node.active = false;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
