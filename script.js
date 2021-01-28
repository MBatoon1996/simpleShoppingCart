$(document).ready(function(){
    $('tbody tr').each(function(i, ele){
        var price = $(ele).children('.price').text();
        price = parseFloat(price.substring(1));
        var qty = parseFloat($(ele).find('input.qtyInput').val());
        var subtotal = price * qty;
        $(ele).children('.subtotal').html(subtotal);
    });
});