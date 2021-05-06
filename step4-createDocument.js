const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    try {
        const result = await client.query(
            //document create krrhe hain ismein hm , collection ke andar create hota hai document
            q.Create(
                q.Collection('posts'),
                { data: { title: "Serverless Applications By AZ" } }
            )
        )
        console.log("Document Created and Inserted in Container: " + result.ref.id);
        console.log("Document Created and Inserted in Container: " + result.data.title);

    } catch (error) {
        console.log(error);
    }
})()