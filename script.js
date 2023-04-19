alert("I like zebras ;)")
for (let i = 0; i < 1000; i++) {
    let p = document.createElement("p");
    let text = document.createTextNode(".");
    p.appendChild(text);
    document.body.appendChild(p);
    console.log("loop executed");
}