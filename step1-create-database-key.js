const faunadb = require("faunadb");
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" })

    try {
        const result = await client.query(
            q.CreateKey({
                database: q.Database('az-database'),
                role: 'server',
            })
        );

        console.log("Result " + result.secret);

    } catch (error) {
        console.log(error);
    }
})()