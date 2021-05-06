const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {

    const client = new faunadb.Client({ secret: "fnAEIQ-LpBACCsmDNMF0mVk1K7XC0_ys1UY5RghS" });

    //try catch use kreinge kionke agar koi bhi error hoga async/await ki waja se yh crash krdega .
    try {

        const result = await client.query(
            q.CreateDatabase({ name: "az-database" })
        );
        //If the downward console is executed so it means that its working properly.
        console.log("Result = ", result);

    } catch (error) {

        console.log(error);

        // if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
        //     console.log('Database with this name already exists');
        // }
        // else {
        //     console.log('Unknow Error: ');
        //     console.log(error);
        // }
    }

})();