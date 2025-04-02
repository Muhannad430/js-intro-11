/*
1. Ask for the user's name:
Use prompt() to collect the user's name.
If the user provides a name, display a welcome message using alert().
If no name is entered, display an error message in the console and exit.
2. Ask if they want to continue:
Use confirm() to ask if they want to proceed.
If they confirm, show an alert saying they chose to continue.
If they cancel, show an alert saying they canceled the action.
3. Log screen details in the console:
Log innerWidth (browser window width).
Log innerHeight (browser window height).
4. Reload the page after 10 seconds:
Display a message in the console informing the user that the page will reload.
Use setTimeout() with window.location.reload() to refresh the page after 10 seconds.
*/

// task 1
const promptAsk = prompt(`What's your name?`);

if (promptAsk !== undefined && promptAsk !== null && promptAsk !== '') {
    alert('Welcome!!!');
    console.log('Welcome message');
}
else {
    alert('Error!!!');
    console.log('Error message displayed');
}

// task 2 
const wantsToContinue = confirm('Do you want to proceed?');

if (wantsToContinue) {
    alert('You chose to continue!');
    console.log('chose to continue.');
}
else {
    alert('You canceled the action.');
    console.log('canceled the action.');
}

// task 3

console.log('innerWidth:', window.innerWidth);
console.log('innerHeight:', window.innerHeight);



// task 4
console.log("The page will reload in 10 seconds...");

setTimeout(() => {
    window.location.reload();
}, 10000);

