
/* Calculator code*/

document.getElementById('calculateTotal').addEventListener('click', function() {
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const orderWeight = parseFloat(document.getElementById('orderWeight').value);

    if (isNaN(exchangeRate) || isNaN(orderWeight)) {
        alert('Por favor, ingrese números válidos en todos los campos.');
        return;
    }

    const totalCost = ((10 * orderWeight)) * exchangeRate;
    document.getElementById('result').textContent = totalCost.toFixed(2);
});
 
