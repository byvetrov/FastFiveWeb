// Установка глобальной функции toggleTheme
window.toggleTheme = function () {
  // Определяем текущую тему
  const currentTheme = document.documentElement.className;
  // Меняем тему на противоположную
  const newTheme = currentTheme === "theme-light" ? "theme-dark" : "theme-light";
  // Применяем новую тему
  document.documentElement.className = newTheme;

  // Сохраняем новую тему в localStorage
  localStorage.setItem("selectedTheme", newTheme);

  // Обновляем состояние переключателя, если он существует
  const slider = document.getElementById("slider");
  if (slider) {
    slider.checked = newTheme === "theme-light";
  }
};

// Устанавливаем тему при загрузке страницы
(function () {
  // Добавляем класс для отключения анимации
  document.documentElement.classList.add("no-transition");

  // Проверяем, есть ли сохранённая тема в localStorage
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    // Если сохранённая тема найдена, используем её
    document.documentElement.className = savedTheme;
  } else {
    // Если темы нет, определяем системную тему
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "theme-dark"
      : "theme-light";
    // Устанавливаем системную тему
    document.documentElement.className = systemTheme;
  }

  // Устанавливаем состояние переключателя, если он существует
  const slider = document.getElementById("slider");
  if (slider) {
    slider.checked = document.documentElement.className === "theme-light";
  }

  // Убираем класс отключения анимации после короткой задержки
  setTimeout(() => {
    document.documentElement.classList.remove("no-transition");
  }, 0);
})();
