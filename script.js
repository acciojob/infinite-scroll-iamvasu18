//your code here!
const ol=document.getElementById("infi-list");
let count=1;
function additems(num){
	for(let i=0;i<num;i++){
		const li=document.createElement("li");
		ol.textContent=`Item ${count}`;
		ol.appendChild(li);
	}
}

additems(10);
ol.addEventListener("scroll", () => {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight) {
    addItems(2);
  }
});
