document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#tasks-form');
    const tasks_list = document.querySelector('#tasks');
    const user_input = document.querySelector('#new-task-input');
    form.addEventListener('submit', function(event){
        //prevent the form from submitting
        event.preventDefault();

        const task = document.querySelector('#new-task-input').value;

        if(!task) {
            alert('Please write a task!');
            return;
        }

            //create the div with task class
            const task_div = document.createElement('div');
            task_div.classList.add("task");

            //create the div with the content class
            const task_content = document.createElement('div');
            task_content.classList.add("content");

            //put the 2nd div in the 1st div
            task_div.appendChild(task_content);

           //task field
           const new_task = document.createElement('input');
           new_task.classList.add("new-task");
           new_task.type = "text";
           new_task.value = task;
           new_task.setAttribute("readonly", "readonly");

           //put the task field in the 2nd div
           task_content.appendChild(new_task);

           //create the 3rd div
           const task_actions = document.createElement('div');
           task_actions.classList.add("actions");

           //edit and delete buttons
           const edit_button = document.createElement('button');
           edit_button.classList.add("edit-task-button");
           edit_button.innerText = 'edit';
           const delete_button = document.createElement('button');
           delete_button.classList.add("delete-task-button");
           delete_button.innerText = 'delete';

           //put the edit and delete buttons in the 3rd div
           task_actions.appendChild(edit_button);
           task_actions.appendChild(delete_button);

           //put the 3rd div in the 1st div
           task_div.appendChild(task_actions);

           //put the 1st div, that contains all your created components, in the DOM
           tasks_list.appendChild(task_div);

           //empty input field after submitting task

           user_input.value = "";

           edit_button.addEventListener('click', () => {
               if (edit_button.innerText == "edit") {
                   new_task.removeAttribute("readonly");
                   new_task.focus();
                   edit_button.innerText = "save";
               } else {
                   new_task.setAttribute("readonly", "readonly");
                   edit_button.innerText = "edit";
               }
           });

           delete_button.addEventListener('click', () => {
               tasks_list.removeChild(task_div);
           })

        });


});