// 화면 요소 가져오기
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

// ───────── 1. 메뉴 목록 ─────────
// m(이름, 설명, "태그 태그 ...") 형태. 메뉴를 추가하려면 한 줄만 더 쓰면 돼요!
const m = (name, desc, tags) => ({ name, desc, tags: tags.split(" ") });

const menus = [
  // 한식
  m("🍲 김치찌개", "칼칼하고 따뜻해서 든든해요.", "한식 매운 국물 따뜻 든든 밥 혼자"),
  m("🍲 된장찌개", "구수하고 속이 편안해요.", "한식 국물 따뜻 담백 밥 혼자"),
  m("🍲 순두부찌개", "얼큰하고 부드러워 해장에도 좋아요.", "한식 매운 국물 따뜻 해장 혼자"),
  m("🍲 부대찌개", "푸짐하게 같이 끓여 먹기 좋아요.", "한식 매운 국물 따뜻 든든 같이 느끼 술"),
  m("🍖 삼겹살", "고기가 당기는 날엔 이게 최고예요.", "한식 고기 든든 같이 술 느끼"),
  m("🥩 불고기", "달콤짭짤해서 누구나 좋아해요.", "한식 고기 달콤 밥 든든 같이"),
  m("🍚 비빔밥", "채소도 먹고 든든하게 먹을 수 있어요.", "한식 밥 채소 건강 담백 혼자"),
  m("🌶️ 제육볶음", "매콤한 고기에 밥 한 공기가 뚝딱이에요.", "한식 고기 매운 밥 든든 혼자"),
  m("🍲 갈비탕", "맑고 진한 국물로 몸보신해요.", "한식 고기 국물 따뜻 든든 담백"),
  m("🍲 설렁탕", "뽀얀 국물이 속을 따뜻하게 해줘요.", "한식 고기 국물 따뜻 담백 해장 든든"),
  m("🍲 감자탕", "얼큰한 국물에 뼈 뜯는 재미가 있어요.", "한식 고기 매운 국물 따뜻 든든 같이 술 야식 해장"),
  m("🍗 닭갈비", "매콤한 닭고기에 볶음밥까지 완벽해요.", "한식 고기 매운 든든 같이 밥"),
  m("🍗 찜닭", "달콤짭짤한 간장 양념이 매력이에요.", "한식 고기 달콤 든든 같이 밥"),
  m("🥬 보쌈", "부드러운 수육을 쌈에 싸 먹어요.", "한식 고기 채소 담백 같이 술"),
  m("🍖 족발", "야식으로 먹기 딱 좋은 쫀득한 맛이에요.", "한식 고기 야식 같이 술 느끼"),
  m("🍜 냉면", "시원하게 속을 식혀줘요.", "한식 면 시원 새콤 담백"),
  m("🍜 칼국수", "후루룩 따뜻하게 먹는 한 그릇이에요.", "한식 면 국물 따뜻 담백 혼자"),
  m("🍜 수제비", "쫀득한 반죽이 비 오는 날과 잘 어울려요.", "한식 면 국물 따뜻 담백 간단"),
  m("🍙 김밥", "간단하게 들고 먹기 좋아요.", "분식 밥 간단 빠른 혼자 가벼운"),
  m("🍗 삼계탕", "여름 더위에 기운을 채워줘요.", "한식 고기 국물 따뜻 든든 건강 담백"),
  m("🍲 육개장", "얼큰하고 깊은 국물이 일품이에요.", "한식 고기 매운 국물 따뜻 든든 해장"),
  m("🍲 미역국", "부드럽고 편안한 국물이에요.", "한식 국물 따뜻 담백 밥 건강"),
  m("🐟 생선구이", "고소하고 담백한 집밥 느낌이에요.", "한식 해산물 담백 밥 건강 혼자"),
  m("🦑 오징어볶음", "매콤하게 밥을 비벼 먹고 싶을 때 좋아요.", "한식 해산물 매운 밥 든든"),
  m("🐙 낙지볶음", "화끈하게 매운 맛이 스트레스를 풀어줘요.", "한식 해산물 매운 밥 술"),
  m("🥞 해물파전", "비 오는 날 막걸리와 함께 먹는 바삭함이에요.", "한식 해산물 튀김 바삭 같이 술 비 따뜻"),
  m("🍜 막국수", "새콤하고 시원하게 말아 먹어요.", "한식 면 시원 새콤 담백"),
  m("🥬 쌈밥", "채소를 듬뿍 먹을 수 있어요.", "한식 밥 채소 건강 담백 가벼운"),
  m("🍖 곱창", "고소하고 쫄깃한 맛에 술이 절로 생각나요.", "한식 고기 야식 같이 술 느끼"),
  m("🍲 닭한마리", "깔끔한 국물에 닭과 칼국수를 즐겨요.", "한식 고기 국물 따뜻 담백 같이 든든"),
  m("🍚 국밥", "든든하게 속을 채우기 좋아요.", "한식 밥 국물 따뜻 든든 해장 혼자"),

  // 분식
  m("🥘 떡볶이", "매콤달콤한 맛이 당길 때 딱이에요.", "분식 매운 달콤 간식 혼자 같이 스트레스"),
  m("🍜 라면", "간단하고 빠르게 해결할 수 있어요.", "분식 면 국물 매운 간단 빠른 혼자 야식 따뜻"),
  m("🍢 순대", "쫄깃하게 간식으로 먹기 좋아요.", "분식 간식 간단 혼자 같이"),
  m("🍤 튀김", "바삭한 맛에 떡볶이 국물이 어울려요.", "분식 튀김 바삭 간식 간단 같이"),
  m("🥟 만두", "따뜻하고 가볍게 먹기 좋아요.", "분식 간식 가벼운 따뜻 간단 혼자"),
  m("🍝 쫄면", "새콤매콤하게 입맛을 살려줘요.", "분식 면 매운 새콤 시원 간단"),
  m("🥘 라볶이", "라면과 떡볶이를 한 번에 먹어요.", "분식 면 매운 달콤 든든 스트레스"),
  m("🥪 토스트", "달콤짭짤하고 든든한 간단 한 끼예요.", "간단 빠른 달콤 혼자 가벼운 분식"),

  // 중식
  m("🍜 짜장면", "달콤하고 고소해서 실패가 없어요.", "중식 면 달콤 느끼 든든 혼자 같이"),
  m("🍜 짬뽕", "얼큰한 국물이 시원해요.", "중식 면 매운 국물 따뜻 해산물 해장 비"),
  m("🍤 탕수육", "바삭한 튀김에 새콤달콤 소스가 어울려요.", "중식 튀김 바삭 달콤 새콤 같이 고기"),
  m("🌶️ 마라탕", "얼얼하게 매운맛으로 스트레스를 날려요.", "중식 매운 국물 따뜻 이국적 스트레스 같이 면"),
  m("🍚 볶음밥", "고슬고슬하게 간단히 한 끼 해결해요.", "중식 밥 간단 빠른 든든 혼자"),
  m("🥟 딤섬", "한입에 쏙 들어가는 가벼운 맛이에요.", "중식 가벼운 이국적 같이 따뜻 담백"),
  m("🍗 깐풍기", "매콤달콤하게 튀긴 닭이 술안주로 좋아요.", "중식 튀김 고기 매운 달콤 술 같이"),
  m("🍜 마라샹궈", "내가 고른 재료를 볶아 얼얼하게 먹어요.", "중식 매운 이국적 같이 술 스트레스 채소"),

  // 일식
  m("🍣 초밥", "가볍게 기분 전환하기 좋아요.", "일식 해산물 가벼운 담백 깔끔 혼자 같이"),
  m("🍜 라멘", "진한 국물이 속을 든든하게 채워줘요.", "일식 면 국물 따뜻 든든 느끼 혼자"),
  m("🍛 돈카츠", "바삭하고 두툼한 고기가 만족스러워요.", "일식 고기 튀김 바삭 든든 혼자"),
  m("🍜 우동", "따뜻하고 부드러운 국물이 편안해요.", "일식 면 국물 따뜻 담백 혼자 비"),
  m("🍜 소바", "시원하게 후루룩 먹기 좋아요.", "일식 면 시원 담백 가벼운 혼자"),
  m("🍚 규동", "빠르게 먹는 달콤짭짤한 소고기 덮밥이에요.", "일식 밥 고기 달콤 빠른 간단 혼자"),
  m("🍛 카레", "든든하고 부담 없는 한 끼예요.", "일식 밥 든든 따뜻 혼자 간단"),
  m("🐟 회", "신선하고 깔끔하게 한잔하기 좋아요.", "해산물 담백 깔끔 술 같이 시원"),
  m("🥞 오코노미야키", "철판에서 구운 짭짤한 일본식 부침개예요.", "일식 이국적 느끼 술 같이"),

  // 양식
  m("🍕 피자", "나눠 먹기 좋고 실패 확률이 낮아요.", "양식 치즈 느끼 같이 야식 든든"),
  m("🍝 파스타", "간단하지만 분위기 있는 한 끼예요.", "양식 면 느끼 데이트 같이 혼자"),
  m("🍔 햄버거", "빠르고 푸짐하게 먹고 싶을 때 좋아요.", "양식 고기 빠른 간단 든든 혼자 느끼"),
  m("🥩 스테이크", "특별한 날 기분 내기 좋아요.", "양식 고기 든든 데이트 같이 느끼"),
  m("🍚 리조또", "부드럽고 크리미한 한 그릇이에요.", "양식 밥 느끼 따뜻 데이트 혼자"),
  m("🥪 샌드위치", "가볍고 간단하게 먹기 좋아요.", "양식 가벼운 간단 빠른 혼자 건강"),
  m("🥗 샐러드", "가볍고 건강하게 먹을 수 있어요.", "양식 채소 가벼운 건강 담백 시원 혼자"),
  m("🧀 그라탕", "치즈가 듬뿍 올라간 따뜻한 오븐 요리예요.", "양식 느끼 따뜻 치즈 든든"),
  m("🌭 핫도그", "간단하게 들고 다니며 먹기 좋아요.", "양식 간식 간단 빠른 튀김 달콤"),

  // 아시아·세계
  m("🍜 쌀국수", "깔끔한 국물에 속이 편안해져요.", "이국적 면 국물 따뜻 담백 해장 혼자 가벼운"),
  m("🍝 팟타이", "새콤달콤한 태국식 볶음면이에요.", "이국적 면 새콤 달콤 혼자"),
  m("🥖 반미", "바삭한 빵에 채소와 고기를 넣은 베트남 샌드위치예요.", "이국적 가벼운 간단 빠른 혼자 채소"),
  m("🍛 인도 커리와 난", "향신료 향이 진한 색다른 한 끼예요.", "이국적 든든 따뜻 같이 매운"),
  m("🌮 타코", "한입에 즐기는 멕시코 요리예요.", "이국적 같이 술 간식 매운"),
  m("🌯 부리토", "한 손에 들고 든든하게 먹어요.", "이국적 든든 빠른 간단 혼자"),
  m("🥙 케밥", "푸짐하고 간편한 터키식 한 끼예요.", "이국적 고기 든든 간단 빠른"),
  m("🍲 훠궈", "여럿이 끓여 먹는 즐거움이 있어요.", "중식 이국적 국물 따뜻 매운 같이 든든 비"),

  // 야식·치킨
  m("🍗 후라이드치킨", "고민될 땐 역시 치킨이에요.", "튀김 바삭 고기 야식 술 같이 느끼"),
  m("🍗 양념치킨", "달콤매콤한 소스가 중독적이에요.", "튀김 고기 달콤 매운 야식 술 같이"),
  m("🐔 닭발", "화끈한 매운맛으로 스트레스를 풀어요.", "매운 고기 야식 술 같이 스트레스"),
  m("🍲 해물탕", "시원하고 칼칼한 국물이 일품이에요.", "해산물 국물 매운 따뜻 같이 술 해장"),
  m("🦪 조개구이", "불에 구워 먹는 즐거움이 있어요.", "해산물 같이 술 야식"),
  m("🍲 매운탕", "얼큰한 국물에 한잔 생각나요.", "해산물 매운 국물 따뜻 술 해장 같이"),

  // 가볍게
  m("🥣 죽", "속이 안 좋을 때 부드럽게 먹어요.", "한식 따뜻 담백 가벼운 건강 간단 혼자"),
  m("🥗 포케", "신선한 재료를 올린 가벼운 덮밥이에요.", "가벼운 건강 해산물 채소 이국적 혼자 시원"),
  m("🥯 베이글", "간단하게 아침이나 점심으로 좋아요.", "양식 가벼운 간단 빠른 혼자 달콤"),
  m("🍦 빙수", "더운 날 달콤하게 식히는 디저트예요.", "달콤 시원 간식 같이"),
];

