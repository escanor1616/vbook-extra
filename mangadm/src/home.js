function execute() {
    return Response.success([
        { title: "Newest", input: "/", script: "gen.js" },
        // { title: "Tất cả", input: "//manhwa", script: "gen.js" },
    ]);
}