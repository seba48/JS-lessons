window.onload = function() {
   let x = 5; 
   // alert( x++ );


   console.log([ ] + false - null + true);  


   console.log( [ ] + 1 + 2);

   console.log( "1"[0] );

   console.log( 2 && 1 && null && 0 && undefined );

   a = b = 1;
   if( !!( a && b ) == (a && b)){
        console.log(true);
   }else{
        console.log(false);
   };

   console.log( null || 2 && 3 || 4 ); 

   a = [1, 2, 3];
   b = [1, 2, 3]; 
   if (a===b) {
        console.log(true);
   }else{
        console.log(false);
   };

   console.log( +"Infinity" );

   if ('ёжик' > 'яблоко') {
        console.log(true);
   }else{
        console.log(false);
   };

   console.log(0 || "" || 2 || undefined || true || falsе );

};