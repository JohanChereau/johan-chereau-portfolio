//Load skills
loadJSON("../data/skills.json").then((data) => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      const categoryItem = createSkillsCategory(data[i], i + 1);
      document.querySelector(".skills__categories")?.appendChild(categoryItem);
    }
  } else {
    console.error("Error loading skills.");
  }
});

//Load projects
loadJSON("../data/projects.json").then((data) => {
  if (data) {
    for (const project of data) {
      const card = createProjectCard(project);
      document.querySelector(".projects__list")?.appendChild(card);
    }
  } else {
    console.error("Error loading projects.");
  }
});

/**
 * Asynchronously loads a JSON file from a given path.
 * @param {RequestInfo | URL} path The path to the JSON file.
 * @returns {Promise<any>} A promise that resolves with the contents of the JSON file, or undefined if an error occurs.
 * @throws Will throw an error if the HTTP response status is not OK.
 */
async function loadJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP ERROR: status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(
      `There was a problem with the fetch operation: ${error.message}`
    );
  }
}

/**
 * Creates a category list item from the provided data.
 * @param {Object} data The category data.
 * @param {Number} index The category index.
 * @returns {HTMLElement} The created category list item.
 */
function createSkillsCategory(data, index) {
  // Create the category list item
  const categoryItem = document.createElement("li");
  categoryItem.className = "skills__category";
  categoryItem.setAttribute("data-animated", "false");
  categoryItem.setAttribute("data-animation", "left");
  categoryItem.style.setProperty("--order", index.toString());

  // Add the title to the category item
  const categoryTitle = document.createElement("h3");
  categoryTitle.className = "skills__category-title";
  categoryTitle.textContent = data.categoryTitle;
  categoryItem.appendChild(categoryTitle);

  // Add each skill to the category item
  const skillsList = document.createElement("ul");
  skillsList.className = "skills__list";
  skillsList.setAttribute("role", "list");
  for (const skillData of data.skills) {
    const skillItem = createSkill(skillData);
    skillsList.appendChild(skillItem);
  }
  categoryItem.appendChild(skillsList);

  // Return the category list item
  return categoryItem;
}

/**
 * Creates a skill list item from the provided data.
 * @param {Object} data The skill data.
 * @returns {HTMLElement} The created skill list item.
 */
function createSkill(data) {
  // Create the skill list item
  const skillItem = document.createElement("li");
  skillItem.className = "skill";

  // Add the icon to the skill item
  const skillIcon = document.createElement("img");
  skillIcon.src = data.icon;
  skillIcon.alt = `Icône de ${data.title}`;
  skillIcon.className = "skill__icon";
  skillIcon.style.width = data.width;
  data?.color ? (skillIcon.style.color = data?.color) : "";
  skillItem.appendChild(skillIcon);

  // Add the title to the skill item
  const skillTitle = document.createElement("span");
  skillTitle.className = "skill__name";
  skillTitle.textContent = data.title;
  skillItem.appendChild(skillTitle);

  // Return the skill list item
  return skillItem;
}

/**
 * Creates a project card from the provided data.
 * @param {Object} data The card data.
 * @returns {HTMLElement} The created project list item.
 */
function createProjectCard(data) {
  // Create the card element
  const cardElement = document.createElement("article");
  cardElement.className = "card";

  // Add the banner to the card
  const cardBanner = document.createElement("figure");
  cardBanner.className = "card__banner";
  const cardImage = document.createElement("img");
  cardImage.src = data.banner.url;
  cardImage.alt = data.banner.alt;
  // @ts-ignore
  cardImage.fetchPriority = "low";
  cardImage.width = 100;
  cardImage.loading = "lazy";
  cardBanner.appendChild(cardImage);
  cardElement.appendChild(cardBanner);

  // Add the content to the card
  const cardContent = document.createElement("div");
  cardContent.className = "card__content";

  // Add the header to the card content
  const cardHeader = document.createElement("header");
  cardHeader.className = "card__header";
  const cardTitle = document.createElement("h3");
  cardTitle.className = "card__title text-primary-gradient";
  cardTitle.textContent = data.title;
  cardHeader.appendChild(cardTitle);
  cardContent.appendChild(cardHeader);

  // Add the description to the card content
  const cardDescription = document.createElement("p");
  cardDescription.className = "card__description";
  cardDescription.textContent = data.description;
  cardContent.appendChild(cardDescription);

  // Add each button to the card content
  for (const buttonData of data.buttons) {
    const buttonElement = document.createElement("a");
    buttonElement.href = buttonData.link;
    buttonElement.target = "_blank";
    buttonElement.className = "card__button button";
    buttonElement.textContent = buttonData.title;
    cardContent.appendChild(buttonElement);
  }

  // Add the footer to the card content
  const cardFooter = document.createElement("footer");
  cardFooter.className = "card__footer";
  const cardTagsList = document.createElement("ul");
  cardTagsList.className = "card__tags";
  cardTagsList.setAttribute("role", "list");

  // Add each tag to the card footer
  for (const tagData of data.tags) {
    const tagItem = document.createElement("li");
    tagItem.className = "card__tag tag";
    tagItem.setAttribute("data-type", "primary");
    const tagIcon = document.createElement("img");
    tagIcon.src = tagData.icon;
    tagIcon.alt = `Icône de ${tagData.title}`;
    tagIcon.className = "tag__icon";
    tagItem.appendChild(tagIcon);
    const tagName = document.createElement("span");
    tagName.className = "tag__name";
    tagName.textContent = tagData.title;
    tagItem.appendChild(tagName);
    cardTagsList.appendChild(tagItem);
  }
  cardFooter.appendChild(cardTagsList);
  cardContent.appendChild(cardFooter);

  cardElement.appendChild(cardContent);

  // Create the project list item
  const projectItem = document.createElement("li");
  projectItem.className = "project";
  projectItem.appendChild(cardElement);

  // Return the project list item
  return projectItem;
}
