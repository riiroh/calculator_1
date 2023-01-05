
{
    //const num_btn = document.getElementsByClassName('num_btn');
    //num_btn[3].addEventListener('click', function() {
    //    console.log(num_btn[3].textContent);
    //})
    //num_btn[3].addEventListener('click', () => {console.log(num_btn[3].textContent);})

    //for (let i=0;i<num_btn.length;i++){
    //    num_btn[i].addEventListener('click', ()=> {
    //        console.log(num_btn[i].textContent);
    //    })
    //}

    const num_btn = document.querySelectorAll('.num_btn');
    let total=0000;
    num_btn.forEach(index => {
        index.addEventListener('click', ()=>{
            //console.log(index.textContent);
            //console.log(index.dataset.indexId);
            output_total.textContent = 0;
            if(total===0){
                total = index.dataset.indexId;
            }else{
                total += index.dataset.indexId;
            }
            
            console.log(total);
            output_formula.textContent = total;
        })
    })

    const equal_btn = document.getElementById('equal_btn');
    equal_btn.addEventListener('click', ()=>{
        console.log(eval(total));
        output_total.textContent = eval(total);
        total = 0;
    })


    const number = document.getElementsByClassName('btn2')
    for(let j=0;j<number.length;j++){
        number[j].addEventListener('click',
        function(){
            console.log(number[j].textContent);
        })
    }

}