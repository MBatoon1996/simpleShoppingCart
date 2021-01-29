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
    total = total.toFixed(2);
    $('#total').html("$"+total);
}

$(document).ready(function(){
    getSubtotal();
    getTotal();

    var timeout;
    $('.qtyInput').on('input', function(){
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            getSubtotal();
            getTotal();
        }, 300);
    });

    $('#addItem').on('submit', function(event){
        event.preventDefault();
        var item = $(this).children('[name=item]').val();
        var price = $(this).children('[name=price]').val();
        var qty = $(this).children('[name=qty]').val();
        
        $('tbody').append('<tr>' + 
        '<td class="item">' + item + '</td>' +
        '<td class="price">' + price + '</td>' +
        '<td class="qty"><b>QTY </b><input class="qtyInput" type="number" value="' + qty +'"> <button type="button" class="btn btn-sm cancel">Cancel</button></td>' + 
        '</tr>');
    });

});

$('.btn.cancel').on('click', function(event){
    $(this).closest('tr').remove();
    getTotal();
});