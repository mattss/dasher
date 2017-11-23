const DashButton = require('dash-button');
var request = require('request');

const DASH_BUTTON_MAC_ADDRESS = '88:71:e5:e0:a9:10';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);

let subscription = button.addListener(async () => {
    console.log('buuttooon');
    request.post(
        'http://rey.local:8123/api/services/light/turn_off',
        { json: {
            entity_id: "light.porch"
        }}
    );
});
