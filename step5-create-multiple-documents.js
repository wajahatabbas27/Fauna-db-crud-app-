const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    try {
        const result = await client.query(
            //2 parameters hnge ismein 
            //1- array of multiple documents
            //2-Lambda jo create krega multiple docs at one click , lambda works as forEach/for loop
            // q.Var() mein leke aega yh titles , (post_title) as a parameter use kreinge yhn pe.
            q.Map(
                [
                    'Gatsby.js generates static and dynamic websites',
                    'FaunaDB is consistent',
                    'Netlify deploys static assets on the Edge',
                ],
                q.Lambda(
                    'post_title',
                    q.Create(
                        q.Collection('posts'),
                        { data: { title: q.Var('post_title') } },
                    )
                ),
            )
        );

        console.log("Number of Documents Created and Inserted in the Container: " + result.length);
        result.map((r) => {
            console.log(r.ref.id);
        })
    } catch (error) {
        console.log(error);
    }
})()