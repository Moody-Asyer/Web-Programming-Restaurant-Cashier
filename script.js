// add data
function tambahPesanan(){
    var makanan = document.getElementById("makanan").value,
        jumlah = document.getElementById("jumlah").value,
        harga = document.getElementById("harga").value;

    if (makanan == "" || jumlah == "" || harga == ""){
        alert("Silakan Melengkapi input pesanan terlebih dahulu.")
    }
    else{ 
        var table = document.getElementById("table_1"),
        new_row = table.insertRow(table.length),
        cell_1 = new_row.insertCell(0),
        cell_2 = new_row.insertCell(1),
        cell_3 = new_row.insertCell(2);

        cell_1.innerHTML = makanan;
        cell_2.innerHTML = jumlah + "*" + harga;
        cell_3.innerHTML = jumlah*harga;

        var sumValue = 0;
        for(var i = 1; i < table.rows.length; i++)
        {
            sumValue = sumValue + parseInt(table.rows[i].cells[2].innerHTML);
        }
        document.getElementById("total").innerHTML = sumValue;
    }
}

//live clock
function liveClock(){
    var clock = new Date(),
        hours = clock.getHours(),
        minutes = clock.getMinutes(),
        seconds = clock.getSeconds(),

        amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("time").innerHTML = 
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(liveClock, 500);
}

// today's date
function getDate(){
    var day = new Date(),
        year = day.getFullYear(),
        month = day.getMonth()+1,
        date = day.getDate();

    month = ("0" + month).slice(-2);
    date = ("0" + date).slice(-2)

    document.getElementById("tanggal_laporan").innerHTML = 
        "Laporan Keuangan <br/>" + date + "/" + month + "/" + year
}

// update laporan
function checkOut(){
    var totalBayar = parseInt(document.getElementById("total").innerHTML),
        cash = parseInt(document.getElementById("cash").innerHTML);

    document.getElementById("cash").innerHTML = cash + totalBayar;
    
    var fromTable = document.getElementById("table_1"),
        newCash = parseInt(document.getElementById("cash").innerHTML),
        transfer = parseInt(document.getElementById("tf").innerHTML),
        makanan = document.getElementById("makanan"),
        jumlah = document.getElementById("jumlah"),
        harga = document.getElementById("harga"),
        enter = document.getElementById("enter"),
        check_out = document.getElementById("check_out"),
        targetTable = document.getElementById("table_4"),
        clock = new Date(),
        hours = clock.getHours(),
        minutes = clock.getMinutes(),
        amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    if (newCash >= 1000000){


        for(var i = 0; i < fromTable.rows.length - 1; i++)
        {
            var newRow = targetTable.insertRow(targetTable.length),
                cell_1 = newRow.insertCell(0),
                cell_2 = newRow.insertCell(1),
                cell_3 = newRow.insertCell(2);
                            
            cell_1.innerHTML = hours + ":" + minutes + " " + amPm;
            cell_2.innerHTML = fromTable.rows[i+1].cells[0].innerHTML;
            cell_3.innerHTML = fromTable.rows[i+1].cells[2].innerHTML;

            var index = fromTable.rows[i+1].rowIndex;
            fromTable.deleteRow(index);
            i--;
        }

        document.getElementById("table_4").innerHTML += `
            <tr style="background-color:rgb(0, 255, 166)">
                <td>${hours + ":" + minutes + " " + amPm}</td>
                <td colspan="2"><label id="label">Setor ke Bank kelipatan 1 Juta</label></td> 
            </tr>
        `;

        var diClick = false;

        makanan.disabled = true;
        jumlah.disabled = true;
        harga.disabled = true;
        enter.disabled = true;
        check_out.disabled = true;
        
        document.getElementById("label").addEventListener("click", function(){
            diClick = true;
            this.removeAttribute("id");
            if (diClick){
                if (parseInt(document.getElementById("cash").innerHTML) % 1000000 == 0){
                    document.getElementById("tf").innerHTML = transfer + newCash;
                    document.getElementById("cash").innerHTML = 0;
                    document.getElementById("total_masuk").innerHTML = parseInt(document.getElementById("cash").innerHTML) + parseInt(document.getElementById("tf").innerHTML);

                    this.innerHTML = "Setor ke Bank" + " " + (newCash/1000000) + " " + "JUTA";
                }
                else{
                    document.getElementById("tf").innerHTML = transfer + newCash - (newCash % 1000000);
                    document.getElementById("cash").innerHTML = newCash % 1000000;
                    document.getElementById("total_masuk").innerHTML = parseInt(document.getElementById("cash").innerHTML) + parseInt(document.getElementById("tf").innerHTML);

                    this.innerHTML = "Setor ke Bank" + " " + ((newCash - (newCash % 1000000))/1000000) + " " + "JUTA";
                } 
                makanan.disabled = false;
                jumlah.disabled = false;
                harga.disabled = false;
                enter.disabled = false;
                check_out.disabled = false;
            }
            
        });
        document.getElementById("total").innerHTML = 0;
    }
    else{
        document.getElementById("total").innerHTML = 0;
        document.getElementById("total_masuk").innerHTML = parseInt(document.getElementById("cash").innerHTML) + parseInt(document.getElementById("tf").innerHTML);
        
        for(var i = 0; i < fromTable.rows.length - 1; i++)
        {
            var newRow = targetTable.insertRow(targetTable.length),
                cell_1 = newRow.insertCell(0),
                cell_2 = newRow.insertCell(1),
                cell_3 = newRow.insertCell(2);
                    
            cell_1.innerHTML = hours + ":" + minutes + " " + amPm;
            cell_2.innerHTML = fromTable.rows[i+1].cells[0].innerHTML;
            cell_3.innerHTML = fromTable.rows[i+1].cells[2].innerHTML;

            var index = fromTable.rows[i+1].rowIndex;
            fromTable.deleteRow(index);
            i--;
        }
    }
}   