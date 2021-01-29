var getSubtotal = function(){
    $('tbody tr').each(function(i, ele){
        var price = $(ele).children('.price').text();
        price = parseFloat(price.substring(1));
        var qty = parseFloat($(ele).find('input.qtyInput').val());
        var subtotal = price * qty;
        subtotal = "$"+subtotal.toFixed(2);
        $(ele).children('.subtotal').html(subtotal);
    });
}

var getTotal = function(){
    var total = 0;
    $('tbody tr').each(function(i, ele){
        var subtotal = $(ele).children('.subtotal').text();
        subtotal = parseFloat(subtotal.substring(1));
        total+=subtotal;
    });
    $('#total').html("$"+total);
}

$(document).ready(function(){
    getSubtotal();
    getTotal();
});

$('.btn.cancel').on('click', function(event){
    $(this).closest('tr').remove();
});