$(function() {
  
  //  Form for sing_in
  $('#new_user').on('ajax:success', function(xhr, status, error) {
                    var user_token = status.user_token;
                    var user_email = status.user_email;
                    $('body').load("customer_sales_history.html");
                    $("#new_sale_to_customer").attr("action", "http://localhost:3000/api/customer_sales_history?user_email=" + user_email + "?user_token=" + user_token);
                    }).on('ajax:error', function(xhr, status, error) {
                          $(".error_message").html('<div class="alert alert-error"> <a href="#" class="close" data-dismiss="alert">&times;</a>' + status.responseJSON.message + '</div>');
                          
                          });
  
  //   Form for Sale to customer
  $("body").on("ajax:success", "#new_sale_to_customer", function(xhr, status, error) {
               alert('success_new_sale_to_customer');
               }).on("ajax:error", "#new_sale_to_customer", function(xhr, status, error) {
                     alert(status.responseJSON.message);
                     });
  
  // Find Equipment
//  $("body").on("focus",".typeahead_equipment", function () {
//               alert("hello");
//               var equipment_id = $(this).val();
//               $(".typeahead_equipment").typeahead({
//                                                    ajax : "http://localhost:3000//api/customer_sales_history/search_equipment?q=" + equipment_id + "&user_email=bryan@gomotorised.co.nz&user_token=rGBxcCvt9Gu9RbL5idBu",
//                                                    displayField : 'serial_number',
//                                                    valueField : 'id',
//                                                    onSelect : display_equipment_detail
//                                                    });
//                                                });
  
  
  $('body').on("focus", ".typeahead_equipment", function() {
               
               alert("working");
                         $(this).autocomplete({
                                              source : function(request, response) {
                                              $.ajax({
                                                     data : request,
                                                     url : "http://localhost:3000//api/customer_sales_history/search_equipment?q=&user_email=bryan@gomotorised.co.nz&user_token=rGBxcCvt9Gu9RbL5idBu",
                                                     success : function(data) {
                                                     response($.map(data, function(item) {
                                                                    return {
                                                                    value : item.uname,
                                                                    id : item.usersid
                                                                    };
                                                                    }));
                                                     }
                                                     });
                                              },
                                              select : function(event, ui) {	
                                              // console.log(ui);		
                                              $(this).next('input:hidden').val(ui.item.id);
                                              
                                              },
                                              });
                         // 		
                         });
 
  
  });