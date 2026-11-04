const { modulos, portal } = window.CYR_PORTAL_DATA;

const modulesGrid = document.querySelector("#modules-grid");
const searchInput = document.querySelector("#module-search");
const categoryFilter = document.querySelector("#category-filter");
const progressFilter = document.querySelector("#progress-filter");
const resultsStatus = document.querySelector("#results-status");
const progressStatus = document.querySelector("#progress-status");
const themeToggle = document.querySelector("#theme-toggle");
const navigation = document.querySelector("#site-navigation");
const completedModules = new Set(readProgress());

// Reads saved progress safely; corrupted or unavailable browser storage is reported in the page.
function readProgress() {
  try {
    const storedProgress = JSON.parse(localStorage.getItem("cyr-completed-modules") || "[]");
    return Array.isArray(storedProgress)
      ? storedProgress.filter((id) => modulos.some((modulo) => modulo.id === id))
      : [];
  } catch {
    showStorageNotice();
    return [];
  }
}

function showStorageNotice() {
  const notice = document.querySelector("#storage-notice");
  if (notice) {
    notice.hidden = false;
  }
}

function saveProgress() {
  try {
    localStorage.setItem("cyr-completed-modules", JSON.stringify([...completedModules]));
  } catch {
    showStorageNotice();
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function renderNavigation() {
  navigation.innerHTML = portal.navegacion
    .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.nombre)}</a>`)
    .join("");
}

function renderCover() {
  document.querySelector("#hero-eyebrow").textContent = portal.portada.etiqueta;
  document.querySelector("#page-title").textContent = portal.portada.tituloPrincipal;
  document.querySelector("#hero-subtitle").textContent = portal.portada.subtitulo;
  document.querySelector("#hero-description").textContent = portal.portada.descripcion;
  document.querySelector("#course-meta").textContent = portal.portada.metadatos;
  document.querySelector("#modules-title").textContent = portal.portada.tituloModulos;
  document.querySelector("#section-description").textContent = portal.portada.descripcionModulos;
  document.title = portal.titulo;
  document.querySelector('meta[name="description"]').content = portal.portada.descripcion;
}

function renderTeachers() {
  const teachers = [...new Set(modulos.map((modulo) => modulo.docente))];
  document.querySelector("#teachers-note").innerHTML =
    `DOCENTES <span>//</span> ${teachers.map(escapeHtml).join(" · ")}`;
}

function createList(items, label, renderItem = (item) => escapeHtml(item)) {
  const entries = items.map((item) => `<li>${renderItem(item)}</li>`).join("");
  return `
    <section class="module-detail">
      <h4>${label}</h4>
      <ul>${entries}</ul>
    </section>
  `;
}

function createResourceLink(resource) {
  return `<a class="resource-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.nombre)} ↗</a>`;
}

function createQuizQuestion(modulo, question, questionIndex) {
  const questionId = `${modulo.id}-question-${questionIndex}`;
  const options = question.opciones
    .map((option, optionIndex) => {
      const optionId = `${questionId}-option-${optionIndex}`;
      return `
        <label class="quiz-option" for="${optionId}">
          <input id="${optionId}" type="radio" name="${questionId}" value="${optionIndex}">
          <span>${escapeHtml(option)}</span>
        </label>
      `;
    })
    .join("");

  return `
    <fieldset class="quiz-question" data-question-index="${questionIndex}">
      <legend>${questionIndex + 1}. ${escapeHtml(question.pregunta)}</legend>
      <div class="quiz-options">${options}</div>
      <p class="question-feedback" aria-live="polite"></p>
    </fieldset>
  `;
}

function createModuleCard(modulo, index) {
  const card = document.createElement("article");
  card.className = "module-card";
  card.dataset.moduleId = modulo.id;
  card.dataset.category = modulo.categoria;
  card.innerHTML = `
    <div class="module-card-top">
      <span class="module-index">MÓDULO ${String(index + 1).padStart(2, "0")}</span>
      <span class="module-label">${escapeHtml(modulo.categoria)}</span>
    </div>
    <h3>${escapeHtml(modulo.nombre)}</h3>
    <p class="module-summary">${escapeHtml(modulo.resumen)}</p>
    <p class="module-teacher">DOCENTE <strong>// ${escapeHtml(modulo.docente)}</strong></p>
    <div class="module-details">
      ${createList(modulo.instrumentos, "INSTRUMENTOS")}
      ${createList(modulo.programas, "PROGRAMAS")}
      ${createList(modulo.herramientas, "HERRAMIENTAS")}
      ${createList(modulo.recursos, "RECURSOS", createResourceLink)}
    </div>
    <p class="evidence"><strong>EVIDENCIA FINAL //</strong> ${escapeHtml(modulo.evidencia)}</p>
    <details class="quiz">
      <summary>RESPONDER QUIZ · ${modulo.quiz.length} PREGUNTAS</summary>
      <div class="quiz-questions">
        ${modulo.quiz.map((question, questionIndex) => createQuizQuestion(modulo, question, questionIndex)).join("")}
      </div>
      <p class="quiz-result" aria-live="polite"></p>
    </details>
    <div class="module-footer">
      <span>ID ${escapeHtml(modulo.id)}</span>
      <span class="completion-badge" aria-live="polite"></span>
    </div>
  `;

  if (completedModules.has(modulo.id)) {
    card.querySelector(".completion-badge").textContent = "✓ COMPLETADO";
  }
  card.querySelector(".quiz").addEventListener("change", (event) => {
    if (event.target.matches('input[type="radio"]')) {
      evaluateAnswer(card, modulo, Number(event.target.closest("fieldset").dataset.questionIndex));
    }
  });
  return card;
}

