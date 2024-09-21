/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

let facebookProfile = {
    name: "Julio",
    friends: 403,
    messages: ["Hello", "How are you?", "What are you doing"],
    postMessage: function (message) {
        this.messages.push(message) 
    },
    deleteMessage: function (index) {
        this.messages.splice(index, 1)
    },
    addFriend: function () {
        this.friends++
    },
    removeFriend: function () {
        this.friends--
    }
}

facebookProfile.postMessage(`:)`)

facebookProfile.deleteMessage(2)

facebookProfile.addFriend()

facebookProfile.removeFriend()

console.log (facebookProfile.messages, facebookProfile.friends)