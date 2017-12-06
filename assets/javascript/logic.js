// 
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "59a6da904e9548caa79d6f29dce2f7b8",
    'q': "tiger woods",
    'begin_date': "19991221",
    'end_date': "20121221",
    'page': 2
});


$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {

    console.log(result);

    for (let i = 0; i < 10; i++) {
        console.log(result);




        let headline = result.response.docs[i].headline.main;
        console.log(headline);
        let by = result.response.docs[i].byline.original;
        console.log(by);
        let snip = result.response.docs[i].snippet;
        console.log(snip);
        let source = result.response.docs[i].source;
        console.log(source);
        let link = result.response.docs[i].web_url;
        console.log(link);

        /////////////// COL //////////////

        // make a col div
        let div = $("<div>");

        // Assign it a class 
        div.addClass("col-xs-12");

        ///////////// PAN /////////////

        // Make a panel
        let pan = $("<div>");

        // Assign it a class 
        pan.addClass("panel panel-default");

        /////////////// TITLE //////////////

        // Make a title row
        let title = $("<div>");

        // Assign it a class 
        title.addClass("page-header");

        // Set title text

        title.html("<h3>" + headline + "<h3>");

        ///////////// ASSEMBLY /////////////

        // Put title in panel
        pan.append(title);

        // Insert panel into div
        div.append(pan);

        // Insert div into img-row
        $("body").append(div);
    }
    console.log("done");
}).fail(function (err) {
    throw err;
});
// }
