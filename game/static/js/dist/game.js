class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            ����ģʽ
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            ����ģʽ
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            ����
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        this.$settings.click(function(){
            console.log("click settings");
        });
    }

    show() {  // ��ʾmenu����
        this.$menu.show();
    }

    hide() {  // �ر�menu����
        this.$menu.hide();
    }
}
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
}class AcGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.play = new AcGamePlay(this);

        this.start();
    }

    start() {
    }
}