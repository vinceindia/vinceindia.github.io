$(document).ready(function() {


  /*
  --------------------------------------
  EDITOR-SPECIFIC FUNCTINS
  --------------------------------------
  */


  /* EDITOR: show/hide left sidebar (v-editor-header) in editor */
  $('.v-editor-header-toggle').on('click', function() {
    $('header.v-editor-header').toggleClass('v-hidden');
  });


  /* EDITOR: show/hide tab-specific right sidebar (.v-aside.v-fixed) */
  $('.v-editor-aside-fixed-toggle').on('click', function() {
    $(this).parents('aside.v-fixed').toggleClass('v-hidden'); 

    if ($(this).parents('aside.v-fixed').prev('.v-editor-main').hasClass('v-hidden')) {
      $(this).parents('aside.v-fixed').prev('.v-editor-main').removeClass('v-hidden');
    }
    else {
      $(this).parents('aside.v-fixed').prev('.v-editor-main').addClass('v-hidden');
    }

  });


  /* EDITOR: show/hide asides from link in canvas */
  $('.v-editor-main-content').on('click', '.v-toggle-aside', function() {
    var asideID = $(this).attr("name");
    var asideIDclass = 'show-' + asideID;

    if ( ($('.v-aside.v-open').hasClass(asideIDclass)) ) {   
      $(this).removeClass('v-active');  
      $('.' + asideIDclass).removeClass('v-open');
      //$('.v-aside-open-overlay').hide(); /* EDITOR: if there is need to close aside when click anywhere on page, remove comments around "$('.v-aside-open-overlay')" in 5 places */
      if ($(this).parents('.v-editor-main').next('.v-aside').hasClass('v-hidden')) {
        $(this).parents('.v-editor-main').addClass('v-hidden');
      }
    }
    else {
      $('.v-toggle-aside.v-active').removeClass('v-active');
      $('.v-aside.v-open').removeClass('v-open');

      $(this).addClass('v-active');  
      $('.' + asideIDclass).addClass('v-open');
      //$('.v-aside-open-overlay').show();
      if ($(this).parents('.v-editor-main').hasClass('v-hidden')) {
        $(this).parents('.v-editor-main').removeClass('v-hidden');
      }
    }

  });


  /* EDITOR: close aside when click "DONE" button in aside */
  $('.v-aside-head .btn').on('click', function() {
    /*$('.v-aside-open-overlay').trigger('click');*/
    $('.v-aside').removeClass('v-open');
    $('.v-toggle-aside').removeClass('v-active');
    $('aside.v-fixed').each(function() {
      if ($(this).hasClass('v-hidden')) {
        $(this).prev('.v-editor-main').addClass('v-hidden');
      }
    });
  });


  /* EDITOR: hides aside when navigate to other tab in left sidebar */
  $('.v-editor-header-body .nav-item > .nav-link').on('click', function() {
    $('.v-aside.v-open').removeClass('v-open');
    //$('.v-editor-main').removeClass('v-hidden');
  });


  /* EDITOR: when navigate to other tab in left sidebar, make sure "aside.v-fixed" is visible */
  $('.v-editor-header .nav-item').on('click', function() {
    //$('.v-aside-open-overlay').trigger('click');
    $('aside.v-fixed.v-hidden').removeClass('v-hidden');
  });


  /* EDITOR: temporary. When click headline/name in editor, that opens correct tab for edit */
  $('.v-trigger-settings').on('click', function() {
    $('#editor0-tab').trigger('click');
  });
  

  /* EDITOR: temporary. On workflow tab, change name on workflow */
  $('input.v-change-workflow-name').on('change', function() {
    var newName = $(this).val();
    $('.v-trigger-settings').html(newName);
  });


  /* EDITOR: When linking from general page to specific tab in editor */
  let url = location.href.replace(/\/$/, "");
  if (location.hash) {
    const hash = url.split("#");
    $('.v-editor-header-body a[href="#'+hash[1]+'"]').tab("show");
    url = location.href.replace(/\/#/, "#");
    history.replaceState(null, null, url);
    setTimeout(function (){ 
      $(window).scrollTop(0); 
    }, 400);
  }   

  $('a[data-toggle="tab"]').on("click", function() {
    let newUrl;
    const hash = $(this).attr("href");
    newUrl = url.split("#")[0] + hash;
    newUrl += "/";
    history.replaceState(null, null, newUrl);
  });


  /* EDITOR: for API-tab in editor, in list of inputs/outputs, click headline will show/hide corresponding list */
  $('body').on('click', '.v-showhide', function() {
    $(this).toggleClass('v-closed');
    $(this).next().slideToggle();
  });


  /* EDITOR: for API-tab in editor, search/filter content in each column of APIs */
  jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };
  $('.v-select-api-wrapper').on('input','.v-autocomplete', function() {
    var txt = $(this).val();
    $(this).parents('.v-select-api-search').nextAll('.v-select-api-list').find('li:contains("'+txt+'")').slideDown();
    $(this).parents('.v-select-api-search').nextAll('.v-select-api-list').find('li:not(:contains("'+txt+'"))').slideUp();
  });
  $('.v-general-main').on('input','.v-autocomplete2', function() {
    var txt = $(this).val();
    $(this).parents('.v-general-main-filters').nextAll('.v-general-main-content').find('.table tbody').find('tr:contains("'+txt+'")').slideDown();
    $(this).parents('.v-general-main-filters').nextAll('.v-general-main-content').find('.table tbody').find('tr:not(:contains("'+txt+'"))').slideUp();
  });


  /* EDITOR: only as example for functionality. Activate SAVE button and last-saved, if save takes time  */
  $('.v-editor-main-content').on('click', '.v-change-api, .v-cancel-app-api', function() {
    $('.v-header-actions-primary .btn-primary').removeClass('disabled');
    $('.v-header-actions-primary .v-last-saved').slideUp();
    setTimeout(function(){
      $('.v-header-actions-primary .btn-primary').addClass('disabled');
      $('.v-header-actions-primary .v-last-saved').slideDown();
    }, 3000);
  });


  /* EDITOR: when using checkboxes in v-select-api-list, this adds class to parent label to mark it as selected */
  $('.v-select-api-list li label').on('click', function() {
    
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('v-checked-default');
    }
    else {
      $(this).removeClass('v-checked-default');
    }
    
  });


  /* EDITOR: for making workflow */
  $('.v-workflow').on('change', 'select', function() {
    var selectText = $(this).val();
    if ( $(this).val() == 'v-add') {
      
    }
    else {
      $(this).closest('li').append('<ul><li><i class="fas fa-level-up-alt v-level-indicator"></i><span>' + selectText + '</span><a href="#" class="v-delete" title="Delete component"><i class="far fa-trash-alt"></i></a><select title="Add child component"><option value="v-add">+</option><option value="Api">API</option><option value="Widget">Widget</option><option value="Excel">Excel</option><option value="Notification">Notification</option><option value="Table">Table</option><option value="Filter">Filter</option><option value="Code">Code</option><option value="Client">Client</option><option value="Database">Database</option></select></li></ul>');
      $('.v-workflow select').val('v-add');
      $(this).parents('.v-editor-main-content').find('.v-no-show').removeClass('v-no-show');
    }
  });
  $('.v-workflow').on('click', '.v-delete', function() {
    $(this).closest('ul').hide();
    $(this).parents('.v-editor-main-content').find('.v-no-show').removeClass('v-no-show');
  });





  /*
  --------------------------------------
  GENRAL-SPECIFIC FUNCTINS
  --------------------------------------
  */


  /* GENERAL: When use expandable boxes, show/hide expanded content */
  $('.v-expandable-summary').on('click', function() {
    if ($(this).parent('li, div').hasClass('v-open')) {
      $(this).parent('li, div').removeClass('v-open');
      $(this).parent('li, div').find('.v-expandable-details').removeClass('v-open');
    }
    else {
      $('.v-expandable-list').find('li, div').removeClass('v-open');
      $('.v-expandable-list').find('li, div').find('.v-expandable-summary').removeClass('v-open');
      $(this).parent('li, div').addClass('v-open');
      $(this).find('.v-expandable-details').addClass('v-open');
    }
  });


  /* GENERAL, TABLESORTER: Sortable table headers with jQuery-plugin tablesorter */
  $('.v-with-sortable-headers').tablesorter({
      selectorSort : 'div.tablesorter-header-inner', 
      sortInitialOrder: 'asc', // Sorted desc default
      sortRestart : true //  Start with sortInitialOrder on each columns
  });

  /* GENERAL, TABLESORTER: adds "sort-this-column"-title-tag to each clickable header in tablesorter */
  $('.v-with-sortable-headers th:not(".sorter-false")').find('div[class="tablesorter-header-inner"]').attr('title', 'Sort this column');
  
  /* GENERAL, TABLESORTER: sort table from select-dropdown in "v-general-main-filters" */
  $('.v-sort-table').change(function(){
    var column = parseInt($(this).val(), 10),
      direction = 0, // 0 = descending, 1 = ascending
      sort = [[ column, direction ]];
    if (column >= 0) {
      $('table').trigger("sorton", [sort]);
    }
  });


  /* GENERAL: Make v-general-main-toolbar bottom-sticky if content taller than window height */
  $( window ).on('resize load', function() {
    if ($('.v-general-main-toolbar').length == 1) {

      $('.v-general-main-toolbar').removeClass('v-sticky');

      var elementPosition = $('.v-general-main-toolbar').offset().top;
      var windowHeight = $(window).height() - 68;

      if (elementPosition >= windowHeight) {
        $('.v-general-main-toolbar').addClass('v-sticky');
      }

    }
  });


  /* GENERAL: only as example for functionality. Activate SAVE button and last-saved, if save takes time  */
  $('.v-add-users').on('click', function() {
    $('.v-last-saved').fadeOut();
    $('.v-general-main-toolbar .btn-primary').prop('disabled', false);
    setTimeout(function(){
      $('.v-general-main-toolbar .btn-primary').prop('disabled', true);
      $('.v-last-saved').fadeIn();
    }, 3000);   
  });


  /* GENERAL: On mobile,   */
  $('.v-general-header .navbar-toggler').on('click', function() {
    if ($('.v-general-header .dropdown').length == 1) {
      $('.v-general-header .nav-item.dropdown').removeClass('dropdown');
      $('.v-general-header .dropdown-toggle').hide();
      $('.v-general-header .dropdown-menu').addClass('show');
    }
  });


  /* GENERAL: show/hide App choser, top left corner */
  $('.v-app-choser .fas').on('click', function() {
    $(this).parent('.v-app-choser').toggleClass('v-open');
    if ( $('.v-aside-open-overlay').is(":visible") ) {
      $('.v-aside-open-overlay').hide();
    }
    else {
      $('.v-aside-open-overlay').show();
    }
  });
  /* GENERAL: when app-choser is open, click the overlay closes the app-choser  */
  $('.v-aside-open-overlay').on('click', function() {
    $('.v-app-choser .fas').trigger('click');
    $(this).hide();
  });


  /* GENERAL: on pageload, limits the number elements shown in previous v-list based on attribute 'data-show' */
  $('.v-list-showhide').each(function() {
    var allElements = $(this).prev('.v-list').find('> *').length;
    var amountElements = $(this).attr('data-show');
    var showElements = '> *:lt(' + amountElements + ')';

    $(this).find('span').html(allElements);
    $(this).prev('.v-list').find('> div, > li').hide();
    $(this).prev('.v-list').find(showElements).show();

  });
  /* GENERAL: show/hide elements in v-list, in combo with pageload function over */
  $('.v-list-showhide').on('click', function() {
    var amountElements = $(this).attr('data-show');
    var showElements = '> *:lt(' + amountElements + ')';

    if ($(this).hasClass('v-all')) {
      $(this).removeClass('v-all');
      $(this).prev('.v-list').find('> div, > li').hide();
      $(this).prev('.v-list').find(showElements).show();
    }
    else {
      $(this).addClass('v-all');
      $(this).prev('.v-list').find('> div, > li').show();
    }

  });




  /*
  --------------------------------------
  FUNCTINS FOR BOTH GENERAL AND EDITOR
  --------------------------------------
  */


  /* GENERAL + EDITOR: toggle favorite */
  $('.v-favorite').on('click', function() {
    $(this).toggleClass('v-chosen');
  });



  /* GENERAL + EDITOR: initialize all Bootstrap tooltip */
  $('[data-toggle="tooltip"]').tooltip();
 

  /* GENERAL + EDITOR: initialize all Bootstrap popouver */
  $('[data-toggle="popover"]').popover({
    trigger: 'focus' /* Click outside box to close popover */
  });


  /* GENERAL + EDITOR: Make modal open on pageload, and force user to chose */
  $( window ).on('load', function() {
    if ($('#force-user-to-chose').length == 1) {
      $('#force-user-to-chose').modal({backdrop: 'static', keyboard: false}) 
    }
  });


  /* GENERAL + EDITOR: simple drag&drop width jQuery UI, not sure if this will be used */
  $('.v-sortable').sortable({
    cancel: ".no-draggable",
    refreshPositions: true,
    cursor: "crosshair",
    snap: true
  });
  $('.v-sortable').disableSelection();



  /* GENERAL + EDITOR: For making tables with thead, mobile friendly */
  $('.v-table').each(function() {

      if ( $(this).find('thead').length > 0 ) {
          var $th = $(this).find('th');
          var $tr = $(this).find('tr');

          $tr.each(function(){
              $(this).find('td').each(function(index) {

                  if ( !$(this).hasClass('empty-data-attr')) {
                      $(this).attr('data-attr', $th.eq(index).text());
                  }

              });
          });        
      }
      else {
          $(this).find('tbody tr td').addClass('hide-before-pseudo');              
      }

  });


  /*General  secuirty vince live UI*/
  $(".v-second-common-card").hide();
  $('.attributes_values2').hide();
  $(".t_common").hide();
  $(".v-Result_container tr").click(function () {
    $(this).addClass('active_bg').siblings().removeClass('active_bg');
    $(".v-second-common-card").show()

  });
  $(".newuser").click(function () {
    $(".v-security-main").addClass("overflow-auto");
    $(".user_details_hide").hide()
    $(".v-new-user-view").show();

  });
  $(".cancle").click(function () {
    $(".v-security-main").removeClass("overflow-auto");
    $(".user_details_hide").show()
    $(".v-new-user-view").hide();

  });

  $(".user_details_click tr, .workflow_details_click tr, .role_details_click tr").click(function () {

    indexvalue = $(this).index();

    // $(".t_common.title1").show();
    if (indexvalue == 0) {

      $(".t_common.title1").show();
      $(".title2").hide();
      $(".title3").hide();
      $(".title4").hide();
    }
    if (indexvalue == 1) {

      $(".t_common.title2").show();
      $(".title1").hide();
      $(".title3").hide();
      $(".title4").hide();
    }
    if (indexvalue == 2) {

      $(".t_common.title3").show();
      $(".title2").hide();
      $(".title1").hide();
      $(".title4").hide();
    }
    if (indexvalue == 3) {

      $(".t_common.title4").show();
      $(".title1").hide();
      $(".title2").hide();
      $(".title3").hide();
    }



  });

  $(".second_card_close  a").click(function () {
 
    $(".v-second-common-card").hide();
    $('.v-third-common-card').hide();
     $('.v-first-common-card, .v-second-common-card').removeClass("col-md-4");
    $('.v-first-common-card, .v-second-common-card').addClass("col-md-6");

  });
  $(".v-card-close").click(function () {

    $('.attributes_values1').removeClass("attributes_values_card");
    $('.v-third-common-card').hide();
    // $('.v-first-common-card, .v-second-common-card').removeClass("col-md-4");
    // $('.v-first-common-card, .v-second-common-card').addClass("col-md-6");

  });
  


  /* vio item organizers*/
  $('.v-third-common-card').hide();
  $('.import_data_Grid').hide();
  $('.v-first-common-card table tr').on('click', function () {
    $(this).addClass('active_bg').siblings().removeClass('active_bg');
    $('.v-first-common-card').removeClass("col-md-6");
    $('.v-first-common-card').addClass("col-md-6");
    $('.v-second-common-card').show();
    
  });
  $('.v-second-common-card table tr').on('click', function () {
    $(this).addClass('active_bg').siblings().removeClass('active_bg');

    $('.v-first-common-card, .v-second-common-card').removeClass("col-md-6");
    $('.v-first-common-card, .v-second-common-card').addClass("col-md-4");
    $('.v-third-common-card').show();
  });
  $('.v-second-common-card .v-card-close').on('click', function () {
    $('.v-second-common-card').hide();
    $('.v-third-common-card').hide();
    $('.v-first-common-card, .v-second-common-card').removeClass("col-md-4");
    $('.v-first-common-card, .v-second-common-card').addClass("col-md-6");
  });
  $('.v-third-common-card .v-card-close').on('click', function () {
    // $('.v-second-common-card').hide();
    $('.v-third-common-card').hide();
    $('.v-first-common-card, .v-second-common-card').removeClass("col-md-4");
    $('.v-first-common-card, .v-second-common-card').addClass("col-md-6");
  });

  $('.attributes_values1 table tr').on('click', function () {
    $('.attributes_values2').show();
    // $('.v-third-common-card').hide();
    $('.attributes_values1').addClass("attributes_values_card");
    $('.attributes_values1').removeClass("");
   
  });
  $('.import_btn').on('click', function () {
    $('.import_data_Grid').show();
    // $('.v-third-common-card').hide();


  });

  


});



/* show file value after file select */
document.querySelector('.custom-file-input').addEventListener('change', function (e) {
  var fileName = document.getElementById("myInput").files[0].name;
  var nextSibling = e.target.nextElementSibling
  nextSibling.innerText = fileName
})
