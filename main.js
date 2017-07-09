window.onload = function() {


// item = document.querySelectorAll(".item");
// console.log(item);

// for(i=0; i<item.length; i++) {
//     item[i].addEventListener("click", toClick);
//     function toClick() {
//     this.classList.add("click");
// };
// }

    item1 = document.querySelector(".item1");
    item2 = document.querySelector(".item2");
    item3 = document.querySelector(".item3");
    item4 = document.querySelector(".item4");
    item5 = document.querySelector(".item5");
    item6 = document.querySelector(".item6");
    item7 = document.querySelector(".item7");
    block = document.querySelector(".block");
    block2 = document.querySelector(".block2");

    item1.addEventListener("click", function() {
            item1.classList.add("click");
            block.classList.add("display");
            block2.classList.remove("display");
            item2.classList.remove("click");
            item3.classList.remove("click");
            item4.classList.remove("click");
            item5.classList.remove("click");
            item6.classList.remove("click");
            item7.classList.remove("click");
            
    }
    ); 

    
    item2.addEventListener("click", function() {
            item2.classList.add("click");
            block2.classList.add("display");
            block.classList.remove("display");
            item1.classList.remove("click");
            item3.classList.remove("click");
            item4.classList.remove("click");
            item5.classList.remove("click");
            item6.classList.remove("click");
            item7.classList.remove("click");
    }
    ); 
    
    item3.addEventListener("click", function() {
            item3.classList.add("click");
            block.classList.add("display");
            block2.classList.remove("display");
            item1.classList.remove("click");
            item2.classList.remove("click");
            item4.classList.remove("click");
            item5.classList.remove("click");
            item6.classList.remove("click");
            item7.classList.remove("click");
    }
    ); 

   
    item4.addEventListener("click", function() {
            item4.classList.add("click");
            block2.classList.add("display");
            block.classList.remove("display"); 
            item1.classList.remove("click");
            item2.classList.remove("click");
            item3.classList.remove("click");
            item5.classList.remove("click");
            item6.classList.remove("click");
            item7.classList.remove("click");
    }
    ); 

    item5.addEventListener("click", function() {
            item5.classList.add("click");
            block.classList.add("display");
            block2.classList.remove("display");
            item1.classList.remove("click");
            item2.classList.remove("click");
            item3.classList.remove("click");
            item4.classList.remove("click");
            item6.classList.remove("click");
            item7.classList.remove("click");
   }
    ); 

    item6.addEventListener("click", function() {
            item6.classList.add("click");
            block2.classList.add("display");
            block.classList.remove("display");
            item1.classList.remove("click");
            item2.classList.remove("click");
            item3.classList.remove("click");
            item4.classList.remove("click");
            item5.classList.remove("click");
            item7.classList.remove("click");
   }
    ); 

    item7.addEventListener("click", function() {
            item7.classList.add("click");
            block.classList.add("display");
            block2.classList.remove("display");
            item1.classList.remove("click");
            item2.classList.remove("click");
            item3.classList.remove("click");
            item4.classList.remove("click");
            item5.classList.remove("click");
            item6.classList.remove("click");
    }
    ); 
}