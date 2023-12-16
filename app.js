let singB = document.querySelector("button")



singB.addEventListener("click", function (){


    let friends = ["Jake", "Fatts", "Joe", "Austin", "Ryan"]
    

    



    for (let i = 0; i < friends.length; ++i) {

        let friendDiv = document.createElement("div")
        friendDiv.className = "friend"
        document.body.appendChild(friendDiv)
        let h3 = document.createElement("h3")
        h3.textContent = friends[i]

        friendDiv.appendChild(h3)
        

        


        
        for (let j = 99; j >= 1; j--) {

            let lyrics = document.createElement("p")
            friendDiv.appendChild(lyrics)
    
            if (j > 1) {
                lyrics.textContent = [j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + [j - 1] + ' lines of code in the file'
            }
            else {
                lyrics.textContent = [j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, ' + ' no more lines of code in the file'
            }

           

        }
    }


})




