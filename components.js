export const myTable =(data)=>{

    const tbody = document.createElement("tbody")
    data.forEach(element => {
        /*sacar el valor e indice del obejo dentro del array usando element, indice*/
        // console.log(element.name)
        // /*elegir el dato solo por el name*/

        // {
        //     "createdAt": 1742226518,
        //     "name": "name 1",
        //     "lastname": "lastname 1",
        //     "age": 10,
        //     "updateAt": 1742226518,
        //     "email": "email 1",
        //     "rol": [],
        //     "id": "1"
        //   }
        /*se crea desde js el DOM */

        const tr = document.createElement("tr")
        const tdID= document.createElement("td")
        tdID.textContent = element.id;

        const tdName = document.createElement("td")
        tdName.textContent = element.name;
        
        const tdLastName = document.createElement("td")
        tdLastName.textContent = element.lastname;

        const tdAge = document.createElement("td")
        tdAge.textContent = element.age;

        const tdEmail = document.createElement("td")
        tdEmail.textContent = element.email

        const tdRoles = document.createElement("td")
        tdRoles.textContent = element.rol

        const tdCreate = document.createElement("td")
        tdCreate.textContent = new Date(element.createdAt * 1000);

        const tdUpdate = document.createElement("td")
        tdUpdate.textContent = new Date(element.updateAt * 1000);

        const tdActions = document.createElement("td");
        const buttonEdit = document.createElement("button")
        buttonEdit.textContent = "Edit";
        const buttonDelete = document.createElement("button")
        buttonDelete.textContent = "Delete";

        tdActions.append(buttonEdit, buttonDelete);

        tr.append(tdID, tdName, tdLastName, tdAge, tdEmail, tdRoles, tdCreate, tdUpdate, tdActions),
        tbody.append(tr)
    });
    return tbody
}

export const myFormAdd = (e)=>{
    const dialog = document.querySelector("#my__dialog");
    dialog.showModal()

    const my_form = document.createElement("form");
    my_form.action = "/informacion"
    my_form.method = "post"
    
}