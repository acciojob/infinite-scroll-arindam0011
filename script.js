//your code here!
let main=document.getElementById("main");
let orderList=document.getElementById("infi-list");
let ct=1;
for(let i=1; i<=10; i++){
	let list = document.createElement('li');
        list.innerText = `Item ${ct++}`;
        orderList.append(list);
}
orderList.addEventListener("scroll", function(){
    let threshold = 2; 
    if (orderList.scrollHeight - orderList.scrollTop >= orderList.clientHeight + threshold) {
        let list = document.createElement('li');
        list.innerText = `Item ${ct++}`;
        orderList.append(list);
    }
});
