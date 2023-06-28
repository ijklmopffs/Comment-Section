const card = document.querySelector(".card");
const secondCard = document.querySelector(".card.next");
const avatar = document.querySelector(".avatar");
const name = document.querySelector(".name");
const timeStamp = document.querySelector(".timestamp");
const comment = document.querySelector(".comment");
const nextAvatar = document.querySelector(".avatar.next");
const nextName = document.querySelector(".name.next");
const nextTimeStamp = document.querySelector(".timestamp.next");
const nextComment = document.querySelector(".comment.next");
const firstReply = document.querySelector(".card.first_reply");
const firstCommentReplyButton = document.querySelector(".second.first_reply");
const replyAvatar = document.querySelector(".avatar.first_reply");
const replyName = document.querySelector(".name.first_reply");
const replyTimeStamp = document.querySelector(".timestamp.first_reply");
const replyComment = document.querySelector(".comment.first_reply");
const replyingTo = document.querySelector(".replying");
const secondReplyAvatar = document.querySelector(".avatar.second_reply");
const secondReplyName = document.querySelector(".name.second_reply");
const secondReplyTimeStamp = document.querySelector(".timestamp.second_reply");
const secondReplyComment = document.querySelector(".comment.second_reply");
const secondReplyingTo = document.querySelector(".replying.second_reply");
const commentAvatar = document.querySelector(".avatar.comment_box");
const score = document.querySelector(".score");
const nextScore = document.querySelector(".score.next");
const replyScore = document.querySelector(".score.first_reply");
const secondReplyScore = document.querySelector(".score.second_reply");
const replyButton = document.querySelector(".second p");
const secondReplyButton = document.querySelector(".second.next");
const commentBox = document.querySelector(".comment_box");
const allTextarea = document.querySelector("textarea");
const filePath = "./data.json";

fetch(filePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error loading JSON file:", response.status);
    }
    return response.json();
  })
  .then((jsonData) => {
    const obj = jsonData.currentUser.username;

    // first comment
    avatar.setAttribute("src", jsonData.comments[0].user.image.png);
    name.textContent = jsonData.comments[0].user.username;
    timeStamp.textContent = jsonData.comments[0].createdAt;
    comment.textContent = jsonData.comments[0].content;
    score.textContent = jsonData.comments[0].score;

    // second comment
    nextAvatar.setAttribute("src", jsonData.comments[1].user.image.png);
    nextName.textContent = jsonData.comments[1].user.username;
    nextTimeStamp.textContent = jsonData.comments[1].createdAt;
    nextComment.textContent = jsonData.comments[1].content;
    nextScore.textContent = jsonData.comments[1].score;

    // first reply
    replyAvatar.setAttribute(
      "src",
      jsonData.comments[1].replies[0].user.image.png
    );
    replyName.textContent = jsonData.comments[1].replies[0].user.username;
    replyTimeStamp.textContent = jsonData.comments[1].replies[0].createdAt;
    replyingTo.textContent = jsonData.comments[1].replies[0].replyingTo;
    replyComment.textContent = ` ${jsonData.comments[1].replies[0].content}`;
    replyComment.prepend(replyingTo);
    replyScore.textContent = jsonData.comments[1].replies[0].score;

    // second reply
    secondReplyAvatar.setAttribute(
      "src",
      jsonData.comments[1].replies[1].user.image.png
    );
    secondReplyName.textContent = jsonData.comments[1].replies[1].user.username;
    secondReplyTimeStamp.textContent =
      jsonData.comments[1].replies[1].createdAt;
    secondReplyingTo.textContent = jsonData.comments[1].replies[1].replyingTo;
    secondReplyComment.textContent = ` ${jsonData.comments[1].replies[1].content}`;
    secondReplyComment.prepend(secondReplyingTo);
    secondReplyScore.textContent = jsonData.comments[1].replies[1].score;

    // comment box
    commentAvatar.setAttribute("src", jsonData.currentUser.image.png);

    // FIRST REPLY BOX
    replyButton.addEventListener("click", () => {
      const div2 = commentBox.cloneNode(true);
      const button = div2.querySelector("button");
      button.textContent = "REPLY";
      button.addEventListener("click", () => {
        const textarea = div2.querySelector("textarea");
        textInput = textarea.value;
        const reply = card.cloneNode(true);
        reply
          .querySelector(".avatar")
          .setAttribute("src", jsonData.currentUser.image.png);
        reply.querySelector(".name").textContent =
          jsonData.currentUser.username;
        reply.querySelector(".comment").textContent = textInput;
        reply.querySelector(".second").textContent = "";
        reply.querySelector(".timestamp").textContent = "";
        card.insertAdjacentElement("afterend", reply);
        reply.querySelector(".score").textContent = "0";
        div2.style.display = "none";
      });
      card.insertAdjacentElement("afterend", div2);
    });

    // SECOND REPLY BOX
    secondReplyButton.addEventListener("click", () => {
      const div3 = commentBox.cloneNode(true);
      const button = div3.querySelector("button");
      button.textContent = "REPLY";
      button.addEventListener("click", () => {
        const textarea = div3.querySelector("textarea");
        textInput = textarea.value;
        const reply = card.cloneNode(true);
        reply
          .querySelector(".avatar")
          .setAttribute("src", jsonData.currentUser.image.png);
        reply.querySelector(".name").textContent =
          jsonData.currentUser.username;
        reply.querySelector(".comment").textContent = textInput;
        reply.querySelector(".second").textContent = "";
        reply.querySelector(".timestamp").textContent = "";
        secondCard.insertAdjacentElement("afterend", reply);
        reply.querySelector(".score").textContent = "0";
        div3.style.display = "none";
      });
      secondCard.insertAdjacentElement("afterend", div3);
    });

    // FIRST REPLY
    firstCommentReplyButton.addEventListener("click", () => {
      const div4 = commentBox.cloneNode(true);
      div4.classList.add("createdDiv");
      const button = div4.querySelector("button");
      button.textContent = "REPLY";
      button.addEventListener("click", () => {
        const textarea = div4.querySelector("textarea");
        textInput = textarea.value;
        const reply = card.cloneNode(true);
        reply.classList.add("extra_reply");
        reply
          .querySelector(".avatar")
          .setAttribute("src", jsonData.currentUser.image.png);
        reply.querySelector(".name").textContent =
          jsonData.currentUser.username;
        reply.querySelector(".comment").textContent = textInput;
        reply.querySelector(".second").textContent = "";
        reply.querySelector(".timestamp").textContent = "";
        firstReply.insertAdjacentElement("afterend", reply);
        reply.querySelector(".score").textContent = "0";
        div4.style.display = "none";
      });
      firstReply.insertAdjacentElement("afterend", div4);
    });
  })
  .catch((error) => {
    console.error(error);
  });
