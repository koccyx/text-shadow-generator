generateTextShadow();
document.forms.appForm.addEventListener('input', (e) => {
    if (e.target.closest('input')) {
        generateTextShadow();
    }
})

function generateTextShadow() {
    let fontSize = document.getElementById('fontSize').value;
    let offsetX = document.getElementById('offsetX').value;
    let offsetY = document.getElementById('offsetY').value;
    let blur = document.getElementById('blur').value;
    let color = document.getElementById('color').value;
    let opacity = document.getElementById('opacity').value;
    let textColor = document.getElementById('text-color').value;

    let red = parseInt(color.slice(1,3), 16);
    let green = parseInt(color.slice(3,5), 16);
    let blue = parseInt(color.slice(5,7), 16);

    let $result = document.querySelector('.header');

    let strRGBA = `${offsetX}px ${offsetY}px ${blur}px rgba(${red}, ${green}, ${blue}, ${opacity})`;
    let strHEX = `${offsetX}px ${offsetY}px ${blur}px ${color}`;

    let $textAreaRGBA = document.getElementById('rgba-result');
    let $textAreaHEX = document.getElementById('hex-result');

    $textAreaHEX.value = `text-shadow: ${strHEX};\nfont-size: ${fontSize};\ncolor: ${textColor};`;
    $textAreaRGBA.value = `text-shadow: ${strRGBA};\nfont-size: ${fontSize};\ncolor: ${textColor};`;

    $result.style.textShadow = strRGBA;
    $result.style.color = textColor;
    $result.style.fontSize = fontSize + 'px';
}

