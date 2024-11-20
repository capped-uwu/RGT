document.getElementById('calculate-revenue').addEventListener('click', () => {
    const price = parseFloat(document.getElementById('gamepass-price').value);
    if (!price || price <= 0) {
        document.getElementById('revenue-output').textContent = "正しい値段を入力してください。";
        return;
    }
    const revenue = Math.floor(price * 0.7);
    document.getElementById('revenue-output').textContent = `制作者に届く Robux: ${revenue} Robux`;
});

document.getElementById('calculate-price').addEventListener('click', () => {
    const desiredRevenue = parseFloat(document.getElementById('desired-revenue').value);
    if (!desiredRevenue || desiredRevenue <= 0) {
        document.getElementById('price-output').textContent = "正しい収益を入力してください。";
        return;
    }
    const price = Math.ceil(desiredRevenue / 0.7);
    document.getElementById('price-output').textContent = `必要なゲームパスの値段: ${price} Robux`;
});
