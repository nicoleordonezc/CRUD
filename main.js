import {find, search, save, edit, remove} from "./api.js"
import {myTable, myFormAdd} from "./components.js"


const table = document.querySelector("#myTable");
const button = document.querySelector("#my__button");
const dialog = document.querySelector("#my__dialog");
const close = document.querySelector("#my__dialog-close");

addEventListener("DOMContentLoaded", async()=>{
    const data = await find();
    const fragTbody = myTable(data);
    table.append(fragTbody);
    button.dispatchEvent(new Event("click")); /*abir un dialogo apenas se carga la pagina */
});

button.addEventListener("click", ()=>myFormAdd);
close.addEventListener("click", ()=> dialog.close());

// const dataSearch = await search(2);
// console.log(dataSearch);


// const objEdit = {
//     name: "name 4",
//     rol: ["admin", "user"],
//     id :4
// }
// const messageEdit = await edit(objEdit);
// console.log(messageEdit);

// const dataRemove = await remove (10);
// console.log(dataRemove)

