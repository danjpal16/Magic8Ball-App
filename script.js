function shakeMagic8Ball() {

    const question = prompt('Ask the Magic 8-Ball a question:');

    if (question === null) {
        document.getElementById('response-text').innerText = 'please... just ask a question :|'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }


    const randomNumber = Math.floor(Math.random() * 8);

    let answer, image, color;

    switch(randomNumber){
        case 0:
            answer = "Yes";
            image = "yes.png" //change this!!;
            color = "text-white";
            break;
        case 1:
            answer = "No";
            image = "no1.png" //change this!!;
            color = "text-white";
            break;
        case 2:
            answer = "Ask again later";
            image = "later.jpg" //change this!!;
            color = "text-white";
            break;
        case 3:
            answer = "Maybe";
            image = "maybe.jpg";//change this!!;
            color = "text-white";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "cannot.jpg";//change this!!;
            color = "text-white";
            break;
        case 5:
            answer = "Don't count on it";
            image = "dont.gif";//change this!!;
            color = "text-white";
            break;
        case 6:
            answer = "Most likely";
            image = "mostlikely.gif";//change this!!;
            color = "text-white";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "notsogood.jpg";//change this!!;
            color = "text-white";
            break;
        default:
            break;
    }

    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;


}