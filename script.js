// 화면 요소 가져오기
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// 메뉴 목록: 이름, 설명, 그리고 이 메뉴와 어울리는 키워드들
const menus = [
  { name: "🍲 김치찌개", desc: "따뜻하고 칼칼해서 든든해요.", keywords: ["매운", "매콤", "칼칼", "국물", "따뜻", "비", "추워", "한식", "밥", "든든", "혼자"] },
  { name: "🍜 라면", desc: "간단하고 빠르게 해결할 수 있어요.", keywords: ["라면", "국물", "간단", "빠르", "야식", "혼자", "매운", "비", "추워"] },
  { name: "🥘 떡볶이", desc: "매콤달콤한 맛이 당길 때 딱이에요.", keywords: ["매운", "매콤", "달콤", "분식", "스트레스", "간식", "친구"] },
  { name: "🍗 치킨", desc: "고민될 땐 역시 치킨이에요.", keywords: ["치킨", "튀김", "바삭", "야식", "맥주", "친구", "파티", "기름"] },
  { name: "🍕 피자", desc: "나눠 먹기 좋고 실패 확률이 낮아요.", keywords: ["피자", "치즈", "양식", "친구", "가족", "나눠", "파티"] },
  { name: "🍝 파스타", desc: "간단하지만 분위기 있는 한 끼예요.", keywords: ["파스타", "양식", "면", "분위기", "데이트", "느끼", "크림"] },
  { name: "🍣 초밥", desc: "가볍게 기분 전환하기 좋아요.", keywords: ["초밥", "생선", "일식", "가벼", "깔끔", "담백", "더워", "여름"] },
  { name: "🥗 샐러드", desc: "가볍고 건강하게 먹을 수 있어요.", keywords: ["샐러드", "가벼", "건강", "다이어트", "채소", "담백", "더워", "여름", "살"] },
  { name: "🍔 햄버거", desc: "빠르고 푸짐하게 먹고 싶을 때 좋아요.", keywords: ["햄버거", "패스트푸드", "빠르", "푸짐", "양식", "혼자", "바쁘"] },
  { name: "🍖 삼겹살", desc: "고기가 당기는 날엔 이게 최고예요.", keywords: ["고기", "삼겹살", "구이", "회식", "친구", "가족", "소주", "기름", "푸짐"] },
  { name: "🍛 카레", desc: "든든하고 부담 없는 한 끼예요.", keywords: ["카레", "밥", "든든", "부드러", "혼자", "일식", "따뜻"] },
  { name: "🍲 순두부찌개", desc: "얼큰하고 부드러워서 속이 편해요.", keywords: ["순두부", "국물", "얼큰", "매운", "해장", "속", "따뜻", "비", "한식"] },
  { name: "🍚 비빔밥", desc: "채소도 먹고 든든하게 먹기 좋아요.", keywords: ["비빔밥", "밥", "채소", "건강", "한식", "담백", "혼자"] },
  { name: "🍜 냉면", desc: "시원하게 속을 식혀 줘요.", keywords: ["냉면", "시원", "차가", "더워", "여름", "면", "새콤"] },
  { name: "🥟 만두", desc: "가볍게 먹기 좋은 따뜻한 간식이에요.", keywords: ["만두", "간식", "분식", "가벼", "따뜻", "혼자", "출출"] },
];

// 입력한 글과 각 메뉴의 키워드가 몇 개 맞는지 점수 매기기
function scoreMenu(text, menu) {
  let score = 0;
  for (const word of menu.keywords) {
    if (text.includes(word)) score += 1;
  }
  return score;
}

// 점수가 가장 높은 메뉴 중에서 하나 고르기 (동점이면 랜덤)
function recommend(text) {
  const scored = menus.map((m) => ({ menu: m, score: scoreMenu(text, m) }));
  const best = Math.max(...scored.map((s) => s.score));

  // 하나도 안 맞으면 전체에서 랜덤
  const pool = best === 0 ? scored : scored.filter((s) => s.score === best);
  const pick = pool[Math.floor(Math.random() * pool.length)].menu;

  const intro = best === 0
    ? "딱 맞는 키워드는 못 찾았지만, 이건 어때요?"
    : "말씀하신 내용으로 골라 봤어요!";
  return `${intro}\n\n${pick.name}\n${pick.desc}`;
}

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    alert("먹고 싶은 걸 먼저 적어 주세요!");
    return;
  }
  result.classList.remove("hidden");
  result.textContent = recommend(text);
  btn.textContent = "다시 추천받기";
});
