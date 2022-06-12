
let randomize_array = document.getElementById("randomize_array_btn")
let sort_btn = document.getElementById("sort_btn")
let bars_container = document.getElementById("bars_container")
let typeSort = document.getElementById("typeSort").getAttribute('value');


var speed = document.getElementById("slider2");
var speedOfSort = document.getElementById("value2");
speedOfSort.innerHTML = "0";

speed.oninput = function() {
    console.log(currRun)
    console.log("updatedspeed)");
    speedOfSort.innerHTML = this.value;

}

var slider = document.getElementById("slider");
var output = document.getElementById("value")

let minRange = 1;
let maxRange = 20;


let currRun = false;
let unsorted_array = new Array(20);


//makeRandomArray(20);


output.innerHTML = "20";
let numOfBars = 20;
slider.oninput = function() {
    if (currRun == false)
    {
        bars_container.innerHTML = "";
        output.innerHTML = this.value;
        numOfBars = output.innerHTML;
        unsorted_array = new Array(numOfBars);
        makeRandomArray(output.innerHTML);
        renderBars(unsorted_array);
    }

    
}
let mergeResult = new Array(output.innerHTML);

//renderBars(unsorted_array);




function randomizeNum(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function makeRandomArray(num)
{
    for (let i = 0; i < num; i++)
    {
        unsorted_array[i] = randomizeNum(minRange, maxRange);
    }
}



document.addEventListener("DOMContentLoaded", function () {
    makeRandomArray(20);
    renderBars(unsorted_array);
    
});


async function renderBars(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let bar = document.createElement("div");
        bar.classList.add("bar")
        bar.style.height = array[i] * 30 + "px";
        bar.style.width = 900/numOfBars + "px";
        console.log(bar.style.width);
        bars_container.appendChild(bar);
        bar.style.backgroundColor = "#a2b1b9";

    }
}



randomize_array.addEventListener("click", function () {
    console.log(currRun);
    if (currRun == false)
    {
        makeRandomArray(numOfBars);
        console.log("1");
        bars_container.innerHTML = "";
        console.log("2");
        renderBars(unsorted_array);
        console.log("3");
    }
});

function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) 
{
    console.log("SPEEEEEEEEEEED: " + speedOfSort.innerHTML)
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array.length - i - 1; j++)
        {
            if (array[j] > array[j+1])
            {   
                for (let k = 0; k < bars.length; k++)
                {
                    if (k !== j && k !== j + 1)
                    {
                        bars[k].style.backgroundColor = "#a2b1b9";
                    }
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp
                bars[j].style.height = array[j] * 30 + "px";
                bars[j].style.backgroundColor = "#4fcdb9";
                bars[j+1].style.height = array[j+1] * 30 + "px";
                bars[j+1].style.backgroundColor = "#4fcdb9";
                await sleep(speedOfSort.innerHTML);
            }
        }
        await sleep(speedOfSort.innerHTML);
    currRun = false;
    return array;
}




async function selectionSort(array) 
{
    console.log(array);
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length-1; i++)
    {
        bars[i].style.backgroundColor = "#4fcdb9";
        var min = array[i];
        var pos = i;
        console.log(array[i]);
        for (let j = i+1; j < array.length; j++)
        {
            
            for (let k = 0; k < bars.length; k++)
                {
                    if (k !== j)
                    {
                        bars[k].style.backgroundColor = "#a2b1b9";
                    }
                }
            
            if (array[j] < min)
            {
                console.log(array[i]);
                console.log(min);
                min = array[j];
                pos = j;
            }
            
            
        }
        let temp = array[pos];
        array[pos] = array[i];
        array[i] = temp;
        bars[pos].style.height = array[pos] * 30 + "px";
        bars[pos].style.backgroundColor = "#4fcdb9";
        bars[i].style.height = array[i] * 30 + "px";
        bars[i].style.backgroundColor = "#4fcdb9";
        await sleep(speedOfSort.innerHTML);
        
    }
    await sleep(speedOfSort.innerHTML);
    console.log(array)
    currRun = false;
    return array;
}




async function insertionSort(array)
{
    //console.log("SPEEEEEEEEEEED: " + speedOfSort.innerHTML)
    let bars = document.getElementsByClassName("bar");
    for (let i = 1; i < array.length; i++)
    {
        
        
            
        var temp = array[i];
        var j = i-1;
        while ((j >= 0) && (array[j] > temp))
        {
            bars[i].style.backgroundColor = "#4fcdb9";
            
            for (let k = 0; k < bars.length; k++)
            {
                    if (k != j && k != i)
                    {
                        bars[k].style.backgroundColor = "#a2b1b9";
                    }
            }
            //bars[j+1].style.backgroundColor = "#4fcdb9";
            array[j+1] = array[j];
            bars[j+1].style.height = array[j] * 30 + "px"; 
            bars[j].style.backgroundColor = "#4fcdb9";
            
            j--;
            console.log("in loop");
        }
        array[j+1] = temp;
        bars[j+1].style.height = temp * 30 + "px";
        await sleep(speedOfSort.innerHTML);
        //console.log("upda1te")
    }
    await sleep(speedOfSort.innerHTML);
    currRun = false;
    return array;
    
}







async function mergeArray(start, end) {
    let bars = document.getElementsByClassName("bar");
    let mid = parseInt((start + end) >> 1);
    let start1 = start;
    let start2 = mid + 1;
    let end1 = mid, end2 = end;
     
    let index = start
 
    while (start1 <= end1 && start2 <= end2) {
        if (unsorted_array[start1] <= unsorted_array[start2]) {
            mergeResult[index] = unsorted_array[start1]
            bars[index].style.backgroundColor = "#4fcdb9";
            index = index + 1
            start1 = start1 + 1;
        }
        else if(unsorted_array[start1] > unsorted_array[start2]) {
            mergeResult[index] = unsorted_array[start2]
            bars[index].style.backgroundColor = "#4fcdb9";
            index = index + 1
            start2 = start2 + 1;
        }
    }
 
    //takes over remaining
    while (start1 <= end1) {
        mergeResult[index] = unsorted_array[start1]
        bars[index].style.backgroundColor = "#0f6189";
        index = index + 1
        start1 = start1 + 1;
    }
 
    while (start2 <= end2) {
        mergeResult[index] = unsorted_array[start2]
        bars[index].style.backgroundColor = "#0f6189";
        index = index + 1
        start2 = start2 + 1;
    }
 
    index = start
    while (index <= end) {
        bars[index].style.height  = mergeResult[index] * 30 + "px";
        
        unsorted_array[index] = mergeResult[index];
        index++;
    }
}




async function mergeSort(start, end)
{
    
    console.log(unsorted_array);
    if (start < end) {
        let mid = parseInt((start + end) >> 1)
        await mergeSort(start, mid)
        await mergeSort(mid + 1, end)
        await mergeArray(start, end)
        await sleep(speedOfSort.innerHTML)
        console.log(unsorted_array);
    }
    
    console.log(unsorted_array);

}








sort_btn.addEventListener("click", function () {
    currRun = true;
    console.log(currRun)
    console.log(typeSort)
    if (typeSort == "bubble")
    {
        let sorted_array = bubbleSort(unsorted_array);;
    }
    if (typeSort == "selection")
    {
        let sorted_array = selectionSort(unsorted_array);
    }
    if (typeSort == "insertion")
    {
        let sorted_array = insertionSort(unsorted_array);
    }
    if (typeSort == "merge")
    {

        console.log(unsorted_array);
        let sorted_array = mergeSort(0, unsorted_array.length-1);
        currRun = false;
        console.log(sorted_array);
    }
    console.log(currRun)
});