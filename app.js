var randomArray = [0,1,2,3,4,5,6,7,8];

for (var i = 0; i < randomArray.length; i++){
console.log(i);
    $.ajax({
        url: 'https://xkcd.com/' + randomArray[i] + '/info.0.json',
        //url: 'https://api.apis.guru/v2/specs/xkcd.com/1.0.0/swagger.json',
        method: "GET"
    }).done(function (response) {
        console.log(response);
    });
}