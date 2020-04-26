const facebook = 'https://www.facebook.com/friends/requests/?fcref=jwl';
fetch(facebook) 
.then((response) => response.json())  
.then(html => {
  console.log(html);
})
