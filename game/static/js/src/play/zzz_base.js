class AcGamePlay {
    constructor(root) {
        this.root = root;
        this.$play = $(`<div>游戏界面</div>`);

        this.hide();
        this.root.$ac_game.append(this.$play);

        this.start();
    }

    start() {
    }

    show() {  // 打开playground界面
        this.$play.show();
    }

    hide() {  // 关闭playground界面
        this.$play.hide();
    }
}