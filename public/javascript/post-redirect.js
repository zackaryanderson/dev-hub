const redirect = (event) => {
    //prevent page reload
    event.preventDefault();
    //create container element
    const newPostBox = document.createElement("div");
    newPostBox.classList.add("container");
    newPostBox.classList.add("new-post-pos");
    newPostBox.classList.add("col-12");
    newPostBox.classList.add('colorful');
    //create card div
    const newPostCard = document.createElement("div");
    newPostCard.classList.add("card");
    newPostCard.classList.add("col-6");
    newPostCard.classList.add("mx-auto");
    newPostCard.classList.add("modal-card");
    newPostCard.setAttribute('style','padding:0');
    
    //create escape button
    const escBtn = document.createElement("a");
    escBtn.classList.add("btn");
    escBtn.classList.add("bg-danger");
    escBtn.classList.add("return-btn");
    escBtn.textContent = "x";
    //change relocation destination of button depending on window location
    const escBtnId = () => {
        let loc = window.location.pathname;
        switch(loc) {
            case '/':
                escBtn.setAttribute('href','/');
                break;
            case '/codehelp':
                escBtn.setAttribute('href','/codehelp');
                break;
        }
    }
    escBtnId();

    //create card-body div
    const newPostCardBody = document.createElement("div");
    newPostCardBody.classList.add("card-body");
    //create form element
    const newPostForm = document.createElement("form");

    //label the form
    const newPostLabel = document.createElement("h2");
    newPostLabel.textContent = "New Post";
    newPostLabel.classList.add("text-center");
    newPostLabel.classList.add("brand-name");

    //create form group one div
    const newPostFormGrOne = document.createElement("div");
    newPostFormGrOne.classList.add('form-group');
    //create label and input for form group div
    const newPostTitle = document.createElement("label");
    newPostTitle.textContent = "Title:";
    newPostTitle.setAttribute('style','margin-top: 1vh');
    const newPostTitleInput = document.createElement("input");
    newPostTitleInput.classList.add("form-control");
    newPostTitleInput.setAttribute('id','post-title');
    newPostTitleInput.setAttribute('placeholder','Enter Title');

    //create form group two div
    const newPostFormGrTwo = document.createElement("div");
    newPostFormGrTwo.classList.add('form-group');
    //create label and input for form group div
    const newPostBody = document.createElement("label");
    newPostBody.textContent = "Body:";
    const newPostBodyInput = document.createElement("textarea");
    newPostBodyInput.classList.add("form-control");
    newPostBodyInput.setAttribute('id','post-body');
    newPostBodyInput.setAttribute('placeholder','Enter Body');

    //create submission button
    const newPostSubBtn = document.createElement("button");
    newPostSubBtn.classList.add("btn");

    //change name of button depending on window location
    const btnId = () => {
        let loc = window.location.pathname;
        switch(loc) {
            case '/':
                newPostSubBtn.setAttribute('name','new-post-submit-codehelpfalse');
                break;
            case '/codehelp':
                newPostSubBtn.setAttribute('name','new-post-submit-codehelptrue');
                break;
        }
    }
    btnId();

    newPostSubBtn.textContent = "Submit";

    //append title and input to form groups
    newPostFormGrOne.appendChild(newPostTitle);
    newPostFormGrOne.appendChild(newPostTitleInput);
    newPostFormGrTwo.appendChild(newPostBody);
    newPostFormGrTwo.appendChild(newPostBodyInput);
    //append form group to post form -> post body -> post container
    newPostForm.appendChild(newPostFormGrOne);
    newPostForm.appendChild(newPostFormGrTwo);
    newPostForm.appendChild(newPostSubBtn);
    newPostCardBody.appendChild(escBtn);
    newPostCardBody.appendChild(newPostLabel);
    newPostCardBody.appendChild(newPostForm);
    
    // newPostCard.appendChild(newPostCardHeader);
    newPostCard.appendChild(newPostCardBody);
    newPostBox.appendChild(newPostCard);
    //append post container to document body
    document.querySelector('#modal-placement').prepend(newPostBox);
}

document.querySelector('.replace').addEventListener('click',redirect);
