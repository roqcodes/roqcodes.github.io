const firebaseConfig = {
        apiKey: "AIzaSyBm6bl9gCqzTTo-nrMq9LLba7JetZ5mAwM",
        authDomain: "infinitereality-ikgxcs.firebaseapp.com",
        databaseURL: "https://infinitereality-ikgxcs.firebaseio.com",
        projectId: "infinitereality-ikgxcs",
        storageBucket: "infinitereality-ikgxcs.appspot.com",
        messagingSenderId: "678050031744",
        appId: "1:678050031744:web:1d1f9593faed22b773de65",
        measurementId: "G-W4W212H36X"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
function redirect(value){

    

    console.log(value);
    let x = value;
    console.log(x);

    console.log(x);}


    const stories = ["s1","s2","s3","s4","s5"];
let z = stories[Math.floor(Math.random() * stories.length)];
const storyRef = database.ref(z);


storyRef.on('value', (snapshot) => {
const story = snapshot.val();

document.getElementById('story').innerText = story || "";
});

function addToStory() {
    const userInput = document.getElementById('userInput').value;
    console.log(userInput);
    if (userInput) {
        storyRef.once('value').then((snapshot) => {
            let currentStory = snapshot.val() || "";
            currentStory += userInput + " ";
            storyRef.set(currentStory);
            document.getElementById('userInput').value = "";
        });
    }
    const button = document.getElementById('btn');
            button.disabled = true; // Disable the button
            button.textContent = "Wait 30s before you can enter next line"; // Optional: change button text

            // Re-enable the button after 30 seconds
            setTimeout(() => {
                button.disabled = false; // Enable the button
                button.textContent = "Submit"; // Optional: reset button text
            }, 30000);
}



