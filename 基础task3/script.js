/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};//不应该用数组

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() 
{
    var content1=document.getElementById("aqi-city-input").value;
    var content2=document.getElementById("aqi-value-input").value;
    aqiData[content1]=content2;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tab=document.getElementById("aqi-table");
    tab.innerHTML="";
    for(var content1 in aqiData)
        {
            if (tab.children.length === 0)   
        {
            tab.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>";
        }
            var tr=document.createElement("tr");
            var td1=document.createElement("td");
                
            td1.innerHTML=content1;
            tr.appendChild(td1);
            var td2=document.createElement("td");
                
            td2.innerHTML=aqiData[content1];
            tr.appendChild(td2);
            var td3=document.createElement("td");
            td3.innerHTML="<button class='delt'>删除</button>";   
            tr.appendChild(td3);
            tab.appendChild(tr);
        }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(c) {
  // do sth.
  var d=c.parentElement.parentElement;
  var e=d.children[0].innerHTML;
  delete aqiData[e];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
   document.write='123';
   var a=document.getElementById("add-btn");
   a.onclick=addBtnHandle;
   var tab=document.getElementById("aqi-table");
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
   tab.addEventListener("click",function(c)
   {
       if(c.target && c.target.nodeName=='BUTTON')
            delBtnHandle(c.target);
   }
   );
}

init();