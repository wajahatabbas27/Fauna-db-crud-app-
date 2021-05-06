const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });
    try {
        const result = await client.query(
            q.Get(q.Ref(q.Collection('posts'), '297801299116689928'))
        );
        console.log("Document retrived from Container in Database: " + result.data.title);
    } catch (error) {
        console.log(error);
    }

})();