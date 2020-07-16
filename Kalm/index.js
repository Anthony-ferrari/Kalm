// get random int 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//list of search words
const searchList = ['1minutemeditation','3minutemeditation','5minutemeditation', '10minutemeditation', 
'15minutemeditation','shortmeditation', 'mindfulmeditation', 'guidedmeditation']

const youtubeLink = "https://www.youtube.com/watch?v="
const embedYoutubeVideo = "https://www.youtube.com/embed/"
const apiKey = "AIzaSyB5fk7jvctsriFt9lJsN1r6G3pH4TcV2e4";
const youtubeApiUrl =
  "https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=25&q=";
const keyString = "&key="

const newURL = youtubeApiUrl + searchList[getRandomInt(0,7)] + keyString + apiKey;


const results = document.querySelector(".results");
const errors = document.querySelector(".errors");
const firstVideoThumbnail = document.getElementById("firstVideo");
const firstVideoImage = document.querySelector(".firstVideoImage")
const firstVideoName = document.querySelector(".firstVideoName");
const firstVideoDescription = document.querySelector(".firstVideoDescription");
const secondVideoThumbnail = document.getElementById("secondVideo");
const secondVideoImage = document.querySelector(".secondVideoImage")
const secondVideoName = document.querySelector(".secondVideoName");
const secondVideoDescription = document.querySelector(".secondVideoDescription");
const thirdVideoThumbnail = document.getElementById("thirdVideo");
const thirdVideoImage = document.querySelector(".thirdVideoImage")
const thirdVideoName = document.querySelector(".thirdVideoName");
const thirdVideoDescription = document.querySelector(".thirdVideoDescription");
const fourthVideoThumbnail = document.getElementById("fourthVideo");
const fourthVideoImage = document.querySelector(".fourthVideoImage")
const fourthVideoName = document.querySelector(".fourthVideoName");
const fourthVideoDescription = document.querySelector(".fourthVideoDescription");
const fifthVideoThumbnail = document.getElementById("fifthVideo");
const fifthVideoImage = document.querySelector(".fifthVideoImage")
const fifthVideoName = document.querySelector(".fifthVideoName");
const fifthVideoDescription = document.querySelector(".fifthVideoDescription");
//grab form
const form = document.querySelector(".form-data");

//we can put constants in a list and iterate with object numbers
const searchMeditation = async ()=>{
    errors.textContent = "";
    try {
        const response = await axios.get(newURL);
        const itemList = response.data.items
        
        // first object holds id
        // second object holds rest of info 
        const random1 = getRandomInt(1,10);
        const random2 = getRandomInt(1,10);
        const random3 = getRandomInt(1,10);
        const random4 = getRandomInt(1,10);
        const random5 = getRandomInt(1,10);

        firstVideoThumbnail.href = youtubeLink + itemList[random1].id.videoId
        //firstVideoImage.src = itemList[random1].snippet.thumbnails.default.url
        firstVideoImage.src = embedYoutubeVideo + itemList[random1].id.videoId
        firstVideoName.textContent = itemList[random1].snippet.title
        firstVideoDescription.textContent = itemList[random1].snippet.description
        secondVideoThumbnail.href = youtubeLink + itemList[random2].id.videoId
        //secondVideoImage.src = itemList[random2].snippet.thumbnails.default.url
        secondVideoImage.src = embedYoutubeVideo + itemList[random2].id.videoId
        secondVideoName.textContent = itemList[random2].snippet.title
        secondVideoDescription.textContent = itemList[random2].snippet.description
        thirdVideoThumbnail.href = youtubeLink + itemList[random3].id.videoId
        //thirdVideoImage.src = itemList[random3].snippet.thumbnails.default.url
        thirdVideoImage.src = embedYoutubeVideo + itemList[random3].id.videoId
        thirdVideoName.textContent = itemList[random3].snippet.title
        thirdVideoDescription.textContent = itemList[random3].snippet.description
        fourthVideoThumbnail.href = youtubeLink + itemList[random4].id.videoId
        //fourthVideoImage.src = itemList[random4].snippet.thumbnails.default.url
        fourthVideoImage.src = embedYoutubeVideo + itemList[random4].id.videoId
        fourthVideoName.textContent = itemList[random4].snippet.title
        fourthVideoDescription.textContent = itemList[random4].snippet.description
        fifthVideoThumbnail.href = youtubeLink + itemList[random5].id.videoId
        //fifthVideoImage.src = itemList[random5].snippet.thumbnails.default.url
        fifthVideoImage.src = embedYoutubeVideo + itemList[random5].id.videoId
        fifthVideoName.textContent = itemList[random5].snippet.title
        fifthVideoDescription.textContent = itemList[random5].snippet.description
        results.style.display = "block";
    }catch(error){
        results.style.display = "none";
        errors.textContent = "There is no data for you at this time.";
    }
};
const submitHandler = async e => { 
    e.preventDefault();
    searchMeditation();
};

if(form){
    form.addEventListener("submit", e => submitHandler(e));
}

