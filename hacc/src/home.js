function execute() {
    return Response.success([
        { title: "BL Hoàn", input: "/category/bl-hoan/page", script: "gen.js" },
        { title: "BL OnGoing", input: "/category/bl-ongoing/page", script: "gen.js" },
        { title: "BL Ngắn", input: "/category/bl-ngan/page", script: "gen.js" },

    ]);
}