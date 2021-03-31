var count = 3;
const addRow = () =>{
    count++;
    $('tbody').append(
        `<tr id="row${count}">
        <th scope="row">${count}</th>
        <td><span contenteditable></span></td>
        <td><span>$</span><span contenteditable="true" class="money money${count}" onkeyup="calculateSubtotal(${count})">000.00</span></td>
        <td><span onclick="quantityMinus(${count})"><i class="fas fa-minus-square"></i></span><span class="qty qty${count}">1</span><span onclick="quantityPlus(${count})"><i class="fas fa-plus-square"></i></span></td>
        <td><span>$</span><span class="subTotal subTotal${count}"></span></td>
      </tr>`
    )
    calculateSubtotal(count);
    // calculateTotal();
}
const quantityPlus = (key) =>{
    let a = $(`.qty${key}`).text();
    a = parseInt(a);
    a += 1;
    $(`.qty${key}`).text(a);
    calculateSubtotal(key);
    // calculateTotal();
}
const quantityMinus = (key) =>{
    let a = $(`.qty${key}`).text();
    a = parseInt(a);
    a -= 1;
    if(a<1){
        $(`#row${key}`).remove();
    }
    $(`.qty${key}`).text(a);
    calculateSubtotal(key);
}
const calculateSubtotal = (key)=>{
    let a = $(`.qty${key}`).text();
    a = parseInt(a);
    let b = $(`.money${key}`).text();
    b = parseInt(b);
    let subTotal = a*b;
    $(`.subTotal${key}`).text(a*b);
    let subTotals=$('.subTotal');
    let total = 0;
    for(let i=0; i<subTotals.length;i++){
        let c = subTotals.eq(i);
        let d = c.html();
        let e = parseInt(d);
        total += e;
    }
    $('.total').text(total);
    console.log(a*b);
}

calculateSubtotal(1);
calculateSubtotal(2);
calculateSubtotal(3);


// const calculateTotal = () => {
//     let subTotals=$('.subTotal');
//     let total = 0;
//     for(let i=0; i<subTotals.length;i++){
//         let a = subTotals.eq(i);
//         let b = a.html();
//         let c = parseInt(b);
//         total += c;
//     }
//     $('.total').text(total);
// }
// calculateTotal();
$('span[contenteditable]').keydown(function(e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
        // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
        document.execCommand('insertHTML', false, '<br/>');
        // prevent the default behaviour of return key pressed
        return false;
    }
});