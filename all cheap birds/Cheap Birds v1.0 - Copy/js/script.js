/*     let userName = document.querySelector("#userName");
     let review = document.querySelector("#reviewText");
     
     const elemName = document.createElement('div');
     const elemReview = document.createElement('div');


function submitReview(){
     let userNameText = document.createTextNode(userName.children[0].value);
     let reviewText = document.createTextNode(review.children[0].value);

     elemName.appendChild(userNameText);
     document.body.appendChild(elemName);

     elemReview.appendChild(reviewText);
     document.body.appendChild(elemReview);


}

*/

function submitReview(){
     let userName = document.querySelector("#userName");
     let review = document.querySelector("#reviewText");
     let oneStar = document.querySelector("#rate-1");
     let twoStar = document.querySelector("#rate-2");
     let threeStar = document.querySelector("#rate-3");
     let fourStar = document.querySelector("#rate-4");
     let fiveStar = document.querySelector("#rate-5");

     let postedUserName = document.querySelector("#postedUserName");
     let postedReview = document.querySelector("#postedReview");
     let postedStar = document.querySelector("#postedStars");


     if (oneStar.checked == true)
          postedStar.innerHTML = "⭐";
     else if (twoStar.checked == true)
          postedStar.innerHTML = "⭐⭐";
     else if (threeStar.checked == true)
          postedStar.innerHtml = "⭐⭐⭐";
     else if (fourStar.checked == true)
          postedStar.innerHTML = "⭐⭐⭐⭐";
     else if (fiveStar.checked == true)
          postedStar.innerHTML = "⭐⭐⭐⭐⭐";
     


     postedUserName.innerHTML = userName.value;
     postedReview.innerHTML = review.value;

}