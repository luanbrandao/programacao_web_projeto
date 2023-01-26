function showGraphQlData() {
  const query = `
  query {
    banners {
     title,
     imageUrl
    }
}
  `;

  fetch("http://localhost:4100/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createBenefit(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createBenefit(data) {
  console.log(data);

  var benefits = [];
  data.banners.forEach((element) => {
    var benefit = `
    <div class="benefit">
    <div class="benefit-img" style="background-image: url(${element.imageUrl})" ></div>
    <p>${element.title}</p>
    </div>
  `;

    benefits.push(benefit);
  });

  document.getElementById("benefits").innerHTML = benefits;
}

showGraphQlData();
