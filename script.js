function show(color1, color2, color3) {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div id="trafikkLys">
        <div class="lys" style="background-color: ${color1};"></div>
        <div class="lys" style="background-color: ${color2};"></div>
        <div class="lys" style="background-color: ${color3};"></div>            
    </div>
        `;
}
function autoLightGreen() {
    show('gray', 'gray', 'green');
    setTimeout(autoLightYellow, 2000);
}
function autoLightYellow() {
    show('gray', 'yellow', 'gray');
    setTimeout(autoLightRed, 2000);

}
function autoLightRed() {
    show('red', 'gray', 'gray');
    setTimeout(autoLightRedYellow, 1000);

}
function autoLightRedYellow() {
    show('red', 'yellow', 'gray')
    setTimeout(autoLightGreen, 1000)
}
function uteAvDrift() {
    show('gray', 'gray', 'gray')
    setTimeout(uteAvDriftLys, 500);

}
function uteAvDriftLys() {
    show('gray', 'yellow', 'gray');
    setTimeout(uteAvDrift, 500);
}
function turnOff() {
    location.reload();

}