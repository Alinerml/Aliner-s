function init()
{
    var left_in_btn = document.getElementById("left_in_btn");
    left_in_btn.onclick = leftIn;
    var right_in_btn = document.getElementById("right_in_btn");
    right_in_btn.onclick = rightIn;
	var left_out_btn = document.getElementById("left_out_btn");
	left_out_btn.onclick = leftOut;
	var right_out_btn = document.getElementById("right_out_btn")
	right_out_btn.onclick = rightOut;
	var queue = document.getElementById("queue");
	queue.onclick = function()
	{
	    queue.removeChild(Event.target);
	}
}
function leftIn()
{
    var inputValue = document.getElementById("inputValue").value;
    if(inputValue.length > 0)
    {
        var newNode = createNode(inputValue);
		var queue = document.getElementById("queue");
		queue.insertBefore(newNode,queue.firstChild);
    }
}
function rightIn()
{
	var inputValue = document.getElementById("inputValue").value;  //获取输入的值
	if(inputValue.length > 0 )
	{
		var newNode = createNode(inputValue);  //调用createNode()
		var queue = document.getElementById("queue");
		queue.appendChild(newNode);    //接到p上
	}
}
function leftOut()
{
	var queue = document.getElementById("queue");
	if(queue.childNodes.length > 0)
	{
		queue.removeChild(queue.firstChild);	
	}
}
function createNode(num)
{
	var newItem = document.createElement("span");
	var textNode = document.createTextNode(num);
	newItem.appendChild(textNode);
	newItem.setAttribute("class","box");
    return newItem;
}
