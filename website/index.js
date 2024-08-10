const counter = document.querySelector("#visitor-counter");
async function getCounter() {
    let response = await fetch("https://c9mfnq9i17.execute-api.us-east-1.amazonaws.com/cloudResumeTest");
    let data = await response.json();
    counter.innerHTML = `Visitors: ${data}`;
}

getCounter();