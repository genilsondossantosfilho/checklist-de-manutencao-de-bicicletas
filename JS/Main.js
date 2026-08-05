let categories = [
    {
      title: "Personal",
      img: "bike.png",
    },
    {
      title: "Rodas",
      img: "wheel.png",
    },
    {
      title: "Freios",
      img: "wheel.png",
    },
    {
      title: "Corrente",
      img: "bike.png",
    },
    {
      title: "Elétrica",
      img: "wrench.png",
    },
    {
      title: "Suspensão",
      img: "wheel.png",
    },
    {
      title: "Geral",
      img: "wheel.png",
    },
    {
      title: "Acessórios",
      img: "bike.png",
    },
  ];
  
  let reparos = [
    {
      id: 1,
      reparo: "Go to market",
      category: "Shopping",
      completed: false,
    },
    {
      id: 2,
      reparo: "Read a chapter of a book",
      category: "Personal",
      completed: false,
    },
    {
      id: 3,
      reparo: "Prepare presentation for meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 4,
      reparo: "Complete coding challenge",
      category: "Coding",
      completed: false,
    },
    {
      id: 5,
      reparo: "Take a 30-minute walk",
      category: "Health",
      completed: false,
    },
    {
      id: 6,
      reparo: "Do a 20-minute HIIT workout",
      category: "Fitness",
      completed: false,
    },
    {
      id: 7,
      reparo: "Watch an educational video online",
      category: "Education",
      completed: false,
    },
    {
      id: 8,
      reparo: "Review monthly budget",
      category: "Finance",
      completed: false,
    },
    {
      id: 9,
      reparo: "Buy groceries for the week",
      category: "Shopping",
      completed: false,
    },
    {
      id: 10,
      reparo: "Write in a journal",
      category: "Personal",
      completed: false,
    },
    {
      id: 11,
      reparo: "Send follow-up emails",
      category: "Work",
      completed: false,
    },
    {
      id: 12,
      reparo: "Work on a coding side project",
      category: "Coding",
      completed: false,
    },
    {
      id: 13,
      reparo: "Try a new healthy recipe",
      category: "Health",
      completed: false,
    },
    {
      id: 14,
      reparo: "Attend a yoga class",
      category: "Fitness",
      completed: false,
    },
    {
      id: 15,
      reparo: "Read an article about a new topic",
      category: "Education",
      completed: false,
    },
    {
      id: 16,
      reparo: "Set up automatic bill payments",
      category: "Finance",
      completed: false,
    },
    // Additional reparos for each category
    {
      id: 17,
      reparo: "Buy new clothes",
      category: "Shopping",
      completed: false,
    },
    {
      id: 18,
      reparo: "Meditate for 10 minutes",
      category: "Personal",
      completed: false,
    },
    {
      id: 19,
      reparo: "Prepare agenda for team meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 20,
      reparo: "Debug a software issue",
      category: "Coding",
      completed: false,
    },
    {
      id: 21,
      reparo: "Try a new recipe for lunch",
      category: "Health",
      completed: false,
    },
    {
      id: 22,
      reparo: "Go for a run",
      category: "Fitness",
      completed: false,
    },
    {
      id: 23,
      reparo: "Learn a new language online",
      category: "Education",
      completed: false,
    },
    {
      id: 24,
      reparo: "Read about history",
      category: "Education",
      completed: false,
    },
    {
      id: 25,
      reparo: "Review investment portfolio",
      category: "Finance",
      completed: false,
    },
    // Add more reparos for each category as desired
  ];
  
  // Define functions
  const saveLocal = () => {
    localStorage.setItem("reparos", JSON.stringify(reparos));
  };
  
  const getLocal = () => {
    const reparosLocal = JSON.parse(localStorage.getItem("reparos"));
    if (reparosLocal) {
      reparos = reparosLocal;
    }
  };
  
  const toggleScreen = () => {
    screenWrapper.classList.toggle("show-category");
  };
  
  const updateTotals = () => {
    const categoryReparos = reparos.filter(
      (reparo) =>
        reparo.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    numReparos.innerHTML = `${categoryReparos.length} Reparos`;
    totalReparos.innerHTML = reparos.length;
  };
  
  const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
      const categoryReparos = reparos.filter(
        (reparo) => reparo.category.toLowerCase() === category.title.toLowerCase()
      );
      const div = document.createElement("div");
      div.classList.add("category");
      div.addEventListener("click", () => {
        screenWrapper.classList.toggle("show-category");
        selectedCategory = category;
        updateTotals();
        categoryTitle.innerHTML = category.title;
        categoryImg.src = `images/${category.img}`;
        renderReparos();
      });
  
      div.innerHTML = `
                    <div class="left">
                  <img src="images/${category.img}"
                   alt="${category.title}"
                    />
                  <div class="content">
                    <h1>${category.title}</h1>
                    <p>${categoryReparos.length} Reparos</p>
                  </div>
                </div>
                <div class="options">
                  <div class="toggle-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </div>
                </div>
      `;
  
      categoriesContainer.appendChild(div);
    });
  };
  
  const renderReparos = () => {
    reparosContainer.innerHTML = "";
    const categoryReparos = reparos.filter(
      (reparo) =>
        reparo.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    if (categoryReparos.length === 0) {
      reparosContainer.innerHTML = `<p class="no-reparos">Não ha reparos para essa categoria</p>`;
    } else {
      categoryReparos.forEach((reparo) => {
        const div = document.createElement("div");
        div.classList.add("reparo-wrapper");
        const label = document.createElement("label");
        label.classList.add("reparo");
        label.setAttribute("for", reparo.id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = reparo.id;
        checkbox.checked = reparo.completed;
        checkbox.addEventListener("change", () => {
          const index = reparos.findIndex((t) => t.id === reparo.id);
          reparos[index].completed = !reparos[index].completed;
          saveLocal();
        });
        div.innerHTML = `
        <div class="delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                `;
        label.innerHTML = `
                <span class="checkmark"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <p>${reparo.reparo}</p>
          `;
        label.prepend(checkbox);
        div.prepend(label);
        reparosContainer.appendChild(div);
  
        const deleteBtn = div.querySelector(".delete");
        deleteBtn.addEventListener("click", () => {
          const index = reparos.findIndex((t) => t.id === reparo.id);
          reparos.splice(index, 1);
          saveLocal();
          renderReparos();
        });
      });
  
      renderCategories();
      updateTotals();
    }
  };
  
  const toggleAddReparoForm = () => {
    addReparoWrapper.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addReparoBtn.classList.toggle("active");
  };
  
  const addReparo = (e) => {
    e.preventDefault();
    const reparo = reparoInput.value;
    const category = categorySelect.value;
  
    if (reparo === "") {
      alert("Por favor adicione um reparo");
    } else {
      const newReparo = {
        id: reparos.length + 1,
        reparo,
        category,
        completed: false,
      };
      reparoInput.value = "";
      reparos.push(newReparo);
      saveLocal();
      toggleAddReparoForm();
      renderReparos();
    }
  };
  
  // Initialize variables and DOM elements
  let selectedCategory = categories[0];
  const categoriesContainer = document.querySelector(".categories");
  const screenWrapper = document.querySelector(".wrapper");
  const menuBtn = document.querySelector(".menu-btn");
  const backBtn = document.querySelector(".back-btn");
  const reparosContainer = document.querySelector(".reparos");
  const numReparos = document.getElementById("num-reparos");
  const categoryTitle = document.getElementById("category-title");
  const categoryImg = document.getElementById("category-img");
  const categorySelect = document.getElementById("category-select");
  const addReparoWrapper = document.querySelector(".add-reparo");
  const addReparoBtn = document.querySelector(".add-reparo-btn");
  const reparoInput = document.getElementById("reparo-input");
  const blackBackdrop = document.querySelector(".black-backdrop");
  const addBtn = document.querySelector(".add-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const totalReparos = document.getElementById("total-reparos");
    const themeBtn = document.querySelector(".theme-btn");

  
  // Attach event listeners
  menuBtn.addEventListener("click", toggleScreen);
  backBtn.addEventListener("click", toggleScreen);
  addReparoBtn.addEventListener("click", toggleAddReparoForm);
  blackBackdrop.addEventListener("click", toggleAddReparoForm);
  addBtn.addEventListener("click", addReparo);
  cancelBtn.addEventListener("click", toggleAddReparoForm);
  themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  });
  
  // Render initial state
  getLocal();
  renderReparos();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
  });
  