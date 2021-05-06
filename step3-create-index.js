const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    try {

        const result = await client.query(
            q.CreateIndex({
                name: 'posts_by_az',
                source: q.Collection('posts'),
                terms: [{ field: ['data', 'title'] }],
            })
        )
        console.log("Index Created: " + result.name);

    } catch (error) {
        console.log(error);
    }
})()