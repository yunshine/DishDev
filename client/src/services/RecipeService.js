// /* eslint-disable import/no-anonymous-default-export */
// export default {
//     getRecipes: () => {
//         return fetch('/user/recipes')
//             .then(response => {
//                 if (response.status != 401) {
//                     return response.json().then(data => data);
//                 } else {
//                     return { message: { msgBody: "unauthorized" }, msgError: true };
//                 }
//             });
//     },
//     postRecipe: (recipe) => {
//         return fetch('/user/recipe', {
//             method: "post",
//             body: JSON.stringify(recipe),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(response => {
//             if (response.status != 401) {
//                 return response.json().then(data => data);
//             } else {
//                 return { message: { msgBody: "unauthorized" }, msgError: true };
//             }
//         });
//     }
// }