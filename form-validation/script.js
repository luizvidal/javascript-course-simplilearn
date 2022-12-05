function validate() {
    let uname = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;

    if (uname.trim() === "" || pass.trim() === "") {
        alert('Invalid form');
        return false;
    } else if (uname === "admin" && pass === "asdf") {
        alert('Valid form');
        return true;
    }
}