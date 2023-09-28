const { Buffer } = require('buffer');
const querystring = require('querystring');
const https = require('https');


let notDiscount = []
let arrayObjNotDiscount = [
    { name: '3 пиццы за 1199 р', id: '8414aa3f-f683-49b0-9b5e-6b5840f38b74'},
    { id: '1390985a-dcb3-44c7-a8c9-ba16ffff2808', name: 'Сет Куяси' },
    { id: '32a9302b-8784-4944-a876-91bc4ee34cb1', name: 'Сет Ши' },
    { id: '842e3821-1e17-4706-ab6f-cd719da2b943', name: 'Сет Пол седьмого' },
    { id: '516e096e-5402-492e-8d10-2191fac52c8c', name: 'Сет Валера' },
    { id: '1b700c9f-c7f3-4567-9038-4ed15b04aef2', name: 'Сет Тайм' },
    { id: '869ce7fa-9ab1-4970-8918-5f54e173e129', name: 'Сет Папаша' },
    { id: '580c7110-3020-4b57-9cd5-c1faad015eb9', name: 'Сет Харакири' },
    { id: '3db544c1-8a8e-44f8-889a-e146de65c1a2', name: 'Сет Хит' },
    { id: '85bf59a2-4d28-4040-a60d-33a18a9a5c40', name: 'Сет Катана' },
    { id: 'bfde6aaf-fc85-4c88-9237-3e856c45f262', name: 'Сет Пикачу' },
    { id: 'd99c7954-1789-4002-8ab9-87b0cc1256d2', name: 'Сет Самурай' },
    { id: 'e8c31981-e5b1-4638-93e4-baa842bf5944', name: 'Сет Сушин сын' },
    { id: '313dd5bf-5f62-4899-b911-3471fb76d834', name: 'Сет Рассвет' },
    { id: '732d3b92-47bf-4a4a-80d6-0870268d8d90', name: 'Сет Дабуру' },
    { id: '718aded0-2db0-4b9c-92ac-944b695f3ff0', name: 'Сет Саке' },
    { id: '6fcf599e-1f8f-40c8-a14d-846ee28eefae', name: 'Сет Дурман' },
    { id: 'a566eb65-e744-4903-afef-068a5f2ea1c4', name: 'Сет Шире-хари' },
    { id: '18a01b75-459c-42b1-ada3-6519fdeecbe4', name: 'Сет Окинава' },
    { id: '74ef2951-3acb-40bb-a8eb-2328961c4bd0', name: 'Сет Клава' },
    { id: '47a14889-8e1a-4d2b-9240-acddd03f7f87', name: 'Сет Торгаш' },
    { id: '4a9b194a-0643-4641-b788-4b0fd78238dd', name: 'Сет Трио' },
    { id: '187eb30f-b129-449e-b12a-584d6b57ad5e', name: 'Сет Сукияма' },
    { id: 'c3b050f0-f9f3-49df-a91a-7e66adb516f2', name: 'Сет Тидори' },
    { id: '48672ff6-8d61-4c49-a718-fa7922ffe5fc', name: 'Сет Сакура' },
    { id: 'fc701342-b99a-4c1a-9ba1-8495600ce85e', name: 'Сет Наруто' },
    { id: '431c3762-aa51-4840-b070-c138190b5744', name: 'Сет Наката' },
    { id: '8f088fb8-dde8-4991-9249-fc2755d89486', name: 'Сет Панда' },
    { id: 'eb8e84f2-5264-4501-a4fc-cba6174d64f2', name: 'Сет Спайси' },
    { id: 'd93836f8-76f4-41dd-bbda-903fb81c83b1', name: 'Сет Дзю' },
    { id: '40c160b7-3459-40df-a7ed-7f4a586433bf', name: 'Сет Нагасаки' },
    { id: '8b10369f-eac1-4b52-9dbd-2d2966b4ed5a', name: 'Сет Хиросима' },
    { id: '66c93c74-19bf-4ac4-a221-d29ad8342cdc', name: 'Сет Шкет' },
    { id: '14f52456-1631-4076-bec6-abd5ad6ad439', name: 'Сет Хати' },
    { id: 'ceee9d94-b833-49fc-a178-634699677044', name: 'Сет Сити' },
    { id: 'c4b6d7f7-ec80-42b6-9592-f93423fbbd95', name: 'Сет Микс' },
    { id: '91897ac5-ec7e-4482-b258-8c878ef33c56', name: 'Сет Темпура' },
    { id: 'a4b2dddc-024f-41e0-84c0-8978b83a161c', name: 'Сет Сан' },
    { id: '1c7ab52d-0ffe-40ff-92df-65c175ff7be3', name: 'Сет Тсуки' },
    { id: '9a6db955-8cd9-4687-965b-1d1fbc3a5936', name: 'Сет Суйка' },
    { id: 'd4c11901-1013-4d31-9b9f-6961e5a59147', name: 'Сет Вова' },
    { id: '2afc205f-a76e-4842-86f0-4bd344d7a914', name: 'Сет Классика' },
    { id: '74b3a6ec-3481-4642-a622-91903151bf40', name: 'Сет Филамания' },
    { id: '66b5f859-b13d-475f-889b-ea8514fb327e', name: 'Сет Три Сезона' },
    { id: '238ee5bc-15b3-4eec-b202-ec1a21ce0430', name: 'Сет Биг Босс' },
    { id: '0fcfb75a-5df0-4a72-a48d-c4d9cda06cb4', name: 'Сет Вонзай' },
    { id: 'd4347eef-a486-4881-90aa-18db198604ea', name: 'Сет Своя компания' },
    { id: 'aaf11458-54bf-4e0e-9d45-bc57abfda741', name: 'Сет Секрет' },
    { id: '7636a1b0-6d21-47ef-9dbb-b609de2bfbb8', name: 'Сет Всё включено' },
    { id: 'd30834e3-4cd2-40c9-a026-c687866265e0', name: 'Сет Три пары' },
    ]
    function notDiscountFun () {
        for(i=0; i<arrayObjNotDiscount.length; i++){
            notDiscount.push(arrayObjNotDiscount[i].id)
        }
    } notDiscountFun()


