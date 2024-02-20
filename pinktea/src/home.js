function execute() {
    return Response.success([
        { title: "Chap New", input: "/", script: "gen.js" },
        // { title: "Tất cả", input: "//manhwa", script: "gen.js" },
    ]);
}