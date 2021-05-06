const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    try {
        const result = await client.query(
            q.Replace(
                q.Ref(q.Collection('posts'), '297801299116688904'),
                { data: { title: 'I love serverless apps' } },
            )
        );
        console.log("Document replaced in Container of Database: " + result.ref.id + " " + result.data.title);
    } catch (error) {
        console.log(error);
    }
})()