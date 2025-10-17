document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      // Get the current answer element
      const answer = question.nextElementSibling;

      // Toggle the 'active' class on the button itself
      question.classList.toggle("active");

      // Toggle the 'open' class on the answer
      // This is what triggers the CSS transition (max-height)
      answer.classList.toggle("open");
    });
  });
});
