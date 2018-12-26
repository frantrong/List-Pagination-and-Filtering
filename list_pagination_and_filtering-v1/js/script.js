/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//variable to reference the list items 
let listName = document.getElementsByClassName("student-item cf");

//determine number of pages needed for pagination
const numberofPages = ( list, itemsPerPage ) => {
const listCount = list.length;
let count = 0
if( (listCount % itemsPerPage) > 0 )
{
	count = (Math.floor(listCount/itemsPerPage)) + 1
}
else {  
	numberofPages = listCount / itemsPerPage 
}
return count
};

//hide all items
const hideAllItems = (list) =>{
  for (i = 0; i < list.length; i++){
    list[i].style.display = 'none';
  };
};

//show items on a page given the page number
const showPage = ( list, page ) => {
  minRange = page * 10;
  maxRange = minRange + 9;
  if (list.length - minRange < 10){
    maxRange = minRange + (list.length - minRange - 1)
  }else{
    maxRange = minRange + 9;
  };

  for(i=minRange; i <= maxRange; i++){
      list[i].style.display = "block";
  };
};

//create buttons based on the length of a list
const appendPageLinks = ( list ) => {
  const pages = numberofPages(list, 10);
  const paginationArea = document.createElement("div");
  paginationArea.className = "pagination";
  const pageList = document.createElement("ul");
  
  document.getElementsByClassName("page")[0].appendChild(paginationArea);
  paginationArea.appendChild(pageList);

  for(i=0; i<pages; i++){
    const page = document.createElement("li");
    const pageLink = document.createElement("a");
    
    pageList.appendChild(page);
    page.appendChild(pageLink);

    const pageText = document.createTextNode((i+1));
    pageLink.appendChild(pageText);

    if(i == 0){
      pageLink.className = "active";
    }

    pageLink.addEventListener("click",(event) => {
      let currentPage = event.target.textContent;
      hideAllItems( list );
      showPage(list, (currentPage-1));
      
    const pageLinks = document.querySelectorAll('.pagination ul li a');
    for(i = 0; i < pageLinks.length; i++){
      pageLinks[i].classList.remove('active');
    }
    event.target.className = 'active';

    })
  }
};

//hide all pages, aside from page 1, when the site loads
for (i = 10; i < listName.length; i++){
    listName[i].style.display = 'none';
  };
appendPageLinks(listName);