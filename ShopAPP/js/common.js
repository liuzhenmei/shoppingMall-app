


 //console.log(document.documentElement.clientWidth)
 mui.ready(function() {
   //点击input框跳转到搜索页面
 	mui(".input_keywords").on("tap","#keyWords", function() {
       // alert("123")
 		mui.openWindow({
 			url: "search.html",
 			id: "search"
 		})

 	})

 })