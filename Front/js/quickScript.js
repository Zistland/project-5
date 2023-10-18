// EMAIL AUTOMATION

const eventMessage = (name) => {

    return {
        subject: "Happy [Name of the event]",
        message: `Hello, ${name}, 
    \n It is [name of event] time!!!! 
    \n Let's celebreate.
    \n Best 
    \n, Faram`
    }
}

// Call function to test
eventMessage('Berry');


// Step 1 - define list of people: Ana, Jane, Joe

const people = ['Ana', 'Jane', 'Joe'];

// Step 2 - Message a Person - from Person List

people.forEach(function (person) {
    console.log()
})

// Message Ana
// Message Jane
// Message Joe

