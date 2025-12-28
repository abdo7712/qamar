/* ===== 1. نظام التنقل بين الأقسام (Tabs) ===== */
function showSection(sectionId) {
  // إخفاء كل الأقسام عن طريق إزالة class 'active'
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(sec => {
      sec.classList.remove('active');
  });

  // إظهار القسم المطلوب فقط بإضافة class 'active'
  const target = document.getElementById(sectionId);
  if (target) {
      target.classList.add('active');
      window.scrollTo(0, 0); // العودة للأعلى عند التبديل لراحة العين
  }
}

/* ===== 2. مولد المطر الرومانسي (دباديب، ورد، تلج، اسم قمر) ===== */
const romanticItems = ["QAMAR ❤️", "QAMARY 💖", "🧸", "🌹", "❄️", "❤️", "🌸", "🎁", "✨", "💜", "🤍"];

function createRomanticRain() {
  const container = document.getElementById('particles-container') || document.body;
  const item = document.createElement("div");
  
  item.className = "falling-item romantic-item";
  item.innerHTML = romanticItems[Math.floor(Math.random() * romanticItems.length)];

  // الإحداثيات والخصائص العشوائية
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = Math.random() * 15 + 15 + "px"; 
  
  // تعديل السرعة: جعلنا مدة الأنميشن أقل (بين 2 و 4 ثواني) لتسريع السقوط
  item.style.animationDuration = Math.random() * 2 + 2 + "s"; 
  
  item.style.opacity = Math.random() * 0.5 + 0.5; 
  item.style.position = "fixed";
  item.style.top = "-50px";
  item.style.zIndex = "999";
  item.style.pointerEvents = "none";

  container.appendChild(item);

  // مسح العنصر بعد انتهاء الأنميشن
  setTimeout(() => {
      item.remove();
  }, 4000);
}

// زيادة معدل الظهور: العناصر تظهر كل 150 مللي ثانية بدلاً من 250 لزيادة الكثافة
setInterval(createRomanticRain, 150);

/* ===== 3. تم إلغاء التشغيل التلقائي للموسيقى بناءً على طلبك ===== */
// الأغاني لن تعمل إلا إذا قامت "قمر" بالضغط على زر التشغيل في قسم الراديو.

/* ===== 4. تأثير نبض الشاشة الهادئ (Heartbeat Filter) ===== */
setInterval(() => {
  document.body.style.transition = "filter 0.15s ease-in-out";
  document.body.style.filter = "brightness(1.08)";
  setTimeout(() => {
      document.body.style.filter = "brightness(1)";
  }, 150);
}, 1300);