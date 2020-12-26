// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[3].name}</li>
            <li>Diameter: ${json[3].diameter}</li>
            <li>Star: ${json[3].star}</li>
            <li>Distance from Earth: ${json[3].distance}</li>
            <li>Number of Moons: ${json[3].moons}</li>
         </ol>
         <img src="${json[3].image}" alt="planetary image"> `;
      });
   });
});

  window.addEventListener("load", function() {
let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let pilotStatus=document.getElementById("pilotStatus");
      let copilotStatus=document.getElementById("copilotStatus");
      let fuelStatus=document.getElementById("fuelStatus");
      let cargoStatus=document.getElementById("cargoStatus");
      let faultyItems=document.getElementById("faultyItems");
      let launchStatus=document.getElementById("launchStatus");
    

     if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value ==="" || cargoMassInput.value==="" ) {
        alert("All fields are required!");
        event.preventDefault();
      } else if (!isNaN(Number(pilotNameInput.value)) || (!isNaN(Number(copilotNameInput.value))) ) {
         alert("Enter valid information for each field")
      } else if (isNaN(Number(fuelLevelInput.value)) || (isNaN(Number(cargoMassInput.value))) ) {
         alert("Enter valid information for each field");
      } else {
          faultyItems.style.visibility="visible";
          pilotStatus.innerHTML=`Pilot ${pilotNameInput.value} Ready`;
          copilotStatus.innerHTML=`Copilot ${copilotNameInput.value} Ready`;

          if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
            launchStatus.innerHTML="Shuttle is ready for launch";
            launchStatus.style.color="green";
            fuelStatus.innerHTML="Fuel level high enough for launch";
            cargoStatus.innerHTML="Cargo mass low enough for launch";
         } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red"; 
            fuelStatus.innerHTML="Fuel level too low for the journey";
            cargoStatus.innerHTML="Cargo mass too high for launch";
         } else if (fuelLevelInput.value < 10000 && cargoMassInput.value < 10000 ) {
            fuelStatus.innerHTML="Fuel level too low for the journey";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
            cargoStatus.innerHTML="Cargo mass low enough for launch";
         } else if (cargoMassInput.value > 10000 && fuelLevelInput.value > 10000) {
            cargoStatus.innerHTML="Cargo mass too high for launch";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
            fuelStatus.innerHTML="Fuel level high enough for launch";
         } 
         
      };

   });
  });

   


