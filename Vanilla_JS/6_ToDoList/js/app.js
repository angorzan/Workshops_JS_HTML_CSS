document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");


    var task_name = document.querySelector('#taskInput');
    console.log(task_name);
    var btn_add = document.querySelector('#addTaskButton');
    console.log(btn_add);
    var btn_remove_finished = document.querySelector('#removeFinishedTasksButton');
    console.log(btn_remove_finished);
    var ul = document.querySelector('#taskList');
    console.log(ul);

    var taskCounter = function () {
        var span = document.querySelector('span');
        var all_tasks = document.querySelectorAll('li');
        var done_task = document.querySelectorAll('.done');
        result = all_tasks.length - done_task.length;
        span.innerText = "Number of tasks to do: " + result;
    };
    taskCounter();


    btn_add.addEventListener("click", function () {
        var new_task = task_name.value;
        console.log(new_task);

        var new_h3 = document.createElement('h3');

        if ((new_task.length > 5) && (new_task.length < 100)) {
            new_h3.innerText = "To do: " + new_task;


            var btn_delete = document.createElement('button');
            console.log(btn_delete);
            btn_delete.innerText = "Delete";

            var btn_complete = document.createElement('button');
            console.log(btn_complete);
            btn_complete.innerText = "Complete";

            var newLi = document.createElement('li');
            ul.appendChild(newLi);

            newLi.appendChild(new_h3);
            newLi.appendChild(btn_delete);
            newLi.appendChild(btn_complete);

            btn_delete.addEventListener('click', function () {
                ul.removeChild(newLi);
                taskCounter();
            });


            btn_complete.addEventListener('click', function () {
                newLi.classList.toggle('done');
                taskCounter();
            });

        } else {
            console.log("wrong task name length");

        }
        task_name.value = "";

        taskCounter();
    });

    btn_remove_finished.addEventListener('click', function () {
        var done_task = document.querySelectorAll('.done');
        console.log(done_task);
        for (var i = 0; i < done_task.length; i++) {
            ul.removeChild(done_task[i]);

        }
        taskCounter();
    });

});



