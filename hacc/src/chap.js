function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".inner-entry-content img");
        let imgs = [];
        el.forEach(e =>{
            var img = e.attr("src").replace(/[\t\n]/g,'');
            imgs.push(img);
            
        });
        imgs.shift();
        return Response.success(imgs);
    }
    return null;
}