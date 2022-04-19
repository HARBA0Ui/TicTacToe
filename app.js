



const title = document.querySelector('.title')
let squares = []

function winner(item1, item2, item3){
    document.getElementById('item'+item1).style.background = "black"
    document.getElementById('item'+item2).style.background = "black"
    document.getElementById('item'+item3).style.background = "black"

    document.getElementById('item'+item1).style.color = "white"
    document.getElementById('item'+item2).style.color = "white"
    document.getElementById('item'+item3).style.color = "white"
    title.innerHTML = squares[item1]+" Winner"

    setInterval(function(){title.innerHTML += "."},700)
    setTimeout(() => {
        location.reload()
    }, 2200);
}

function check(){
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById("item"+i).innerHTML    
    }
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] != ""){
        console.log('shake and bake')
        winner(1,2,3)

    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4] != ""){
        console.log('shake and bake')
        winner(4,5,6)


    }
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7] != ""){
        console.log('shake and bake')
        winner(7,8,9)


    }
    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1] != ""){
        console.log('shake and bake')
        winner(1,4,7)


    }
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2] != ""){
        console.log('shake and bake')
        winner(2,5,8)


    }
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3] != ""){
        console.log('shake and bake')
        winner(3,6,9)


    }
    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1] != ""){
        console.log('shake and bake')
        winner(1,5,9)


    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3] != ""){
        console.log('shake and bake')
        winner(3,5,7)
    }
}

let turn = "x"
function game(id){
    let element = document.getElementById(id)
    if (turn == "x" && element.innerHTML == ""){
        element.innerHTML = "X"
        turn = "o"
        title.innerHTML='O'
        title.style.color = "tomato"
    }
    else if (turn == "o" && element.innerHTML == ""){
        element.innerHTML = "O"
        turn = "x"
        title.innerHTML='X'
    }
    check()
}






















