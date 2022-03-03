
/* Se pone el <script> en caso de que se quiera agregar código de java en el html*/ 
function validateForm()
{
    let x = document.forms["form"]["nombre"].value;
    let y = document.forms["form"]["comentario"].value;
    let z = document.forms["form"]["contraseña"].value;
    if (x == "" || y == "" || z == "")
    {
        alert("All spaces in the form must be filled out")
        return false;
    }
}
