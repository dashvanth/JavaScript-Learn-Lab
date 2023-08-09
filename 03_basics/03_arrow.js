const user = {
    username: "dashvanth", 
    price : 999, 


    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
// console.log(this); window obj
user.username = "ananya";
user.welcomeMessage();
console.log(this);
// this -> refers to the current context 
// ex: console.log(this); refers to the window object which is a global


// browser global obj = window 