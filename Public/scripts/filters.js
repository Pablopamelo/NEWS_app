const select = document.querySelector("#type");
const filters = document.querySelector(".filters");

select.addEventListener("change", function(){
    const option = this.value;
    if(option == "top"){
        filters.innerHTML = `<li>
                            <label for = "place">Where</label>
                            <select name = "place" id = "place">
                                <option value = "us" selected>US</option>
                            </select>
                            </li>
                            <li class = "category">
                                <label for = "category">Category</label>
                                <select name = "category" id = "category" class = "category">
                                <option value = "bussines">bussines</option>
                                <option value = "entertainment">entertainmnent</option>
                                <option value = "general" selected>general</option>
                                <option value = "health">health</option>
                                <option value = "science">science</option>
                                <option value = "sports">sports</option>
                                <option value = "technology">technology</option>
                            </select>
                            </li>`;
    }else{
        filters.innerHTML = `
                            <li>
                            <label for = "place">Where</label>
                            <select name = "place" id = "place">
                                <option value = "en" selected>US</option>
                                <option value = "pl" >Poland</option>
                                <option value = "de" >Germany</option>
                            </select>
                            </li>
                            <li>
                            <label for = "sort">Sort by</label>
                            <select name = "sort" id = "sort" class = "sort">
                                <option value = "publishedAt" selected>newest</option>
                                <option value = "popularity">most popular</option>
                                <option value = "relevancy">relevant</option>
                            </select>
                            </li>
                            <li>
                                <label for = "date1">From</label>
                                <input name = "date1 id = "date1" type = "date" class = "date1">
                                <label style = "width: 2rem; text-align: center;" for = "date2">to</label>
                                <input name = "date2" id = "date2" type = "date" class = "date2">
                            </li>`;
    }
});