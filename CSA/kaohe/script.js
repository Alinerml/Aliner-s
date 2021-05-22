var temphigh =new Array();
var templow = new Array();
var cityid;
var year;
var month;
var lishi = new Array(3).fill('');
function show(id) {
    $.ajax({                   //top栏    天气情况
        type: "GET",
        async:false,
        url:"https://tianqiapi.com/free/day?appid=22188373&appsecret=DRxS8w3O&cityid="+id,
        dataType:'json',
        success:function(data){
            console.log(data);
            console.log('1');
            $(".position").html(data.city);
            $(".inf p").remove();
            var x=document.createElement("p");
            $(".inf")[0].appendChild(x);
            $(".inf p").html("中国气象台"+data.update_time+"发布");
            var y={
                'height': '12px',
                'line-height': '12px',
                'text-align': 'center',
                'font-size': '12px',
                'animation': 'xiaosh 4s forwards',
            };
            $('.top').css("background", "url('image/'" + data.wea_img + ".jpg') no-repeat")
            console.log("url('image/" + data.wea_img + ".jpg')")
            $(".tem").html(data.tem+'°');
            $(".weather").html(data.wea);
            $(".feng").html(data.win+data.win_speed);
            $(".kongqi p:first-child").html(data.air);
        }
    })
    $.ajax({                 //top栏    湿度
        type: "GET",
        async:false,
        url:"https://devapi.qweather.com/v7/weather/now?key=3d2c25eca6f74817922812e59ae57e5c&location="+id,
        success:function(data){
            console.log(data);
            console.log('2');
            $('.shidu').html("湿度"+data.now.humidity+"%")
        }
    })
    $.ajax({           //折线
        type: "GET",
        async:false,
        url:"https://www.tianqiapi.com/free/week?appid=22188373&appsecret=DRxS8w3O&cityid="+id,
        success:function(dat){
            console.log(dat);
            console.log('3');
            $('.today .wendu').html(dat.data[0].tem_day + "/" + dat.data[0].tem_night + "°");
            $('.today .day-weather').html(dat.data[0].wea);

            $('.tommory .wendu').html(dat.data[0].tem_day + "/" + dat.data[0].tem_night + "°");
            $('.tommory .day-weather').html(dat.data[0].wea);

            for (let i = 0; i < 7; i++){
                var a = dat.data[i].date.split('-');
                $('.date-zhexian').eq(i + 1).html(a[1] + '/' + a[2]);
                month = a[1];
                year = a[0];
                $('.weather-morning').eq(i).html(dat.data[i].wea);
                temphigh[i+1] =Number(dat.data[i].tem_day);
                templow[i+1] = Number(dat.data[i].tem_night);
                $('.wind').eq(i).html(dat.data[i].win);
                $('.winds').eq(i).html(dat.data[i].win_speed)
            }
            
        }
    })
    $.ajax({
        type: "GET",
        async:false,
        url: "https://v0.yiketianqi.com/api/worldchina?appid=38144994&appsecret=vPAIc2gm&cityid=" + id,
        success: function (data) {
            console.log(data);
            for (let i = 0; i < 24; i++) {
                $('.txt-time').eq(i).html(data.hours[i].time);
                $('.weather-hour').eq(i).attr("src", "image/" + data.hours[i].wea_img + ".svg");
                $('.txt-tem').html(data.hours[i].tem);
            }
            $('.logo').eq(0).attr("src", "image/" + data.month[0].day.phrase_img + ".svg");
            $('.logo').eq(1).attr("src", "image/" + data.month[1].day.phrase_img + ".svg");
            for (let i = 1; i < 8; i++){
                $(".icon").eq(i).attr('src', "image/" + data.month[i].day.phrase_img + '.svg');
                $('.img-night').eq(i).attr('src', 'image/' + data.month[i].night.phrase_img + '.svg');
            }
        }
    })
    $.ajax({
        type: "GET",
        async: false,
        url: "https://tianqiapi.com/api?version=history&appid=38144994&appsecret=vPAIc2gm&cityid=" + id + "&year=" + year + "&month=" + month,
        success: function (data) {
            console.log(data);
        }
    })
    $.ajax({
        type: "GET",
        async: false,
        url: "https://www.tianqiapi.com/life/lifepro?appid=38144994&appsecret=vPAIc2gm&cityid=" + id,
        success: function (data) {
            console.log(data);
            $('.content').eq(0).html(data.data.chenlian.level);
            $('.content').eq(1).html(data.data.chuanyi.level);
            $('.content').eq(2).html(data.data.yusan.level);
            $('.content').eq(3).html(data.data.ganmao.level);
            $('.content').eq(4).html(data.data.xiche.level);
            $('.content').eq(5).html(data.data.yundong.level);
            $('.content').eq(6).html(data.data.fangshai.level);
            $('.content').eq(7).html(data.data.diaoyu.level);
            $('.content').eq(8).html(data.data.lvyou.level);
            $('.content').eq(9).html(data.data.jiaotong.level);
            $('.content').eq(10).html(data.data.wuran.level);
            $('.content').eq(11).html(data.data.shushidu.level);
            $('.content').eq(12).html(data.data.liangshai.level);
            $('.content').eq(13).html(data.data.huazhuang.level);
            $('.content').eq(14).html(data.data.zhongshu.level);
            $('.content').eq(15).html(data.data.guomin.level);
        }
    })
    temphigh[0]=25;
    templow[0]=12;
    var dom = document.getElementById("main");
    var myChart = echarts.init(dom);
    var app = {};
    var option;
    option = {
    color:["#4FC3F7","#FFB74D"],
    grid: {
        left: 10,
        bottom: '20%',
        top:'15%',
        containLabel: true,
        width:460,
        height:136
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        show:false,
        data: ['昨天', '今天', '明天', '后天', '星期六', '星期天', '周一','周二']
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [
        {
            name: '最低温度',
            type: 'line',
            stack: '总量',
            data: templow,
            smooth: true,
            symbol:"circle",
            symbolSize:7,
            label: {
                show: true,
                position: 'bottom'
            },
        },
        {
            name: '最高温度',
            type: 'line',
            stack: '总量',
            data: temphigh,
            smooth: true,
            symbol:"circle",
            symbolSize:7,
            label: {
                show: true,
                position: 'top'
            },
        }
        
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
}
show('101040100');
$(".city-ls,.city-re").click(function () {
    document.getElementById('find').style.display = "none";
    $.ajax({
        type: "GET",
        url: "https://www.tianqiapi.com/free/week?appid=22188373&appsecret=DRxS8w3O&city=" + this.innerHTML,
        success: function (data) {
            cityid = data.cityid;
            console.log(cityid);
            show(cityid);
        }
    })
    console.log(this.innerHTML);
    lishi.unshift(this.innerHTML);
    console.log(lishi);
}
)