function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

let extendParams = (params) => {
    let obj = {...params, products: []}
    
    for (let i = 0; i < 1000; i++) {
        if (obj[`payment[products][${i}][name]`]) {
            obj.products.push({
                price: obj[`payment[products][${i}][price]`],
                name: obj[`payment[products][${i}][name]`],
                quantity: obj[`payment[products][${i}][quantity]`],
                amount: obj[`payment[products][${i}][amount]`],
                externalid: obj[`payment[products][${i}][externalid]`].replace(/.*\#/, ''),
            })
        }
    }

    return obj
}

module.exports.handler = async function (req, context) {
    console.log(req.headers['Referer'])
    if (!req.headers['Referer']) {
        return {
            statusCode: 200,
            body: 'Hello World!',
        };
    }
    if (!req.headers['Referer'].includes('fudo.su')) {
        return {
            statusCode: 200,
            body: 'Hello World!',
        };
    }
    let buff = new Buffer(req.body, 'base64');
    let text = buff.toString('utf-8');
    let parsedParams = querystring.parse(text);
    let extendedParams = extendParams(parsedParams)

console.log(JSON.stringify(extendedParams))
let discount = extendedParams['payment[discountvalue]']
 ? Number(extendedParams['payment[discountvalue]'].replace('%', ''))
 : 0 ;

 function getTypeDelivery(){
    if(extendedParams['payment[delivery]']){
        return extendedParams['payment[delivery]'].includes('Доставка') ? 'delivery' : 'pickup'
    } else {
        return ""
    }
}
let order_type_delivery = getTypeDelivery()

var post_data = JSON.stringify({
    "id": generateUUID(),
    "user_id": 'cccc1257-bdaa-4eaa-b8ce-5ccf2db3853e',
    "processing_status": 'not_confirmed',
    "order_status": 'internet',
    sale_point_id: '5d37debd-c8a5-4199-bf62-9066ad1b552a',
    "order_type": order_type_delivery,
    "total_cost": +extendedParams['payment[amount]'],
    "number": extendedParams['payment[orderid]'],
    "items_cost": +extendedParams['payment[subtotal]'],
    "source": "shop",
    "date_created": parseInt(new Date().getTime() / 1000),
    "first_name": extendedParams.name || extendedParams.username,
    "phone": extendedParams.phone,
    "delivery_cost": +extendedParams['payment[delivery_price]'],
    "discount_value": +extendedParams['payment[discount]'],
    address: extendedParams['payment[delivery_address]'],
    guests_quantity: extendedParams.persons,
    comment: `Подарок: ${extendedParams.present}` ,
    "order_items": extendedParams.products.map(p => {
        return {
            product_name: p.name,
            product_id: p.externalid,
            quantity: p.quantity,
            custom_discount_type: 'rouble',
            custom_discount_value: notDiscount.includes(p.externalid) ? 0 : ((+p.price * +p.quantity) * discount/100),
            price: +p.price,
            total_cost: notDiscount.includes(p.externalid) ? (+p.price * +p.quantity) : (+p.price * +p.quantity) - ((+p.price * +p.quantity) * discount/100),
        }
    }),
    internet: {
        "first_name": extendedParams.name || extendedParams.username,
        "phone": extendedParams.phone,
    },
    delivery: {
            "first_name": extendedParams.name || extendedParams.username,
            "phone": extendedParams.phone,
            address: extendedParams['payment[delivery_address]'],
            delivery_comment: 'Кол-во персон: ' + extendedParams.persons
    },
});
  var post_options = {
      host: 'fudo.dooglys.com',
      port: '443',
      path: '/api/v1/sales/order/create',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(post_data),
          'Access-Token': '2TdQTBgkHfgbd3FUzegqOTc9b_WsOFiy',
          'Tenant-Domain': 'fudo'
      }
  };

  // Set up the request
  var post_req = https.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  console.log(`STREAM FOR DOOGLYS ${post_data}`)
  post_req.write(post_data);
  post_req.end();

    return {
        statusCode: 200,
        body: 'Hello World!',
    };
};
