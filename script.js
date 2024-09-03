
updateView();
function updateView(color1, color2, color3) {
    let html = /*HTML*/`
    <h1>Trafikklys</h1>
    <div class="buttons">
        <button onclick="updateView('gray', 'gray', 'green')">Grønn</button>
        <button onclick="updateView('gray','yellow', 'gray')">Gul</button>
        <button onclick="updateView('red', 'gray', 'gray')">Rød</button>
        <button onclick="updateView('red','yellow', 'gray')">Gul Rød</button>
        <button onclick="autoLightRed()">Auto</button>
        <button onclick="uteAvDrift()">Ute av drift</button>
        <button onclick="turnOff()">Slå av</button>
    </div>
    <div id="trafikkLys">
        <div class="lys" style="background-color: ${color1};"></div>
        <div class="lys" style="background-color: ${color2};"></div>
        <div class="lys" style="background-color: ${color3};"></div>            
    </div>
        `;
    document.getElementById('app').innerHTML = html;
}

function autoLightGreen() {
    updateView('gray', 'gray', 'green');
    setTimeout(autoLightYellow, 2000);
}
function autoLightYellow() {
    updateView('gray', 'yellow', 'gray');
    setTimeout(autoLightRed, 2000);

}
function autoLightRed() {
    updateView('red', 'gray', 'gray');
    setTimeout(autoLightRedYellow, 1000);

}
function autoLightRedYellow() {
    updateView('red', 'yellow', 'gray')
    setTimeout(autoLightGreen, 1000)
}
function uteAvDrift() {
    updateView('gray', 'gray', 'gray')
    setTimeout(uteAvDriftLys, 500);

}
function uteAvDriftLys() {
    updateView('gray', 'yellow', 'gray');
    setTimeout(uteAvDrift, 500);
}
function turnOff() {
    location.reload();

}