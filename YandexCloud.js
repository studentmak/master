const { Buffer } = require('buffer');
const querystring = require('querystring');
const https = require('https');



let discountProducts_initial_HAPPY_SAM10 = [
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

    let discountProducts_HAPPY_SAM10 = []

    let goodsSnacks = [{"uid":"765336520941","id":"02c4d076-7fe6-4e9a-9c09-43fff3da8b51","name":"Мидии Гигант"},{"uid":"175010870781","id":"031d1017-8470-495a-ba22-32254c4cba42","name":"Эби темпура"},{"uid":"438000540061","id":"a0e45cb6-59bf-40b1-a607-228bde160598","name":"Мидии Гигант острые"},{"uid":"957015944991","id":"34c486b0-f9eb-4fc7-9a6c-6514b5cb2d3c","name":"Куриные Наггетсы"},{"uid":"987898188691","id":"4375b726-84e2-4f5a-aa0c-d7e335b36368","name":"Тори пицца"},{"uid":"117057618651","id":"06ba40a7-dcde-4ad7-8380-0b37a1a8638b","name":"Сырные палочки"},{"uid":"397508308821","id":"b6b5631f-bd49-4689-9342-3a39830de59d","name":"Картофель Фри"},{"uid":"165878149301","id":"6ef11c62-a931-415f-b4a5-2aac4c69b829","name":"Картофель Айдахо"},{"uid":"817166087151","id":"bf7af001-cd5f-4ebf-be5c-89950832e6fc","name":"Кольца кальмара"},{"uid":"986702136011","id":"84ef7161-f6cf-4a4b-add9-d8b86599988b","name":"Картофельный микс"},{"uid":"861482447721","id":"ddf6c7d1-f818-42c3-ae9f-f69106d4be3d","name":"Стрипсы"}]
    let goodsHot_dishes = [{"uid":"264878972761","id":"302b0b54-c88f-42c2-8538-032262086365","name":"Оякодон с курицей"},{"uid":"572668510811","id":"b10dfc05-badd-4121-8b2e-68f6d4c414d3","name":"Wok с креветкой"},{"uid":"163778116401","id":"b10dfc05-badd-4121-8b2e-68f6d4c414d3","name":"Wok с креветкой / Рис- Рис"},{"uid":"970288402551","id":"f5f4ccb6-4562-41a4-a619-d43ef0ee0f84","name":"Wok с креветкой / Лапша- Лапша"},{"uid":"240393638661","id":"9ae4dff6-8146-4edd-97a6-6f0ef198649f","name":"Wok с курицей и беконом"},{"uid":"651967824141","id":"9ae4dff6-8146-4edd-97a6-6f0ef198649f","name":"Wok с курицей и беконом / Рис- Рис"},{"uid":"734540564321","id":"0c235ba6-7dad-4c14-9991-172fc240c2ac","name":"Wok с курицей и беконом / Лапша- Лапша"},{"uid":"792618410161","id":"769a83f6-cd3b-4fef-bb93-68b9ecf9f576","name":"Wok с курицей"},{"uid":"462571239661","id":"57df6d70-66ee-439e-8bd2-e3d442873c2e","name":"Wok с курицей / Рис- Рис"},{"uid":"766832999391","id":"769a83f6-cd3b-4fef-bb93-68b9ecf9f576","name":"Wok с курицей / Лапша- Лапша"},{"uid":"289342172271","id":"e87779bf-7226-4152-9cc2-400eb5424e4b","name":"Wok с овощами"},{"uid":"636334967461","id":"e87779bf-7226-4152-9cc2-400eb5424e4b","name":"Wok с овощами / Рис- Рис"},{"uid":"502415072861","id":"97e50851-842c-4efd-a15b-06da42aaaf49","name":"Wok с овощами / Лапша- Лапша"},{"uid":"588813442161","id":"5df6a523-12b7-4552-bbbe-666833b7b6bd","name":"Паста сливочная"},{"uid":"496502998101","id":"fa1c0e4b-b3b1-43a1-946f-ea56dd1a4613","name":"Тепан с курицей"},{"uid":"385167142951","id":"ef0190e9-3d81-4c47-a17d-6d9a831abda1","name":"Соба с курицей"},{"uid":"769401924211","id":"bcb97bc9-0baf-4a6b-b487-def5e134bf75","name":"Сладкая курица"},{"uid":"989860201261","id":"cf426226-da32-40a7-aaa5-f46706819abc","name":"Паста Карбонара"}]
    let goodsDesserts = [{"uid":"272400350671","id":"82a1a78c-ac64-4575-bf24-b47657f631e6","name":"Минари клубника"},{"uid":"708102540711","id":"c1e0cae2-74fb-4cac-9248-4b9e030874e2","name":"Чизкейк Нью-Йорк"},{"uid":"967475349081","id":"8aa43e70-6e1c-4142-9a04-aad0ebbcd8c1","name":"Шоко Микс"},{"uid":"109204948981","id":"d7f216d2-43d4-4d7f-8f4c-17bb71a4e13c","name":"Чизкейк шоколадный"},{"uid":"719421266771","id":"db459c5f-3dc1-4834-9afc-44f4ea1c71ce","name":"Торт Захер"},{"uid":"285383299971","id":"82518174-38cb-41cd-b4f8-739151419461","name":"Морковный торт"},{"uid":"178314137251","id":"887ed5da-6cbb-436c-97dd-261fc2b63b10","name":"Малиновая тарталетка"}]
    let goodsDrinks = [{"uid":"319818706371","id":"3b798a4a-e727-43b4-ae69-8e436dbc08a5","name":"Пепси"},{"uid":"412651517161","id":"3b798a4a-e727-43b4-ae69-8e436dbc08a5","name":"Пепси / 0,5- 0,5"},{"uid":"186897845761","id":"2b41bb64-fb08-456b-bb2f-be865fcc05f2","name":"Пепси / 1- 1"},{"uid":"453034878841","id":"9ead59c8-5c94-4370-8a33-7592a4193ff5","name":"Миринда"},{"uid":"158942395871","id":"9ead59c8-5c94-4370-8a33-7592a4193ff5","name":"Миринда / 0,5- 0,5"},{"uid":"506668447791","id":"d8e60c98-5f49-4115-abc1-ae12dfc021d9","name":"Миринда / 1- 1"},{"uid":"437989319351","id":"9e058951-a490-4009-a6c7-4696e240bc26","name":"7-up"},{"uid":"611984318031","id":"9e058951-a490-4009-a6c7-4696e240bc26","name":"7-up / 0,5- 0,5"},{"uid":"670436655091","id":"1d3ee893-131b-42d5-a6ce-2051c7f46b0c","name":"7-up / 1- 1"},{"uid":"191363417801","id":"af8b82c9-c409-4317-876e-bd33a8a7fc31","name":"Липтон"},{"uid":"641816282441","id":"6mEr9GoeICeSngsAdedU","name":"Липтон / 0,5- 0,5"},{"uid":"927621406661","id":"f7ed729f-7943-49be-8fe1-a48883b46bb5","name":"Аква Минерале без газа"},{"uid":"252909477391","id":"S6R4jn4yz6jvA3irYtaL","name":"Аква Минерале без газа / 0,5- 0,5"},{"uid":"399433903021","id":"71c91a38-d7b5-4333-b7b4-24455b27a107","name":"Актив Малина"},{"uid":"833955474571","id":"0RjS1bKUPZK7SKxe2Zvf","name":"Актив Малина / 0,5- 0,5"}]
    let goodsSalads = [{"uid":"380768892571","id":"e99b0e66-e806-487e-aa36-0b9aef4417fd","name":"Цезарь с курицей"},{"uid":"552377858101","id":"da2d0ed6-42cc-4948-bacd-25fd11f3a685","name":"Цезарь с лососем"},{"uid":"408430576511","id":"a3f21539-4d23-4562-99ae-eb55eb655a08","name":"Цезарь с креветкой"},{"uid":"239853394541","id":"320ce4c9-b2e5-4b95-a094-a45400358485","name":"Салат Греческий"},{"uid":"930107580241","id":"30f2c90d-78ab-4766-bcc3-25b41c9cc023","name":"Салат Сытный"},{"uid":"335697458321","id":"c0d658d6-2bfc-4e4e-b128-4e9ea07759e9","name":"Салат Нежность"}]
    let goodsSoups = [{"uid":"601704694161","id":"37416a06-f9c4-4a3d-b138-327e7ea0eea3","name":"Суп Мисо"},{"uid":"129685101861","id":"74c62ee4-c74f-4f99-8f41-e8bc4e406c9a","name":"Сливочный суп с лососем"},{"uid":"379806300501","id":"41b5f32f-9011-458a-90fb-511ff8fcbafa","name":"Суп Мисо с лососем"},{"uid":"344339141891","id":"66e505ae-0e5a-4dd9-901f-b9f9a8fe3e1a","name":"Сливочный суп с креветкой"},{"uid":"715219592021","id":"f1783121-1654-400e-976f-04f8f18c2224","name":"Суп Кимчи с лососем"},{"uid":"366260481941","id":"dd717832-a3b4-4f0f-985c-853a03673b04","name":"Суп куриный с лапшой"},{"uid":"283511212991","id":"56f17e9d-7fed-4129-876e-d652653adfc6","name":"Суп Суимоно"},{"uid":"536293892161","id":"8e28a99c-62c4-4112-9039-d80278ad5e10","name":"Суп Кимчи"},{"uid":"762924901631","id":"d1f3677f-7b29-45ef-ba62-85db867dfa44","name":"Суп Кимчи с морепродуктами"},{"uid":"342169227631","id":"bb4393af-5cf4-4beb-9275-3aa523f1a0a1","name":"Том Ям"}]
    
    let discountProducts_initial_HOT10 = [...goodsSnacks, ...goodsHot_dishes, ...goodsDesserts, ...goodsDrinks, ...goodsSalads, ...goodsSoups ]
    let discountProducts_HOT10 = []

    function DiscountFun () {
        for(i=0; i<discountProducts_initial_HAPPY_SAM10.length; i++){
            discountProducts_HAPPY_SAM10.push(discountProducts_initial_HAPPY_SAM10[i].id)
        }

        for(i=0; i<discountProducts_initial_HOT10.length; i++){
            discountProducts_HOT10.push(discountProducts_initial_HOT10[i].id)
        }
    } DiscountFun()


    function calculationDiscount(){
        let custom_discount_value
        let total_cost

        if(extendedParams[`payment[promocode]`].toUpperCase() === "HAPPY" || "SAM10"){
            custom_discount_value = discountProducts_HAPPY_SAM10.includes(p.externalid) ? 0 : ((+p.price * +p.quantity) * discount/100)
            total_cost = discountProducts_HAPPY_SAM10.includes(p.externalid) ? (+p.price * +p.quantity) : (+p.price * +p.quantity) - ((+p.price * +p.quantity) * discount/100)
        } else if(extendedParams[`payment[promocode]`].toUpperCase() === "HOT10"){
            custom_discount_value = discountProducts_HOT10.includes(p.externalid) ? ((+p.price * +p.quantity) * discount/100) : 0
            total_cost = discountProducts_HOT10.includes(p.externalid) ? (+p.price * +p.quantity) - ((+p.price * +p.quantity) * discount/100) : (+p.price * +p.quantity)
        }
        return {custom_discount_value, total_cost}
        }


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
            custom_discount_value: calculationDiscount().custom_discount_value,
            price: +p.price,
            total_cost: calculationDiscount().total_cost,
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


