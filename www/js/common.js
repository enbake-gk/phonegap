$(function() {  
  $(document).ajaxError(function(xhr, status, error) {
                        // console.log(status)
                        if (status.status === 401) {
                        alert(status.responseJSON.notice)
                        $('.col-lg-10').html(JSON.parse(status.responseJSON.html));
                        }
                        });
  
  $('body').on('ajax:success', '#new_user, .new_user, .delete_equipment, .edit_equipment, #sale_to_customers_form, .show_equipment, .new_equipment, .home_page ', function(xhr, status, error) {
               
               // alert('hello');
               if (status.notice === undefined) {
               txt = "x is undefined";
               } else {
               alert(status.notice);
               }
               
               $('.col-lg-10').html(JSON.parse(status.html));
               
               });
  
  });