// 처음 시작할 때 하트 여러 개 생성
for (let i = 0; i < 20; i++) {
    createHeart();
}

// 일정 시간마다 계속 하트 추가 생성
setInterval(() => {
    createHeart();
}, 800);

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    // 화면 랜덤 위치에서 생성
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = (Math.random() * 40 + 60) + "vh"; // 아래쪽에서 위로 떠오르게
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heart.style.fontSize = (18 + Math.random() * 15) + "px";

    document.body.appendChild(heart);

    // 애니메이션 끝나면 DOM에서 제거
    setTimeout(() => {
        heart.remove();
    }, 7000);
}
