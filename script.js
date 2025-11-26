//your code here!
const ol=document.getElementById("infi-list");
let count=1;
function additems(num){
	for(int i=0;i<num;i++){
		const li=document.createElement("li");
		ol.textContent=`Item ${count}`;
		ol.appendChild(li);
	}
}

additems(10);
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
