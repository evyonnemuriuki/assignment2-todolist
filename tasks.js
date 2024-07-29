document.addEventListener("DOMContentLoaded",function(){
    //query for submit button and input task field
    const submit = document.querySelector("#submit");
    const newTask = document.querySelector("#task");
    const tasks = document.querySelector("#tasks");
    //disable submit button by default
    submit.disabled = true;

    //listen for input to be typed into the task field
    newTask.addEventListener("input",nullValidator);
    function nullValidator(){
    //newTask.onkeyup = function nullValidator(){
        if(newTask.value.length > 0){
        submit.disabled = false;
        }
        else{
        submit.disabled = true;
        }
    }
    //listen for submission of form
    document.querySelector("form").addEventListener("submit",function(event){
        event.preventDefault();
        //find the task the user just submitted
        const taskValue = newTask.value.trim();
        if (taskValue){
            //create a new list for the new task and add the task to it
            const newList = document.createElement('li');
            newList.innerHTML = taskValue;
            
            //add new element to our unordered list
            tasks.appendChild(newList);

            //Clear input field and disable submit button
            newTask.value = "";
            submit.disabled = true;
        }
        
        //prevents the default submission of the form which involves either 
        //reloading the current page or redirecting to a new one
        return false;
    });
});
