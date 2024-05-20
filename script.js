    let post = document.getElementById("firstPost");
    let postsKorobka = document.getElementById("postsKorobka");

    let dataTexts = ["Yesterday I saw a lightning nearby the lake", "Would you like to be here?", "That aurora was mesmerizing..."]

    let dataLikes = [5252, 18, 33];
    let imgurls = [
        "https://w.forfun.com/fetch/8b/8b69e755f97a0501ff93e1edee9bffd6.jpeg",
        "https://i.pinimg.com/originals/45/90/8d/45908d58d710366056265546cabbe77e.jpg",
        "https://w.forfun.com/fetch/02/02220c2803817ebb432d67745710fc4b.jpeg"
    ];

    for (let i = 0; i < 100; i++) {
        let newpost = post.cloneNode(true);
        let imgpost = newpost.getElementsByClassName("img")[0];
        imgpost.setAttribute("src", imgurls[i % 3]);

        let likesKolvo = newpost.getElementsByClassName("likesc")[0];
        likesKolvo.textContent = dataLikes[i % 3];

        let postText = newpost.getElementsByClassName("postText")[0] 
        postText.innerHTML = dataTexts[i%3]; 

        postsKorobka.appendChild(newpost);
    }

    function Like(heartIcon) {
        if (heartIcon.textContent === "🤍") {
            heartIcon.textContent = "❤️";
            heartIcon.style.color = "red";
        } else {
            heartIcon.textContent = "🤍";
            heartIcon.style.color = "";
        }
    }
    
    let heartBtns = document.querySelectorAll(".heart");
    heartBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            Like(btn);
        });
    });
    
