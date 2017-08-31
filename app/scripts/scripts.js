                                $(document).ready(function(){
                                
                                            $('#newTaskForm').hide();
                                
                /* CLICK ADD BUTTON */      $('#add-todo').on('click', function() {
                                                $('#newTaskForm').fadeToggle('fast', 'linear');
                                            });
                                        
            /* CLICK CANCEL BUTTON */       $('#cancel').on('click', function(){
                                                $('#newTaskForm').fadeToggle('fast','linear');
                                            });

                /* TO DO LIST ITEMS */      var listo = [];

    /* ADD ITEMS TO "LISTO" ARRAY */        var addTask = function(task) {
                                                if(task) {
                                                    task = new Task(task);
                                                    listo.push(task);
                                                
                                                    $('#newItemInput').val('');
                                                        $('#newList').append(
                                                            '<a href="#finish" class="" id="item">' +
                                                            '<li class="list-group-item">' +
                                                            '<h3>' + task.task + '</h3>'+
                                                            '<span class="arrow pull-right">' +
                                                            '<i class="glyphicon glyphicon-arrow-right">' +
                                                            '</span>' +
                                                            '</li>' +
                                                            '</a>'
                                                        );
                                                }
                                                $('#newTaskForm').slideToggle('fast','linear');
                                                };
                                            
        /* ASSIGN "NEW" ID TO ITEM */       var Task= function(task){
                                                this.task = task;
                                                this.id = 'new';
                                            };
                                        
        /* SENDS ITEM TO NEW LIST */        $('#saveNewItem').on('click', function(e) {
                                                e.preventDefault();
                                                var task = $('#newItemInput').val().trim();
                                                addTask(task);
                                            });
                                        
    /* ASSIGNS ID TO "IN PROGRESS" */       $(document).on('click', '#item', function(e) {
                                            	e.preventDefault();
                                                var task = this;		
                                                advanceTask(task);
                                                this.id = 'inProgress';
                                                $('#currentList').append(this.outerHTML);
                                              });
                                        
    /* ASSIGNS ID TO "FINISHED" */          $(document).on('click', '#inProgress', function(e) {
                                                e.preventDefault();
                                                var task = this;
                                                task.id = "archived";
                                                var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
                                                advanceTask(task);
                                                $('#archivedList').append(changeIcon);
                                            });

        /* ASSIGNS ID TO "FINISHED" */      $(document).on('click', '#archived', function (e) {
                                                e.preventDefault();
                                                var task = this;
                                                advanceTask(task);
                                              });
                                        
    /* MOVES ITEMS OVER & REMOVES */      var advanceTask = function(task) {
                                              var modified = task.innerText.trim()
                                              for (var i = 0; i < listo.length; i++) {
                                                if (listo[i].task === modified) {
                                                  if (listo[i].id === 'new') {
                                                    listo[i].id = 'inProgress';
                                                  } else if (listo[i].id === 'inProgress') {
                                                    listo[i].id = 'archived';
                                                  } else {
                                                    listo.splice(i, 1);
                                                  }
                                                  break;
                                                }
                                              }
                                              task.remove();
                                            };
                                        
                                        
                                });