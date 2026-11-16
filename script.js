// เลือกปุ่มกรองและการ์ดทั้งหมด
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    // ย้ายสถานะ active และแจ้งสถานะตัวกรองให้โปรแกรมอ่านหน้าจอ
    buttons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    // แสดง/ซ่อนการ์ดตามหมวดหมู่
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !match);
    });
  });
});
