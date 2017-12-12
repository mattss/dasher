const DashButton = require('dash-button');
var request = require('request');

const DASH_BUTTON_MAC_ADDRESS = '88:71:e5:e0:a9:10';
const DASH2_BUTTON_MAC_ADDRESS = '50:f5:da:c8:83:d8';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);
let button2 = new DashButton(DASH2_BUTTON_MAC_ADDRESS);

button.addListener(async () => {
    console.log('Porch button');
    request.post(
        'http://rey.local:8123/api/services/light/toggle',
        { json: {
            entity_id: "light.porch"
        }}
    );
});

button2.addListener(async () => {
    console.log('Christmas button pressed');
    request.post(
        'http://rey.local:8123/api/services/light/toggle',
        { json: {
            entity_id: "light.christmas_tree"
        }}
    );
});

console.log('Listening for dash buttons...');
