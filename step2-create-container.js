const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" })

    try {

        const result = await client.query(
            //isse collection create hojaegi database mein hmare pass 
            q.CreateCollection({ name: 'posts' })
        );
        console.log("Result =", result.name);

    } catch (error) {
        console.log(error);
    }

})()