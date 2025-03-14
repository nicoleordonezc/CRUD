export const find = async()=>{
    const url = new URL("https://67d2f8148bca322cc268a7d3.mockapi.io/")
    /*Se pide el protocolo, dominio, enpoint, parametro, metodo*/ 
    url.pathname += "informacion" /* ESta es la forma de poner */
    const response = await fetch(url.toString(), {method: "get"})
    /* await hacer el trabajo de mirar si esta bien o mal y enviarlo a la const*/ /*fetch es obtener la informacion */
    return await response.json();
}

export const search = async(id)=>{
    const url = new URL("https://67d2f8148bca322cc268a7d3.mockapi.io/")
    url.pathname += `informacion/${id}`
    const response = await fetch(url.toString(), {method:"get"})
    return await response.json();
}
export const save = async(data)=>{
    const url = new URL("https://67d2f8148bca322cc268a7d3.mockapi.io/")
    const headers = new Headers();
    headers.set("Content-Type", "application/json")
    /*agregar obejto-valor*/
    url.pathname += `informacion`
    const config ={
        method: "post",
        headers,
        body: JSON.stringify(data)
    }
    const response = await fetch(url.toString(), config);
    return response.json();
}
export const edit = async(data)=>{
    const {id} = data
    /*Encontrar el dato exacto con ID*/
    if (typeof id === "undefined") return "No se envió el id"
    data.updateAt = Math.floor(Date.now() / 1000);
    delete data.id;
    /*eliminar el id para que no se pueda editar*/
    const url = new URL ("https://67d2f8148bca322cc268a7d3.mockapi.io/");
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    url.pathname +=`informacion/${id}`
    const config ={
        method: "put",
        headers,
        body: JSON.stringify(data)
    }
    const response = await(await fetch(url.toString(), config)).json;
    response.updateAt = new Date(response.updateAt * 1000);
    return response
}
export const remove = async(id)=>{
    const url = new URL ("https://67d2f8148bca322cc268a7d3.mockapi.io/")
    url.pathname += `informacion/${id}`
    const response = await fetch(url.toString(),
    {method: "delete"})
    return await response.json();
}