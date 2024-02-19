function execute(url, page) {
    load('config.js');
    if (!page) page = '2';
    // let fetchUrl =BASE_URL +url + "/category/bl-hoan/page/" + page;
    // console.log(fetchUrl)
    let response = fetch(BASE_URL +url + page,{
        method : "GET",
        headers: {
                'user-agent': UserAgent.android()
            },
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".nav-links").select("span.current + a").text();
        page = next.toString();
        let el = doc.select("#main article");
        // if(url= "/") {
        //          el = doc.select(".post-show article")
        // }
        // if(url="/manhwa") {
        //     el = el = doc.select(".relat article")
        // }
        
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select(".read-title  a").first().text(),
                link: e.select(".read-title  a").first().attr("href"),
                cover: e.select(".read-bg-img img").attr("src"),
                host: "https://hacamchicac.com" ,
                description: e.select(".author-links").text()
            })
        })
        return Response.success(data,next)
    }
    return null
}