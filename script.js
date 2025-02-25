document.addEventListener("DOMContentLoaded", function () {
    console.log("FARMM Webアプリ起動");

    // 販売管理のデータ追加機能
    const salesData = document.getElementById("sales-data");

    function addSalesEntry(date, product, quantity, remaining) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${date}</td>
            <td>${product}</td>
            <td>${quantity}</td>
            <td>${remaining}</td>
        `;
        salesData.appendChild(row);
    }

    // ダミーデータを追加
    addSalesEntry("2025-03-01", "レタス", 10, 2);
    addSalesEntry("2025-03-02", "トマト", 15, 1);

    // 写真付き日記のアップロード機能
    function uploadPhoto() {
        let fileInput = document.getElementById("photo-upload");
        let diaryContainer = document.getElementById("diary-container");

        if (fileInput.files.length > 0) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let img = document.createElement("img");
                img.src = event.target.result;
                img.style.width = "150px";
                img.style.margin = "10px";
                diaryContainer.appendChild(img);
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    // 関数をグローバルで使えるようにする
    window.uploadPhoto = uploadPhoto;
});
