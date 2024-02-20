function execute() {
    return Response.success([
        { title: "Tất cả truyện", input: "/", script: "gen.js" },

    ]);
}