// Gives immediate feedback and records a module after all questions are answered and passed.
function evaluateAnswer(card, modulo, questionIndex) {
  const questionElement = card.querySelector(`[data-question-index="${questionIndex}"]`);
  const question = modulo.quiz[questionIndex];
  const selectedAnswer = Number(questionElement.querySelector('input[type="radio"]:checked').value);
  const feedback = questionElement.querySelector(".question-feedback");
  const isCorrect = selectedAnswer === question.respuesta;

  feedback.textContent = isCorrect
    ? "¡Correcto! Buena respuesta."
    : "No es correcto. Puedes cambiar tu respuesta e intentarlo de nuevo.";
  feedback.classList.toggle("is-correct", isCorrect);
  feedback.classList.toggle("is-incorrect", !isCorrect);

  const answers = [...card.querySelectorAll(".quiz-question")].map((element, index) => {
    const selected = element.querySelector('input[type="radio"]:checked');
    return selected ? Number(selected.value) === modulo.quiz[index].respuesta : null;
  });
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const correctCount = answers.filter(Boolean).length;
  const result = card.querySelector(".quiz-result");

  if (answeredCount < modulo.quiz.length) {
    result.textContent = `${answeredCount} de ${modulo.quiz.length} preguntas respondidas.`;
    result.classList.remove("is-correct", "is-incorrect");
    return;
  }

  const passed = correctCount >= 2;
  result.textContent = passed
    ? `¡Aprobado! ${correctCount} de ${modulo.quiz.length} respuestas correctas. Módulo completado.`
    : `${correctCount} de ${modulo.quiz.length} correctas. Necesitas al menos 2; revisa tus respuestas.`;
  result.classList.toggle("is-correct", passed);
  result.classList.toggle("is-incorrect", !passed);

  if (passed && !completedModules.has(modulo.id)) {
    completedModules.add(modulo.id);
    saveProgress();
    card.querySelector(".completion-badge").textContent = "✓ COMPLETADO";
    updateProgress();
    applyFilters();
  }
}

function updateProgress() {
  progressStatus.textContent = `${completedModules.size} / ${modulos.length} módulos completados`;
}

function renderFilters() {
  const categories = [...new Set(modulos.map((modulo) => modulo.categoria))];
  categoryFilter.innerHTML = [
    '<option value="all">Todas las categorías</option>',
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`),
  ].join("");
}

// Applies text, category, and completion filters together as the user changes them.
function applyFilters() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  const category = categoryFilter.value;
  const status = progressFilter.value;
  let visibleCount = 0;

  modulesGrid.querySelectorAll(".module-card").forEach((card) => {
    const modulo = modulos.find((item) => item.id === card.dataset.moduleId);
    const searchableText = [
      modulo.nombre,
      modulo.resumen,
      modulo.categoria,
      ...modulo.instrumentos,
      ...modulo.programas,
      ...modulo.herramientas,
    ].join(" ").toLocaleLowerCase("es");
    const matchesText = searchableText.includes(query);
    const matchesCategory = category === "all" || modulo.categoria === category;
    const isCompleted = completedModules.has(modulo.id);
    const matchesStatus = status === "all" || (status === "completed" ? isCompleted : !isCompleted);
    const isVisible = matchesText && matchesCategory && matchesStatus;
    card.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  resultsStatus.textContent = visibleCount
    ? `${visibleCount} ${visibleCount === 1 ? "módulo encontrado" : "módulos encontrados"}`
    : "No hay módulos que coincidan con esos filtros.";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "light"));
  themeToggle.textContent = theme === "light" ? "☾ Modo oscuro" : "☼ Modo claro";
}

function initializeTheme() {
  let preferredTheme = "dark";
  try {
    preferredTheme = localStorage.getItem("cyr-theme") || "dark";
  } catch {
    showStorageNotice();
  }
  setTheme(preferredTheme === "light" ? "light" : "dark");
}

function renderModules() {
  if (!modulesGrid || !navigation || !searchInput || !categoryFilter || !progressFilter || !resultsStatus || !progressStatus || !themeToggle) {
    throw new Error("Faltan elementos necesarios del portal en index.html.");
  }

  renderCover();
  renderNavigation();
  renderTeachers();
  renderFilters();
  modulesGrid.replaceChildren(...modulos.map(createModuleCard));
  updateProgress();
  applyFilters();
  initializeTheme();
}

searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
progressFilter.addEventListener("change", applyFilters);
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  try {
    localStorage.setItem("cyr-theme", nextTheme);
  } catch {
    showStorageNotice();
  }
});

try {
  renderModules();
} catch (error) {
  console.error("No fue posible cargar el contenido del portal.", error);
  modulesGrid.innerHTML = '<p class="error-message">No se pudo cargar el contenido. Revisa los datos del curso e inténtalo de nuevo.</p>';
}
