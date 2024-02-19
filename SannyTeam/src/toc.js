function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let repsonse = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
    });
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".widget_senction li .epsright")
        let data = [];
        for (let i = el.length; i--;) {
            let e = el.get(i);
            data.push({
                name: "Chap "+e.select("a").text(),
                url: e.select("a").attr("href"),
                host: BASE_URL 
            })
        }
        return Response.success(data);
    }
    return null;
}