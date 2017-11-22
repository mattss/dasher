const DashButton = require('dash-button');

const DASH_BUTTON_MAC_ADDRESS = '88:71:e5:e0:a9:10';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

let subscription = button.addListener(async () => {
    console.log('ELLO');
});