// ───────── 2. 비슷한 말 사전 ─────────
// 사용자가 쓴 단어(왼쪽) → 메뉴 태그(오른쪽)
// 한 글자짜리 단어(면, 밥, 술...)는 "면접", "회사" 같은 엉뚱한 단어에 걸리지 않도록
// 뒤에 조사나 띄어쓰기가 올 때만 인식해요. (아래 findWord 함수 참고)
const synonyms = [
  [["매운", "매콤", "칼칼", "얼큰", "화끈", "매워", "맵게", "맵다", "맵고"], ["매운"]],
  [["국물", "탕", "찌개", "국밥"], ["국물"]],
  [["따뜻", "따듯", "뜨끈", "뜨거", "후끈"], ["따뜻"]],
  [["비 오", "비오", "비가", "비는", "빗", "장마", "눈 오", "눈오", "추워", "추운", "춥다", "쌀쌀", "겨울"], ["국물", "따뜻"]],
  [["더워", "더운", "덥다", "여름", "시원", "차가", "무더"], ["시원"]],
  [["가벼", "가볍", "부담 없", "부담없", "다이어트", "살 빼", "살빼", "살이", "살찔", "칼로리"], ["가벼운", "건강"]],
  [["건강", "몸에 좋", "웰빙"], ["건강"]],
  [["든든", "배고", "푸짐", "많이", "허기", "배불"], ["든든"]],
  [["고기", "육류", "단백질"], ["고기"]],
  [["면", "국수", "누들"], ["면"]],
  [["밥", "덮밥"], ["밥"]],
  [["튀김", "바삭", "치킨", "튀긴"], ["튀김", "바삭"]],
  [["해산물", "생선", "회", "횟집", "조개", "새우", "오징어", "바다"], ["해산물"]],
  [["채소", "야채"], ["채소"]],
  [["한식", "한국"], ["한식"]],
  [["중식", "중국"], ["중식"]],
  [["일식", "일본"], ["일식"]],
  [["양식", "서양"], ["양식"]],
  [["분식"], ["분식"]],
  [["야식", "밤에", "밤늦", "새벽", "출출"], ["야식"]],
  [["혼자", "혼밥", "나 혼자"], ["혼자"]],
  [["친구", "가족", "같이", "함께", "여럿", "회식", "모임", "커플", "우리"], ["같이"]],
  [["데이트", "분위기", "기념일", "소개팅"], ["데이트"]],
  [["술", "맥주", "소주", "막걸리", "안주", "한잔", "와인"], ["술"]],
  [["달콤", "달달", "달아", "단 거", "단거"], ["달콤"]],
  [["해장", "숙취", "속 풀", "속풀", "과음"], ["해장", "국물"]],
  [["간단", "빨리", "빠르", "급해", "바빠", "시간 없"], ["간단", "빠른"]],
  [["느끼", "기름", "크림", "치즈", "고소"], ["느끼"]],
  [["담백", "깔끔", "순한", "순하", "속 편", "속편", "자극 없"], ["담백"]],
  [["새콤", "상큼", "시큼"], ["새콤"]],
  [["이국", "색다", "특이", "새로운", "신기", "외국"], ["이국적"]],
  [["스트레스", "우울", "화나", "짜증", "기분 전환", "기분전환", "힘들"], ["매운", "달콤", "스트레스"]],
  [["간식", "심심"], ["간식"]],
  // 시간대
  [["아침", "브런치"], ["가벼운", "간단"]],
  [["점심"], ["빠른"]],
  [["저녁"], ["든든"]],
];

