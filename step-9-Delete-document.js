const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    try {
        const result = await client.query(
            q.Delete(
                q.Ref(q.Collection('posts'), '297801299116688904')
            )
        );
        console.log("Document deleted in Container of Database: " + result.ref.id);

    } catch (error) {
        console.log(error);
    }
})()