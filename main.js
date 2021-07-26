var name_of_the_guest = []

function add() {
    var display_name = [];
    var guest_name = document.getElementById("name_of_the_guest").value;
    console.log(guest_name);
    name_of_the_guest.push(guest_name);
    display_name.push("<h4>" + name_of_the_guest + "</h4>");
    console.log(display_name);
    document.getElementById("empty_div").innerHTML = display_name;
    document.getElementById("button_sort").style.display = "inline-block";
    document.getElementById("name_of_the_guest").value = "";
}




function show() {
    var htmldata;
    htmldata = ""
    for (var i = 0; i < name_of_the_guest.length; i++) {
        htmldata = htmldata + '<li>' + name_of_the_guest[i] + '</li>'
    }
    htmldata = htmldata + "<ol>"
    document.getElementById("div_output").innerHTML = htmldata;
}

function sort() {
    name_of_the_guest.sort();
    console.log(name_of_the_guest);
    var display_guest_sorted = [];
    display_guest_sorted.push(name_of_the_guest);
    console.log(display_guest_sorted);
    var array_sorted_list = display_guest_sorted.join(" ");
    document.getElementById("div_sort").innerHTML = array_sorted_list;
}





function search() {
    var search = document.getElementById("searched_name").value;
    var found = 0;
    for (var i = 0; i < name_of_the_guest.length; i++) {
        if (search == name_of_the_guest[i]) {
            found = found + 1;
        }
    }
    var search_output = "name found " + found + " time/s"
    document.getElementById("search_div").innerHTML = search_output;
    console.log(search_output);
}
