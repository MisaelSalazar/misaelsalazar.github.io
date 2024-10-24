function navbar(content){

    document.write(
        "<nav class = 'navbar is-success p-6'>"+
            
            content+

        "</nav>"
    )

}
function header(){

    return (
        
        navbar(
            "<h1 class='title has-text-centered'>Misael Salzar</h1>"
        )
    )

}
header()