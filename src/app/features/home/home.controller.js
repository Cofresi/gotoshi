export default class HomeController {
    constructor(game, wallet, $sce, $location, $window) {
        this.isNavCollapsed = true;
        this.wallet = wallet;
        this.name = this.wallet.getLatestAddress();
        this.$location = $location;
        this.$window = $window;

        this.htmlAddress = $sce.trustAsHtml('<div class="input-group input-group-sm">' +
            '<input class="form-control" readonly value="'+this.wallet.getLatestAddress()+'"/>' +
            '</div><img width=\'168\' height=\'168\' src=\'https://blockchain.info/qr?data='+this.wallet.getLatestAddress()+'&amp;size=168\'>');
    }

    gotoURL(url) {
        this.$window.location.href = url;
    }

    isActive(viewLocation) {
        return this.$location.path().indexOf(viewLocation) == 0;
    }
}

HomeController.$inject = ['game', 'wallet', '$sce', '$location', '$window'];