// "말고", "빼고", "싫어" 같은 부정 표현 (키워드 바로 뒤에 오면 "그건 싫다"는 뜻)
const NEGATIVE = /^.{0,8}?(말고|빼고|빼줘|싫어|질려|질렸|별로|제외|안 땡|안땡|안 먹|못 먹|말구)/;

// ───────── 3. 단어 찾기 ─────────
const HANGUL = "가-힣";

// 글 안에서 단어를 찾아 { start, end } 위치를 돌려줘요. 없으면 null.
function findWord(text, word) {
  if (word.length >= 2) {
    const i = text.indexOf(word);
    return i === -1 ? null : { start: i, end: i + word.length };
  }
  // 한 글자 단어: 앞이 한글이 아니고, 뒤가 조사/띄어쓰기/끝일 때만 인정
  const re = new RegExp(`(^|[^${HANGUL}])${word}(?=$|[^${HANGUL}]|[이가을를은는도랑과로에만])`);
  const m = re.exec(text);
  if (!m) return null;
  const start = m.index + m[1].length;
  return { start, end: start + word.length };
}

// 입력한 글을 분석해서 좋아하는 태그(wanted)와 피하고 싶은 태그(avoid)를 만들어요.
function analyze(text) {
  const wanted = {};
  const avoid = new Set();
  for (const [words, tags] of synonyms) {
    let found = null;
    for (const w of words) {
      found = findWord(text, w);
      if (found) break;
    }
    if (!found) continue;
    const after = text.slice(found.end);
    if (NEGATIVE.test(after)) {
      tags.forEach((t) => avoid.add(t));
    } else {
      tags.forEach((t) => (wanted[t] = (wanted[t] || 0) + 1));
    }
  }
  return { wanted, avoid };
}

