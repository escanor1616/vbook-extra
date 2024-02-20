function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    // let specUrl = url + "/ajax/chapters/";
    // console.log(specUrl)
    let repsonse = fetch(url, {
        method : "GET",
            headers: {
                'user-agent': UserAgent.android()
            }
            
    });
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".has-text-align-center a")
        let data = [];
        for (let i =0; i< el.length; i++) {
            let e = el.get(i);
            data.push({
                name: "Chap " + e.text(),
                url: e.attr("href"),
                host: "https://mangadm.cc" 
            })
        }
        return Response.success(data);
    }
    return null;
}