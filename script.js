/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

// creating two global variables. One with items stored per page. The other storing the entire student list

const studentList = document.getElementsByClassName("student-item cf");
const studentsPerPage = 10;

// Show page function with "list" and "page" parameters

const showPage = (list, page) => {

   // creating varable to store the start index and end index items (making it dynamic)
   let startIndex = (page * studentsPerPage) - studentsPerPage

   const endIndex = page * studentsPerPage

   // looping an item with an index greater than or equal to the start index and less than the end index

   for (let i = 0; i < list.length; i++) {


      if (i >= startIndex && i < endIndex) {

// displaying empty "block"
         list[i].style.display = "block";
      }

      else {

         list[i].style.display = "none";
      }

   }

}

showPage(studentList, 1);


// creating function for appended links

const appendPageLinks = (list) => {

//


   let listPages = Math.ceil(list.length / studentsPerPage);

   // creating 'div' variable to add to HTML

   var div = document.createElement('div');

   // naming it "pagnation"

   div.className = 'pagination';

   // accessed ".page" class and stored it to a variable
   const pageDiv = document.querySelector('.page')

   // appending div to the pagination class
  
   pageDiv.appendChild(div);

// creating 'ul' variable
   const ul = document.createElement('ul');

   // appending 'ul' to the 'pagination' div
   div.appendChild(ul);


// creating a loop to make pagination links active

   for (let i = 1; i <= listPages; i++) {

 // creating variables "li' and 'a' pagination tags     
      let li = document.createElement("li");
      let a = document.createElement("a");
     
     
     // appending "li" to the "ul" 
      ul.appendChild(li);

      // appending "a" to the "li"
      li.appendChild(a);
     
      // making "a" tags show numbers
      a.textContent = i;

      // making "a" tags clickable
      a.href = "#"  
    if (i === 1) {
      a.className = "active" }
      }

   
// adding an event listener to the "ul"
ul.addEventListener('click', (e) => {

   // listens for a "click" on links, and shows page when clicked
   const link_clicked = EventTarget;
   let number = event.target.textContent;
   showPage(studentList, number);

  // creating variable to access 'a' tags that are being looped through
   let all_links = document.querySelectorAll('a');
   for (let i = 0; i < all_links.length; i++) {
      all_links[i].className = 'none';
   }
 // when link is clicked, make it "active"
   link_clicked.className = 'active';
})
}


appendPageLinks(studentList);




