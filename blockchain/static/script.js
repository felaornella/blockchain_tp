passwords={
    "-1":"98be662d29e8a408ab5934974597411d4a65a14adaa75feaa380b9489a0ca10e",
    "1":"98be662d29e8a408ab5934974597411d8fe470e27d926cff5dc3756de3901b21",
    "2":"215711fc640d6753a60027ba71f07b18b9f77b867e04aeacaf23907d8cc42def",
    "3":"181038f416862b257c8668a8ecba9d014a65a14adaa75feaa380b9489a0ca10e"
}

function closeModal(){
    $("#myModal").modal("toggle")
}

function testNonce(){
    document.getElementById("wrongBtn").hidden=true
    document.getElementById("footer").hidden=true
    $(".hashspan").css("color","black")
    $(".hashspan").css("font-weight","400")


    $("#myModal").modal("toggle")
    let nonce = $("#nonce").val()
    var password = passwords[nonce].substring(0,32)
    var password2 = passwords[nonce].substring(32)
    var characters = [];
    var characters2 = [];
    var counter = 0;

    var interval = setInterval(function(){
            for(i = 0; i < counter; i++) {
                characters[i] = password.charAt(i);
                characters2[i] = password2.charAt(i);
            }
            for(i = counter; i < password.length; i++) {
                characters[i] = Math.random().toString(36).charAt(2);
                characters2[i] = Math.random().toString(36).charAt(2);
            }
            $('#hash').text(characters.join(''));
            $('#hash2').text(characters2.join(''));
            if(i!=password.length){
                clearInterval(interval2)
                clearInterval(interval)
                document.getElementById("footer").hidden=false
                
                if(nonce != "3"){
                    $(".hashspan").css("color","red")
                    $(".hashspan").css("font-weight","bold")
                    document.getElementById("wrongBtn").hidden=false
                }else{
                    $(".hashspan").css("color","green")
                    $(".hashspan").css("font-weight","bold")
                    document.getElementById("passCont").hidden=false
                    document.getElementById("broadText").hidden=false

                    setTimeout(()=>{
                        document.getElementById("broadText").hidden=true
                        document.getElementById("toBlockchain").hidden=false
                        
                        setTimeout(()=>{
                            document.getElementById("toBlockchain").hidden=true
                            $("#myModal").modal("toggle")
                            
                            animation2()

                        },5000)
                    },5000)
                }

            }
        }, 25);
        
    var interval2 = setTimeout(function(){
        setInterval(function(){
            counter++;
        },250)
    },5000)
}


function animation2(){
    $("#newBlock").hide(1500)
    document.getElementById("blockchain").className = "blockchainMain"
    document.getElementById("imgBloc").className = "visible imgBlocMain" 
    document.getElementById("imgBloc2").className = "hidden imgBlocMain"
    document.getElementById("imgBloc3").className = "hidden imgBlocMain"
    document.getElementById("imgBloc4").className = "hidden imgBlocMain"
    setTimeout(()=>{        
        document.getElementById("imgBloc2").className = "visible"
        setTimeout(()=>{
            document.getElementById("imgBloc3").className = "visible"
            setTimeout(()=>{
                document.getElementById("imgBloc3").className = "hidden"
                document.getElementById("imgBloc4").className = "visible"
                setTimeout(()=>{
                    document.getElementById("blockchain").className = "blockchainFinalHidden"
                    
                    setTimeout(()=>{
                        document.getElementsByTagName("body")[0].style.alignItems="center"
                        document.getElementById("endingSing").className = "visible2"
                        document.getElementById("endingSing").classList.add("row")
                    },2500)

                },4000)
            },4000)
        },2000)
    },7000)

}
