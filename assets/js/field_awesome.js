(function ($){
    
  $(document).ready(function(){
      
      var toggle = function(){
          
          $("input[name='" + $(this).attr('name') + "']").parent().removeClass('active');   
          
          if ( $(this).is(':checked') ) {
              $(this).parent().addClass('active');
          } else {
              $(this).parent().removeClass('active');
          }
      };
      
      
      for (i in field_awesome) {
          
          $div = $('#edit-' + field_awesome[i].replace('_','-') );
          
          if ($div.length > 0) {
              
              $div.find('.form-item').each(function(){
                      
                      var value = $(this).children('input').val();
              
                      $(this).children('label.option').html( '<i class="fa ' + value + '  fa-lg"></i> ' + value );
                      
                      $(this).children('input').change( toggle );
              });
              
              $div.addClass('field_awesome');
              
          }
      }
      
      $('.field_awesome .form-item.form-type-radio input, .field_awesome .form-item.form-type-checkbox input').each(toggle);
      
  });
  
})(jQuery)