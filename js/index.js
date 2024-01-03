var columns = ['Name','Place','Animal','Thing','Actor','Actress']

let dataObj = [
    {
        name:"Gowtham",
        place:"Gujarath",
        animal:"Giraffee",
        thing:"Gate"
    },
    {
        name:"Pandu",
        place:"Pakistan",
        animal:"Peacok",
        thing:"Pen"
    }
]

function welcomeText()
{
    let html='Lets Play ';
    columns.forEach((c,index)=>{
        // html+=' '+c;
        if(index!=columns.length-1)
        html+=c+', ';
        else
        html+=c+'.';
    })
    
    //call back function
    $('.welcome-text h1').html(html); 
}
    

function renderTable()
{
    // let html='';
    columns.map((c,index)=>{
        $("#table-heading").append(`<th>${c}</th>`);
    });

    dataObj.map((d,index)=>{
        html = '';
        $($('table')[0]).append(`
            <tr> 
                <td>${d.name} </td>
                <td>${d.place} </td>
                <td>${d.animal} </td>
                <td>${d.thing} </td>
            </tr>
            
            `);
    })

    
}



    $(document).ready(function(){    //main DOMReady function
        
        welcomeText();      
        renderTable();

    })


    