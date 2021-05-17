$(function(){
    // [住所取得]ボタンクリックで非同期処理開始
    $("#get_address_btn").on("click",function(){
        $.ajax({
            url:"http://zipcoda.net/api", // 送信先 WebAPI の URL
            dataType:"jsonp", // レスポンスデータ形式今回は最後に p をつける
            data: { // リクエストパラメータ情報
                zipcode: $("#zipcode").val()
            },
            async: true //非同期で処理を行う
        }).done(function(data) {
            // 検索成功時にはページに結果を反映
            // コンソールに取得した JSON データを表示 
            console.dir(JSON.stringify(data));
            $("#address").val(data.items[0].address); // 住所欄に住所をセット
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
            // 検索失敗時には、その旨をダイアログ表示しエラー情報をコンソールに記載
            alert("正しい結果を得られませんでした。");
            console.log("XMLHttpRequest : " + XMLHttpRequest.status);
            console.log("textStatus: " + textStatus);
            console.log("errorThrown : " + errorThrown.message);
        });
    });
 });