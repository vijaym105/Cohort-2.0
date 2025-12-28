const reels = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: './vid.mp4',
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: true,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: './vid2.mp4',
        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: './vid3.mp4',
        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
    ismuted: true,
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "./reels/video3.mp4",

    userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    ismuted: true,
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "My solo Bali trip changed everything 🌴",
    video: "./vid",

    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  }
];

function rep(){
let add = '';
reels.forEach(function(elem,id){
    add = add + `<div id="reels">
                    <video src="${elem.video}" autoplay  loop></video>
                    <div id="btm-sec">
                        <div id="user">
                            <img src="${elem.userprofile}" alt="">
                            <h3>${elem.username}</h3>
                            <button class="follow-btn" data-index="${id}">
                            ${elem.isFollowed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                        <p>${elem.caption}</p>
                    </div>
                    <div id="right-sec">
                    <div ="heart">
                       <div class="like-btn" data-index="${id}">
                         ${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-line"></i>'}
                        </div>
                        <h5>${elem.likeCount}</h5>
                    </div>    
                        <div id= "comments" class="comment"><i class="ri-chat-3-line"></i>${elem.commentCount}</div>
                        <div id="share" class="share"><i class="ri-share-forward-fill"></i>${elem.shareCount}</div>
                        <div id="menu"><i class="ri-more-2-line"></i></div>
                    </div>
                </div>`
        
                
})

disp.innerHTML = add;
}
let disp = document.querySelector('.all-reels');
rep()

disp.addEventListener('click', (dets) => {

  
  const followBtn = dets.target.closest('.follow-btn');
  if (followBtn) {
    const index = followBtn.dataset.index;
    reels[index].isFollowed = !reels[index].isFollowed;
    rep();
    return; 
  }

  const likeBtn = dets.target.closest('.like-btn');
  if (likeBtn) {
    const index = likeBtn.dataset.index;

    if (!reels[index].isLiked) {
      reels[index].likeCount++;
      reels[index].isLiked = true;
    } else {
      reels[index].likeCount--;
      reels[index].isLiked = false;
    }

    rep();
  }
});


