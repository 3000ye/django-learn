class AcGamePlay {
    constructor(root) {
        this.root = root;
        this.$play = $(`<div>��Ϸ����</div>`);

        this.hide();
        this.root.$ac_game.append(this.$play);

        this.start();
    }

    start() {
    }

    show() {  // ��playground����
        this.$play.show();
    }

    hide() {  // �ر�playground����
        this.$play.hide();
    }
}