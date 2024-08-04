// /** @type {import('./$types').PageLoad} */
import reviews from "./reviews.json"
let revArr = [ ];
export async function load() {
return {
    revArr,
}
    
}


/** @type {import('./$types').Actions} */
export const actions = {
    default:async ({cookies, request}) => {
        const data = await request.formData();
        // console.log("data", data.get('name'))
        let obj = {
            name: data.get('name'),
            email:data.get('email'),
            description: data.get('description'),
        }
        revArr.push(obj)
        // console.log("revArr", revArr)
    }
    
};