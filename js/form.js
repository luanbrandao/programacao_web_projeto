function createContact(name, email, phone, interest) {
  console.log(name, email, phone, interest);
  const query = `
  mutation {
    addContact(
      contactInput: {
        name: "${name}",
        mail: "${email}",
        fone: "${phone}",
        interest: "${interest}",
      }
    ) {
      name
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

function Enviar() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var interest = document.querySelector("#interest").value;

  createContact(name, email, phone, interest);
}
