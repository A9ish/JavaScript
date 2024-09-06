// var screen = document.querySelector("body")
// var action = document.querySelector(".log")
// var change = document.querySelector(".links li")

// var flag = 0

// action.addEventListener("click", function(){
//     if(flag == 0){

//         screen.style.backgroundColor = "black"
//         flag = 1
//     }
//     else{
//         screen.style.backgroundColor = "White"
//         flag  = 0
//         change.style.Color = "white"
//     }
// })

// Add this to your sport.js file

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".log"); // Button to toggle dark mode
    const body = document.body;

    // Load user preference
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    toggleButton.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });

    // Existing category and content logic
    const categories = document.querySelectorAll(".category");
    const contents = document.querySelectorAll(".content");

    const setActive = (categoryId) => {
        const contentId = categoryId + "Content";

        categories.forEach(cat => cat.classList.remove("active"));
        document.getElementById(categoryId).classList.add("active");

        contents.forEach(content => content.classList.remove("active"));
        document.getElementById(contentId).classList.add("active");
    };

    setActive("rackets");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const id = category.id;
            setActive(id);
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");
    const contents = document.querySelectorAll(".content");

    // Function to set the active category and content
    const setActive = (categoryId) => {
        const contentId = categoryId + "Content";

        // Remove active class from all categories
        categories.forEach(cat => cat.classList.remove("active"));

        // Add active class to clicked category
        document.getElementById(categoryId).classList.add("active");

        // Remove active class from all contents
        contents.forEach(content => content.classList.remove("active"));

        // Add active class to corresponding content
        document.getElementById(contentId).classList.add("active");
    };

    // Set default active category and content
    setActive("rackets");

    // Add event listeners to categories
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const id = category.id;
            setActive(id);
        });
    });
});


    let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        const newTransformValue = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
    }



/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
// #include <iostream>
// using namespace std;
// int main()
// {
//    int a, b;
//    string numbers[] = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"};
//    cout<<"Enter any two values for interval: ";
//    cin>> a >> b;
   
//    for(int i = a; i<=b; ++i){
//        if(i >= 1 && i<=11){
//            cout << numbers[i-1] << endl;
//        } else if (i > 11){
//            if(i % 2 == 0){
//                cout << "Even" << endl;
//            }
//            else{
//                cout << "Odd" << endl;
//            }
//        }
//    }
//    return 0;
// }