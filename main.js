// Select the Button
let btns = document.querySelectorAll(".countries > div > button");
let tour = document.getElementById("tour");

btns.forEach((btn) => {
  btn.onclick = function () {
    btns.forEach((btn) => {
      btn.classList.add("stop");
    });
    tour.style.height = "1523px";
    let form = document.createElement("div");
    form.className = "form";
    let heading = document.createElement("h1");
    heading.innerHTML = `<i class="fa-solid fa-suitcase"></i>Tickets`;
    let cross = document.createElement("span");
    cross.innerHTML = `<i class="fa-solid fa-xmark mark"></i>`;
    cross.className = "cross";
    let xmark = document.querySelector(".cross i");

    heading.appendChild(cross);

    let childDiv = document.createElement("div");
    let cost = document.createElement("span");
    cost.className = "cost";
    cost.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Tickets, $15 per person`;
    let costInput = document.createElement("input");
    costInput.placeholder = "How many ?";
    costInput.type = "text";
    let receiver = document.createElement("span");
    receiver.innerHTML = "Send To";
    let receiverInput = document.createElement("input");
    receiverInput.placeholder = "Enter email";
    receiverInput.type = "email";
    let payButton = document.createElement("button");
    payButton.innerHTML = `PAY <i class="fa-solid fa-check"></i>`;
    payButton.className = "pay";
    let footer = document.createElement("div");
    let close = document.createElement("span");
    close.innerHTML = `Close<i class="fa-solid fa-xmark"></i>`;
    close.className = "close";
    let help = document.createElement("span");
    help.innerHTML = `Need <a href = "#">help?</a>`;
    form.appendChild(heading);
    form.appendChild(childDiv);
    childDiv.appendChild(cost);
    childDiv.appendChild(costInput);
    childDiv.appendChild(receiver);
    childDiv.appendChild(receiverInput);
    childDiv.appendChild(payButton);
    childDiv.appendChild(footer);
    footer.appendChild(close);
    footer.appendChild(help);
    tour.appendChild(form);

    heading.style.cssText =
      "background-color: #009688; height: 200px; text-align:center; line-height:200px; position:relative;color:white";
    document.querySelector("h1 i").style.marginRight = "15px";
    cross.style.cssText =
      "position: absolute ; top: -69px ; right:100px ; text-transform: lowercase ; font-size: 20px; font-weight:normal; cursor:pointer ";

    childDiv.style.cssText =
      "position: relative ; top : -53px ; color: black ; background-color:white;";
    cost.style.cssText =
      "padding: 38px;margin: 53px 0 0 0; display: block;text-align: left; position:relative";
    costInput.style.cssText =
      "display: block;margin: 20px 40px;width: 88%;height: 40px;font-size: 20px;padding-left: 10px;";
    document.querySelector("span i").style.marginRight = "5px";
    receiver.style.cssText =
      "padding: 38px;margin: 10px 0px 0px;display: block;text-align: left;";
    receiverInput.style.cssText =
      "display: block;margin: 0 40px;width: 88%;height: 40px;font-size: 20px;padding-left: 10px;";
    payButton.style.cssText =
      "display: block;margin: 50px 45px;border: none;background-color: #009688;width: 88%;height: 70px;color: white; cursor:pointer";
    footer.style.cssText =
      "display: flex;justify-content: space-between;margin-left: 33px;margin-right: 93px;align-items: center";
    close.style.cssText =
      "color: white; background-color : #e64a19; padding: 20px; cursor:pointer;margin-bottom: 10px;";
    document.querySelector(".close i").style.cssText =
      "margin-left: 3px;margin-top: 1px;";
    cross.addEventListener("click", () => {
      form.remove();
      tour.style.height = "726px";
      btns.forEach((btn)=>{
        btn.classList.remove("stop")
      })
    });
    close.addEventListener("click", () => {
      form.remove();
      tour.style.height = "726px";
      btns.forEach((btn)=>{
        btn.classList.remove("stop")
      })
    });
  };
});
