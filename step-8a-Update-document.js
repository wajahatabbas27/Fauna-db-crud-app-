const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    try {
        const result = await client.query(
            q.Update(
                q.Ref(q.Collection('posts'), '297800414563140105'),
                { data: { tags: ['serverless', 'AZ'] } },
            )
        );
        console.log("Document updated in Container in Database: " + result.ref.id + " " + result.data.title);
        console.log("Tags Appended:")
        result.data.tags.map((t) => {
            console.log(t);
        })

    } catch (error) {
        console.log(error);
    }
})()