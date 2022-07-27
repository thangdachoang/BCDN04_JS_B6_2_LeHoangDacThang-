
//BT

function soNguyenTo(){
    var n = Number(document.getElementById("soNguyenTo").value);
    var flag = true;
    var content =""
    
    for( var i=2;i<=n;i++){
        for(var j = 2; j<i;j++){
            if( i%j ==0){
                flag = false;
                break;
            }else{
                flag = true;
            }
        }
        if(flag==true){
            content += i + " ";
        }
    }

    document.getElementById("txtSoNguyenTo").innerHTML = "Dãy số nguyên tố là: " + content;
}
document.getElementById("btnSoNguyenTo").onclick = soNguyenTo;