// 메뉴 이름에서 이모지를 빼고 이름만 꺼내기
function splitName(name) {
  const m = name.match(/^(\S+)\s(.+)$/);
  return { emoji: m[1], title: m[2] };
}

// 메뉴 점수: 태그가 맞으면 +1, 메뉴 이름을 직접 말하면 +5 (그 메뉴가 싫다고 하면 제외)
function score(menu, text, wanted, avoid) {
  const { title } = splitName(menu.name);
  const hit = findWord(text, title);
  if (hit && NEGATIVE.test(text.slice(hit.end))) return -1; // "삼겹살 말고"
  if (menu.tags.some((t) => avoid.has(t) && !wanted[t])) return -1; // "매운 거 말고"
  let s = 0;
  for (const t of menu.tags) s += wanted[t] || 0;
  if (hit) s += 5;
  return s;
}

// ───────── 4. 랜덤 뽑기 ─────────
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// 가중치 랜덤: 가중치가 클수록 뽑힐 확률이 높음
function weightedPick(items, weightOf) {
  const total = items.reduce((sum, it) => sum + weightOf(it), 0);
  let r = Math.random() * total;
  for (const it of items) {
    r -= weightOf(it);
    if (r <= 0) return it;
  }
  return items[items.length - 1];
}

// 한 번 추천하기. skip에 들어 있는 메뉴(방금 본 것, 싫어요 누른 것)는 빼고 뽑아요.
function recommend(text, skip) {
  const { wanted, avoid } = analyze(text);
  const scored = menus
    .map((menu) => ({ menu, s: score(menu, text, wanted, avoid) }))
    .filter((x) => x.s >= 0 && !skip.has(x.menu));

  const matched = scored.filter((x) => x.s > 0);
  let pick, intro;

  if (matched.length > 0) {
    // 점수가 높을수록 뽑힐 확률이 큼 (점수의 제곱). 메인은 항상 입력과 맞는 메뉴!
    pick = weightedPick(matched, (x) => x.s * x.s).menu;
    intro = "👍 말씀하신 내용에 맞춰 골라 봤어요!";
  } else if (scored.length > 0) {
    pick = pickRandom(scored).menu;
    intro = "🎲 힌트가 없어서 랜덤으로 뽑아 봤어요!";
  } else {
    // 후보가 다 떨어졌으면 싫어요 목록을 비우고 처음부터
    skip.clear();
    const all = menus.filter((mn) => score(mn, text, wanted, avoid) >= 0);
    pick = pickRandom(all.length ? all : menus);
    intro = "🔁 다 보셨네요! 처음부터 다시 골라 봤어요.";
  }

  // 이런 메뉴도 있어요: 조건에 맞는 다른 메뉴 중 최대 3개
  const others = matched.map((x) => x.menu).filter((mn) => mn !== pick);
  const extras = [];
  while (extras.length < 3 && others.length > 0) {
    extras.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
  }

  // 깜짝 추천: 30% 확률로 별도 카드에 조건과 상관없는 메뉴를 보여줘요.
  let surprise = null;
  if (Math.random() < 0.3) {
    const pool = scored.map((x) => x.menu).filter((mn) => mn !== pick && !extras.includes(mn));
    if (pool.length > 0) surprise = pickRandom(pool);
  }

  return { pick, intro, extras, surprise };
}

