// document.addEventListener("DOMContentLoaded", () => {
//   const splashScreen = document.getElementById("splash-screen");

//   // Sayfa yüklenirken splash screen'i göster
//   splashScreen.classList.add("active");

//   // Sayfa tam yüklendiğinde splash screen'i küçült ve gizle
//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       splashScreen.style.transform = "translate(-50%, -50%) scale(0.5)";
//       splashScreen.style.opacity = "0";
//     }, 3000); // 3 saniye sonra animasyonu başlat

//     // Animasyon bitimini takip et ve splash screen'i DOM'dan kaldır
//     splashScreen.addEventListener("transitionend", () => {
//       splashScreen.remove();
//     });
//   });
// });
