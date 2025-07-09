function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// // 모달 외부 클릭 시 닫기
//   window.addEventListener("click", function (event) {
//     const modals = document.querySelectorAll('.modal');
//     modals.forEach(modal => {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   });