function showPopUpMenu(){
    document.getElementById('popUp').style.display='block';
    document.getElementById('mainContainer').style.filter= 'blur(8px)';
}

function ClosePopUpScreen(){
    document.getElementById('popUp').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}

function ClosePopUpScreenForCountry(){
    document.getElementById('popUpForCountry').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}

function AddNewTask(){

    let parentForFlexItem = document.getElementById('addNewlyAddedTaskHere');
    let newCardInParent  = document.createElement('div');
    let horizonatllineForEachCard = document.createElement('hr');
    let valueofCardCreated = document.getElementById('inputTaskId').value;
    let cardHeading = document.createElement('h3');
    let foootertag = document.createElement('center');
    
    let deleteButtonInsideTask = document.createElement('button');
    let plusButtonInsideTask  =document.createElement('button');

    deleteButtonInsideTask.innerText='X';
    plusButtonInsideTask.innerHTML='+';



    // Adding event for card deletion .

    deleteButtonInsideTask.addEventListener('click',removeCardFunction);


    // Adding event for Acivities ti be inserted inside Card 

    plusButtonInsideTask.addEventListener('click', AddNewTaskForCountry)

    cardHeading.textContent= valueofCardCreated;
    parentForFlexItem.appendChild(newCardInParent);
    newCardInParent.appendChild(cardHeading);
    newCardInParent.appendChild(horizonatllineForEachCard);
    newCardInParent.appendChild(foootertag)
    foootertag.appendChild(deleteButtonInsideTask);
    foootertag.appendChild(plusButtonInsideTask);

//  related to div that is added

    newCardInParent.style.height='40vh';
    newCardInParent.style.width='18vw';
    newCardInParent.style.backgroundColor='white';
    newCardInParent.className='DynamicallyAddedFlexItems';
    newCardInParent.style.borderRadius = "6px"

    newCardInParent.style.position='relative';

    // realted to heading that is added 
    cardHeading.style.textAlign='center';
    cardHeading.style.color="Orange";
    cardHeading.style.font="Arial";
    cardHeading.style.fontSize="1.5em";
    cardHeading.style.textShadow="0.2px 0.2px 0.83px grey";


    // related to delete and plus buton 

    deleteButtonInsideTask.style.width='20%';
    deleteButtonInsideTask.style.height='10%';
    deleteButtonInsideTask.style.position='absolute';
    deleteButtonInsideTask.style.bottom='10px';
    deleteButtonInsideTask.style.backgroundColor='lightgreen';
    deleteButtonInsideTask.style.color='white';
    deleteButtonInsideTask.style.borderRadius='5px';



    plusButtonInsideTask.style.width='20%';
    plusButtonInsideTask.style.height='10%';
    plusButtonInsideTask.style.position='absolute';
    plusButtonInsideTask.style.bottom='10px';
    plusButtonInsideTask.style.right='10px';
    plusButtonInsideTask.style.backgroundColor='skyblue';
    plusButtonInsideTask.style.color='white';
    plusButtonInsideTask.style.borderRadius='5px';

    //
    

    document.getElementById('popUp').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}


function removeCardFunction(){
    
    this.parentElement.parentElement.remove();
}

function addActivitesInsideCard(){

    document.getElementById('popUpForCountry').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';


    
    console.log("Hello this is adding actitvity inside card");
     //console.log(ele);
}

function AddNewTaskForCountry(){

    document.getElementById('popUpForCountry').style.display='block';
    document.getElementById('mainContainer').style.filter= 'blur(8px)'; 
    
    
    // var hrel = this.parentElement.previousElementSibling;

    ouetr:
    var hrel = this.parentElement.parentElement;
    console.log("add button for country invoked ", hrel);

    document.getElementById('addButtonPopUpScreenForCountry').addEventListener('click',()=>{

        document.getElementById('popUpForCountry').style.display='none';
        document.getElementById('mainContainer').style.filter= 'blur(0px)';

        let divActivityCard = document.createElement('div');
        let activitybox = document.createElement('span');
        let markDoneButton = document.createElement('button');
        let activityValue = document.getElementById('inputTaskIdForCountry').value; 

        activitybox.textContent = activityValue;

        divActivityCard.appendChild(activitybox);
        divActivityCard.appendChild(markDoneButton);
        hrel.appendChild(divActivityCard);

        console.log("input value fo country is : ", activityValue);

        console.log('inside anonymous function : ', hrel);
        hrel =' ';
        return  ;
    })

    
 ;

    }

