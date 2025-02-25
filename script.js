document.addEventListener("DOMContentLoaded", function () {
    console.log("FARMM Webアプリ起動");

    // 販売管理のデータ追加機能
    const salesData = document.getElementById("sales-data");

    function addSalesEntry(date, product, quantity, remaining) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${date}</td>
            <td>${product}
