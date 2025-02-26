document.addEventListener("DOMContentLoaded", function () {
    console.log("FARMM Webアプリ起動");

    // 📅 カレンダー管理
    const eventForm = document.getElementById("event-form");
    const eventList = document.getElementById("event-list");
    const selectedDate = document.getElementById("selected-date");
    let currentSelectedDate = null;

    function generateCalendar() {
        let calendarContainer = document.getElementById("calendar-container");
        let calendar = document.createElement("table");
        calendar.innerHTML = "<tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr>";
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let row = document.createElement("tr");

        for (let i = 0; i < firstDay; i++) {
            row.appendChild(document.createElement("td"));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            let cell = document.createElement("td");
            cell.textContent = day;
            cell.addEventListener("click", function () {
                currentSelectedDate = `${year}-${month + 1}-${day}`;
                selectedDate.textContent = `📅 ${currentSelectedDate}`;
                loadEvents(currentSelectedDate);
            });
            row.appendChild(cell);
            if ((firstDay + day) % 7 === 0) {
                calendar.appendChild(row);
                row = document.createElement("tr");
            }
        }

        calendar.appendChild(row);
        calendarContainer.appendChild(calendar);
    }

    generateCalendar();

    eventForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!currentSelectedDate) {
            alert("日付を選択してください！");
            return;
        }

        let eventTitle = document.getElementById("event-title").value;
        let listItem = document.createElement("li");
        listItem.textContent = eventTitle;
        eventList.appendChild(listItem);

        eventForm.reset();
    });

    // 🛒 販売管理
    document.getElementById("sales-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let salesDate = document.getElementById("sales-date").value;
        let salesProduct = document.getElementById("sales-product").value;
        let salesQuantity = document.getElementById("sales-quantity").value;

        let row = document.createElement("tr");
        row.innerHTML = `<td>${salesDate}</td><td>${salesProduct}</td><td>${salesQuantity}</td>`;
        document.getElementById("sales-data").appendChild(row);

        this.reset();
    });

    // 📸 写真付き日記
    document.getElementById("diary-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let diaryDate = document.getElementById("diary-date").value;
        let diaryText = document.getElementById("diary-text").value;
        let fileInput = document.getElementById("photo-upload");

        let entry = document.createElement("div");
        entry.innerHTML = `<strong>${diaryDate}</strong>: ${diaryText}`;

        if (fileInput.files.length > 0) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let img = document.createElement("img");
                img.src = event.target.result;
                img.style.width = "150px";
                entry.appendChild(img);
            };
            reader.readAsDataURL(fileInput.files[0]);
        }

        document.getElementById("diary-container").appendChild(entry);
    });
});
