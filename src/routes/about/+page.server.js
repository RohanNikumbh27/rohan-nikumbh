// /** @type {import('./$types').PageLoad} */
export async function load( {parent}) {
    const p = await parent();

    return {
        data: {
            ParentLayoutRoute: p.data,
            hello: "this is +page.server.js from about"
        }
    }
}