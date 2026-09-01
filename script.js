const sheetURL = "https://docs.google.com/spreadsheets/d/1rkfaQs6IhKKZoCrRhIcIdgDl46zuKpTdxenpugvcpA0/edit?gid=0#gid=0";

fetch(sheetURL)
    .then(response => response.text())
    .then(data => {

        const rows = data.split("\n");

        const gigs = rows.slice(1);

        const gigList = document.getElementById("gig-list");

        gigs.forEach(row => {

            const columns = row.split(",");

            const date = columns[0];
            const venue = columns[1];
            const town = columns[2];
            const time = columns[3];
            const eventName = columns[4];

            const gig = document.createElement("div");

            gig.classList.add("gig");

            gig.innerHTML = `
                <div class="gig-date">${date}</div>

                <div class="gig-info">
                    <h3>${eventName}</h3>
                    <p>${venue}</p>
                    <p>${town}</p>
                    <p>${time}</p>
                </div>
            `;

            gigList.appendChild(gig);

        });

    });