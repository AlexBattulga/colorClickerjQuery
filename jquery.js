function random_color()
          {
             var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
             color = '#'  //this is what we'll return!
             for(var i = 0; i < 6; i++)
             {
                x = Math.floor((Math.random()*16))
                color += rgb[x];
             }
             return color;
          }
          $(document).ready(function(){
             $('#large_box').click(function(){
                // alert('you clicked the big box!');
                $('#large_box').css('background', random_color());
                $('.side_box').css('background', random_color());
                $('.middle_box').css('background', random_color());

         //comment this out when you have figured out what event.stopPropagation is used for
             })
             $('.side_box').click(function(event){
                 $('.side_box').sibling().css('background', random_color());
                event.stopPropagation();
             })
             $('.middle_box').click(function(event){
                 $('#large_box').css('background', random_color());
                event.stopPropagation();
             })
          });
