const counter = document.querySelector("#visitor-counter");
async function getCounter() {
    let response = await fetch("https://lyei6ryberlcjwfdc2qtaesdoy0omjyr.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Visitors: ${data}`;
}

getCounter();