let users = [
{
   username: 'David',
   email: 'david@frontendsimplified.com',
   password: 'test1',
   subscriptionStatus: 'VIP',
   DiscordId: 'David Bragg#0001',
   lessonCompleted: [0,1],

},
{
   username: 'Mitri',
   email: 'Mitri@frontendsimplified.com',
   password: 'test2',
   subscriptionStatus: 'VIP',
   discordId: 'Mitri#0001',
   lessonsCompleted: [0,1,2,3],

},

]

function login(email, password){
   for(let i = 0; i <users.length;++i){
      if(users[i].email === email){
         console.log(users[i]);
         if(users[i].password === password){
            console.log('log the user in - the details are correct')
         }
         else{
            console.log('password is incorrect - try again')
         }
         return;
      }
      console.log('could not find an email that matches')
   
  
   }
}

login('Mitri@frontendsimplified.com','test2')


function register(user) {
    users.push(user);
}

register({
   username: "zen",
   email: "zen@frontendsimplified.com",
   password: "zen123",
   subscriptionStatus: "VIP",
   discordId: "Zen#0002",
   lessonsCompleted: [0,1]
   });

   console.log(users);