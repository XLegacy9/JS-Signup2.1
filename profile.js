document.addEventListener("DOMContentLoaded", () => {
  const profileUsername = document.getElementById("profileUsername");
  const aboutMeTextArea = document.getElementById("aboutMe");
  const saveChangesButton = document.getElementById("saveChanges");
  const avatarInput = document.getElementById("avatarInput");
  const bannerInput = document.getElementById("bannerInput");
  const avatarPreview = document.querySelector(".avatar img");
  const bannerPreview = document.querySelector(".banner img");

  // Retrieve the logged-in user's email from Local Storage
  const loggedInUser = localStorage.getItem("loggedInUser  ");

  if (loggedInUser) {
    // Retrieve user data from Local Storage
    let userData;
    try {
      userData = JSON.parse(localStorage.getItem("userData")) || [];
    } catch (error) {
      console.error("Error parsing user data:", error);
      userData = [];
    }

    // Find the user with the matching email
    const user = userData.find((u) => u.email === loggedInUser);

    if (user) {
      // Display the username
      profileUsername.textContent = user.username;

      // Display the About Me text (if it exists)
      aboutMeTextArea.value = user.aboutMe || "";

      // Display the avatar (if it exists)
      if (user.avatar) {
        avatarPreview.src = user.avatar;
      }

      // Display the banner (if it exists)
      if (user.banner) {
        bannerPreview.src = user.banner;
      }
    } else {
      profileUsername.textContent = "User  not found!";
      aboutMeTextArea.value = "";
    }
  } else {
    profileUsername.textContent = "No user is logged in!";
    aboutMeTextArea.value = "";
  }

  // Handle Avatar Upload
  avatarInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        avatarPreview.src = e.target.result;

        // Save the avatar to the logged-in user's profile in Local Storage
        if (loggedInUser) {
          let userData = JSON.parse(localStorage.getItem("userData")) || [];
          const userIndex = userData.findIndex((u) => u.email === loggedInUser);
          if (userIndex !== -1) {
            userData[userIndex].avatar = e.target.result; // Save the base64 image data
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Avatar updated successfully!");
          }
        }
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle Banner Upload
  bannerInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        bannerPreview.src = e.target.result;

        // Save the banner to the logged-in user's profile in Local Storage
        if (loggedInUser) {
          let userData = JSON.parse(localStorage.getItem("userData")) || [];
          const userIndex = userData.findIndex((u) => u.email === loggedInUser);
          if (userIndex !== -1) {
            userData[userIndex].banner = e.target.result; // Save the base64 image data
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Banner updated successfully!");
          }
        }
      };
      reader.readAsDataURL(file);
    }
  });

  // Save Changes Button Event Listener
  saveChangesButton.addEventListener("click", () => {
    if (loggedInUser) {
      // Retrieve user data again to ensure it's up-to-date
      let userData = JSON.parse(localStorage.getItem("userData")) || [];
      const userIndex = userData.findIndex((u) => u.email === loggedInUser);

      if (userIndex !== -1) {
        // Update the About Me text
        userData[userIndex].aboutMe = aboutMeTextArea.value;

        // Save the updated user data back to Local Storage
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Changes saved successfully!");
      } else {
        alert("User  not found!");
      }
    } else {
      alert("No user is logged in!");
    }
  });
});
// Get the alert box and close button elements
const alertBox = document.getElementById("alert-box");
const closeAlert = document.getElementById("close-alert");

// Show the alert box on page load
window.addEventListener("load", () => {
  alertBox.classList.remove("hidden"); // Remove hidden class
  alertBox.classList.add("visible"); // Add visible class for slide-in animation
});

// Close the alert box when the close button is clicked
closeAlert.addEventListener("click", () => {
  alertBox.classList.remove("visible"); // Remove visible class for slide-out animation
  setTimeout(() => {
    alertBox.classList.add("hidden"); // Hide the alert box after animation completes
  }, 500); // Match the duration of the CSS transition (0.5s)
});

// Get the alert box and close button elements 2
const alertBox2 = document.getElementById("alert-box2");
const closeAlert2 = document.getElementById("close-alert2");

// Show the alert box on page load
window.addEventListener("load", () => {
  alertBox2.classList.remove("hidden"); // Remove hidden class
  alertBox2.classList.add("visible"); // Add visible class for slide-in animation
});

// Close the alert box when the close button is clicked
closeAlert2.addEventListener("click", () => {
  alertBox2.classList.remove("visible"); // Remove visible class for slide-out animation
  setTimeout(() => {
    alertBox2.classList.add("hidden"); // Hide the alert box after animation completes
  }, 500); // Match the duration of the CSS transition (0.5s)
});

// Get the alert box and close button elements 3
const alertBox3 = document.getElementById("alert-box3");
const closeAlert3 = document.getElementById("close-alert3");

// Show the alert box on page load
window.addEventListener("load", () => {
  alertBox3.classList.remove("hidden"); // Remove hidden class
  alertBox3.classList.add("visible"); // Add visible class for slide-in animation
});

// Close the alert box when the close button is clicked
closeAlert3.addEventListener("click", () => {
  alertBox3.classList.remove("visible"); // Remove visible class for slide-out animation
  setTimeout(() => {
    alertBox3.classList.add("hidden"); // Hide the alert box after animation completes
  }, 500); // Match the duration of the CSS transition (0.5s)
});
