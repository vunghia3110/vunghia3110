function gameOfMatches(n){
    var count = 0;
    while(n >= 5){
        n = n - 5;
        count++;
        if (n = 0){
       if( count % 2 == 0){
        return "Ngoc";
    }   else if(count % 2 == 1) {return "Phong";} 
    }
    
    }
    while (n >= 3){
        n = n - 3;
        count++;
        if (n = 0){
       if( count % 2 == 0){
        return "Ngoc";
    }   else {return "Phong";} 
    }
    
    }
    while (n >= 2){
        n = n - 2;
        count++;
        if (n = 0){
       if( count % 2 == 0){
        return "Ngoc";
    }   else {return "Phong";}
    }
     
    }
    if( count % 2 == 1){
        return "Ngoc";
    }   else {return "Phong";}

    
}
console.log(gameOfMatches(15));