// ───────── 5. 화면 그리기 ─────────
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function mapLink(menu) {
  const a = el("a", "btn-sub", "📍 근처 맛집 찾기");
  a.href = "https://map.naver.com/p/search/" + encodeURIComponent(splitName(menu.name).title);
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function render(data) {
  const { pick, intro, extras, surprise } = data;
  const { emoji, title } = splitName(pick.name);
  result.replaceChildren();

  const box = el("div", "pick");
  box.append(
    el("p", "intro", intro),
    el("div", "emoji", emoji),
    el("h2", "menu-title", title),
    el("p", "menu-desc", pick.desc)
  );

  const actions = el("div", "actions");
  const nope = el("button", "btn-sub", "👎 다른 메뉴");
  nope.type = "button";
  nope.addEventListener("click", () => {
    skip.add(pick);
    showRecommendation();
  });
  actions.append(mapLink(pick), nope);
  box.append(actions);
  result.append(box);

  if (extras.length > 0) {
    const row = el("div", "extras");
    row.append(el("p", "extras-label", "이런 메뉴도 있어요 (눌러 보세요)"));
    const chips = el("div", "chips");
    for (const mn of extras) {
      const chip = el("button", "chip", mn.name);
      chip.type = "button";
      chip.addEventListener("click", () => {
        skip.add(pick);
        render({ pick: mn, intro: "👆 직접 고르셨어요!", extras: [], surprise: null });
      });
      chips.append(chip);
    }
    row.append(chips);
    result.append(row);
  }

  if (surprise) {
    const card = el("div", "surprise");
    card.append(
      el("p", "surprise-label", "🎁 깜짝 추천! 가끔은 색다르게 먹어 볼까요?"),
      el("p", "surprise-name", surprise.name),
      el("p", "menu-desc", surprise.desc)
    );
    result.append(card);
  }

  result.classList.remove("hidden");
  // 애니메이션을 다시 재생
  result.classList.remove("show");
  void result.offsetWidth;
  result.classList.add("show");
}

// ───────── 6. 버튼과 키보드 ─────────
const skip = new Set(); // 방금 본 메뉴, 싫어요 누른 메뉴
let lastText = "";

function showRecommendation() {
  const text = input.value.trim();
  if (!text) {
    alert("먹고 싶은 걸 먼저 적어 주세요!");
    input.focus();
    return;
  }
  if (text !== lastText) {
    skip.clear(); // 새 문장이면 목록 초기화
    lastText = text;
  }
  if (spinning) return; // 룰렛이 도는 중에는 또 누를 수 없게
  const data = recommend(text, skip);
  skip.add(data.pick); // 같은 메뉴가 연속으로 나오지 않게
  spinThen(() => {
    render(data);
    btn.textContent = "다시 추천받기";
  });
}

// 룰렛 연출: 이모지가 빠르게 바뀌다가 결과가 나와요
let spinning = false;
function spinThen(done) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { done(); return; } // 움직임을 줄이고 싶은 사용자는 바로 결과

  spinning = true;
  btn.disabled = true;
  result.replaceChildren();
  const box = el("div", "spinner");
  const face = el("div", "emoji spin-emoji", "🍽️");
  box.append(face, el("p", "intro", "무엇을 먹을까 고르는 중..."));
  result.append(box);
  result.classList.remove("hidden", "show");

  let n = 0;
  const timer = setInterval(() => {
    face.textContent = splitName(pickRandom(menus).name).emoji;
    if (++n >= 9) {
      clearInterval(timer);
      spinning = false;
      btn.disabled = false;
      done();
    }
  }, 90);
}

btn.addEventListener("click", showRecommendation);

// Enter로 추천받기 (Shift+Enter는 줄바꿈, 한글 조합 중에는 무시)
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
    e.preventDefault();
    showRecommendation();
  }
});

// 예시 칩: 누르면 문장이 입력되고 바로 추천
document.querySelectorAll(".example").forEach((b) => {
  b.addEventListener("click", () => {
    input.value = b.dataset.text;
    showRecommendation();
  });
});
