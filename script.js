// const message = document.getElementById('message');
// const fontSize = document.getElementById('fontSize');
// const color = document.getElementById('color');
// const bgColor = document.getElementById('bgColor');
// const imageUrl = document.getElementById('imageUrl');

  
document.getElementById('block-one').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const imageUrl = document.getElementById('imageUrl').value;
    console.log(imageUrl);
    const msg = document.getElementById('img-one');
    
    const message = document.getElementById('message').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const textColor = document.getElementById('color').value;
    const bgColor = document.getElementById('bgColor').value;
    let greetingCardHTML = `
        <div style="background-color: ${bgColor}; padding: 20px;">
            <img src="${imageUrl}" style="max-width: 100%; margin-bottom: 20px;">
            <p style="font-size: ${fontSize}; color: ${textColor};">${message}</p>
        </div>
    `;

    document.getElementById('greeting-card').innerHTML = greetingCardHTML;

});