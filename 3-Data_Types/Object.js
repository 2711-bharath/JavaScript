/*
Object Declaration
------------------

obj = {
    key1: value1,
    key2: value2,
    ...,
    ...,
    keyn: valuen,
    function_name: function(params) {
        code logic here
    }
}

*/

obj = {

    productId: 100,
    productName: "Google Pixel 4A",
    productCost: 69750.00,
    Avalable: 5,

    display: function() {
        console.log('Product details : ')
        console.log('-----------------')
        console.log('Product Id : ', this.productId);
        console.log('Product Name : ', this.productName);
        console.log('Product Cost : ', this.productCost);
        console.log('Available : ', this.Avalable);
    },
}

obj.display();