$(document).ready(function() {

  /* TEMPORARY: FOR ADDING COMPONENTS */
  $('.v-add-component .dropdown-item').on('click', function() {
    if ($(this).hasClass('v-widget')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Widget</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }
    else if ($(this).hasClass('v-api')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">API</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }
    else if ($(this).hasClass('v-excel')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Excel</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }
    else if ($(this).hasClass('v-notification')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Notification</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }
    else if ($(this).hasClass('v-table')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Table</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }
    else if ($(this).hasClass('v-filter')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Filter</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }  
    else if ($(this).hasClass('v-code')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Code</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    } 
    else if ($(this).hasClass('v-client')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Client</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    }   
    else if ($(this).hasClass('v-database')) {
      $(this).parents('.v-add-component').prev('.v-component-line').append('<a class="v-component" href="#">Database</a>');
      $(this).parents('.v-workflow-components').next('.v-workflow-defaults').find('.btn-primary').removeClass('disabled');
    } 
  });

  /* TEMPORARY: FOR ADDING COMPONENTS */
  $('.v-add-component2 .dropdown-item').on('click', function() {
    if ($(this).hasClass('v-widget')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Widget<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }
    else if ($(this).hasClass('v-api')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">API<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }
    else if ($(this).hasClass('v-excel')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Excel<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }
    else if ($(this).hasClass('v-notification')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Notification<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }
    else if ($(this).hasClass('v-table')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Table<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }
    else if ($(this).hasClass('v-filter')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Filter<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    } 
    else if ($(this).hasClass('v-code')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Code<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    } 
    else if ($(this).hasClass('v-client')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Client<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }  
    else if ($(this).hasClass('v-database')) {
      $(this).parents('.nav-item').before('<li class="nav-item"><a class="nav-link" id="" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false">Database<i class="fas fa-expand-arrows-alt"></i></a><a class="v-delete-component" href="#"><i class="far fa-trash-alt"></i></a></li>');
    }   
  });




  /* TEMPORARY: ADD API */
  $('.v-editor-main-header').on('click','.v-add-api', function() {
      $('.add-api-before-this').before('<div class="v-select-api add-api"><div class="v-select-api-head"><h3>Add API</h3></div><div class="v-select-api-search"><div class="form-group"><label for="select-1">Source</label><select class="form-control" id="select-1"><option>Select soure</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div><div class="form-group"><label for="select-1">Category</label><select class="form-control" id="select-1"><option>Select soure</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div><div class="form-group"><label for="select-1">Program</label><select class="form-control" id="select-1"><option>Select soure</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div><div class="form-group"><label for="select-1">Transaction</label><select class="form-control" id="select-1"><option>Select soure</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class="v-select-api-actions"><a href="#" class="btn btn-primary v-change-api">Add API</a><a href="#" class="btn btn-outline-primary v-cancel-app-api">Cancel</a></div></div>');
      $('.v-editor-main-content').scroll();
      $('.v-editor-main-content').animate({
        scrollLeft: 1000
      }, 1000);

  });


  /* TEMPORARY: ADD NEW API */
  $('.v-editor-main-content').on('click','.v-change-api', function() {
      $(this).parents('.v-select-api').replaceWith('<div class="v-select-api"><div class="v-select-api-actions"><a href="#">View</a><a href="#" class="v-cancel-app-api">Delete</a></div><div class="v-select-api-head"><h3 title="Get item price">Brand New API</h3><h4>MMS200MI > GetIemPrice</h4></div><div class="v-select-api-search">  <div class="form-group"><label for="api-search" class="sr-only">Search</label><input type="search" class="form-control v-autocomplete" id="api-search" aria-describedby="apiSearch" placeholder="Filter"></div></div><div class="v-select-api-list"><h3 class="v-showhide">Mapped (6) <i class="fas fa-chevron-down"></i></h3><ul><li><a href="#" class="v-toggle-aside" name="sidebar1">Bonus generating</a></li><li><a href="#" class="v-toggle-aside" name="sidebar2">Language</a></li><li><a href="#" class="v-toggle-aside" name="sidebar3">Lot numbering method</a></li><li><a href="#">Discount group item</a></li><li><a href="#">Discount group item</a></li><li><a href="#">Discount group item </a></li></ul><h3 class="v-showhide">Inputs (2) <i class="fas fa-chevron-down"></i></h3><ul><li><a href="#">User-defined accounting control</a></li><li><a href="#">Bonus group</a></li></ul><h3 class="v-showhide">Outputs (20) <i class="fas fa-chevron-down"></i></h3><ul><li><a href="#">Generate txt from text template</a></li><li><a href="#">Acceptence group</a></li><li><a href="#">Active or catch weight item</a></li><li><a href="#">Alternate U/M in use</a></li><li><a href="#">Attribute managed</a></li><li><a href="#">Company</a></li><li><a href="#">Allocated quantity basic U/M</a></li><li><a href="#">Item number</a></li><li><a href="#">Fear Language</a></li><li><a href="#">Discount group item</a></li><li><a href="#">Discount group item</a></li><li><a href="#">Discount group item</a></li><li><a href="#">Discount group item</a></li><li><a href="#">Product group</a></li><li><a href="#">Currency</a></li><li><a href="#">Currency sales price</a></li><li><a href="#">Alternate U/M in use: Mexico</a></li><li><a href="#">Description purchase price U/M</a></li><li><a href="#">Allocated quantity basic U/M</a></li><li><a href="#">Allocatable net</a></li></ul></div></div>');
  });


  /* TEMPORARY: CANCEL ADD NEW API */
  $('.v-editor-main-content').on('click', '.v-cancel-app-api', function() {
      $(this).closest('.v-select-api').hide();
  });

  $('.v-add-user').on('click', function() {
    $(this).prev('.table').find('tbody').append('<tr><td><div class="form-group"><label for="InputEmail1" class="sr-only">Email address</label><input type="email" class="form-control" id="InputEmail1" placeholder="Enter email"></div></td><td><div class="form-group"><label for="userName" class="sr-only">Email address</label><input type="text" class="form-control" id="userName" placeholder="Enter name"></div></td><td><div class="form-group"><label for="user-role" class="sr-only">Permission</label><select class="form-control" id="user-role"><option>Can write</option><option>Can&apos;t write</option><option>Admin</option></select></div>                    </td></tr>');
  });

  $('.v-add-users').on('click', function() {

    $('.v-general-main-content .table tbody').append('<tr><td><span class="v-wannabe-link" data-toggle="modal" data-target="#edit-user">Aske Ladden</span></td><td>askeladden@companymail.com</td><td><div class="form-group"><label for="user-role" class="sr-only">Role</label><select class="form-control"><option>Can write</option><option selected="select">Cant write</option><option>Admin</option></select></div></td></tr>');

  });


  /* TEMP: add users */
  $('.v-add-users').on('click', function() {

    if ($('.alert-primary').hasClass('show')) {
      $(this).removeClass('v-no-show');
    }
    else {
      $('.alert-primary').addClass('show').removeClass('v-no-show');
    }

    if ($('.v-general-main').length == 1) {

      /* Make toolbar bottom-sticky if content bigger than window */
      var elementPosition = $('.v-general-main-toolbar').offset().top;
      var windowHeight = $(window).height() - 108;

      if (elementPosition >= windowHeight) {
        $('.v-general-main-toolbar').addClass('v-sticky');
      } 

    }
   
  });


  /* TEMP: Add hook for delete to work */
  $('.v-general-main-content').on('click','.v-wannabe-link', function() {
    $('.v-wannabe-link').parents('tr').removeClass('v-active-user');
    $(this).parents('tr').addClass('v-active-user');
  });
  $('.v-delete-user').on('click', function() {
    $('.v-active-user').remove();
  });
  
  /* TEMP: Add hook for delete to work */
  $('.v-list-list').on('click','.v-dummy-hook', function() {
    $('.v-list-list li').removeClass('v-active-billing');
    $(this).parents('li').addClass('v-active-billing');
  });
  $('.v-delete-billing').on('click', function() {
    $('.v-active-billing').fadeOut();
  });

  /* EDITOR: temporary. When changing name in input, update name in left sidebar */
  $('input.v-change-workflow-name').on('change', function() {
    var newName = $(this).val();
    $('.v-trigger-settings').html(newName);
  });


  /* EDITOR: ṉot in use. When click headline/name in editor, that opens correct tab for edit */
  $('.nav-tabs').on('click', '.v-delete-component', function() {
    $(this).parent('.nav-item').remove();
  });


});