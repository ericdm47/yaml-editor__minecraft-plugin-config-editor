import { PresetsMap } from "./types";

export const DEFAULT_YAML = `weapon:
  name: fnp90
  displayname: "&6FN-P90"
  id: 59
  variant: 0
  craftingRequirements:
    - IRON_INGOT
    - "0"
    - "15"
    - REDSTONE
    - "0"
    - "5"
  weapontype: SMG
  weaponsounds: bulletsilence
  enableIronSights: true
combat:
  damage: 15
  recoil: 0.7
  firerate: 3
  isAutomatic: true
  delayForReload: 2.5
ammo:
  maxbullets: 50
  ammotype: "556"
`;

export const PRESETS: PresetsMap = {
  SMG: {
    recoil: 0.3,
    firerate: 3.5,
    damage: 12,
    maxbullets: 50,
  },
  SR: {
    recoil: 5.0,
    firerate: 1.0,
    damage: 95,
    maxbullets: 5,
  },
  AR: {
    recoil: 0.7,
    firerate: 3.0,
    damage: 22,
    maxbullets: 30,
  },
  HG: {
    recoil: 0.1,
    firerate: 2.0,
    damage: 10,
    maxbullets: 12,
  },
  SG: {
    recoil: 1.5,
    firerate: 1.0,
    damage: 45,
    maxbullets: 8,
  },
  DMR: {
    recoil: 0.8,
    firerate: 2.0,
    damage: 35,
    maxbullets: 20,
  },
};

export const DESCRIPTIONS_KO: Record<string, string> = {
  damage: "총기의 기본 데미지입니다. 값이 높을수록 대상에게 주는 피해가 증가합니다.",
  firerate: "연사 속도입니다. 이 숫자가 커질수록 단위 시간당 발사 가능한 총알 수가 늘어납니다.",
  recoil: "반동 세기입니다. 사격 시 가늠쇠 조준선 및 시야가 위로 튀는 오차율을 결정합니다. (기본값 AR: 0.7)",
  maxbullets: "탄창 한 개에 장전할 수 있는 최대 탄약 수(장탄수)입니다.",
  maxBulletDistance: "탄환의 유효 사거리(블록 단위)입니다. 유효 범위 밖에서는 탄환 데미지가 대폭 감쇄합니다.",
  setZoomLevel: "줌 배율 수준입니다. 우클릭 정조준 시의 시야 축소 배율을 높입니다.",
  delayForShoot: "사격 간의 지연 딜레이 시간입니다. 숫자가 작을수록 더 빠른 단발 사격이 가능해집니다.",
  isAutomatic: "마우스 클릭 상태를 유지할 때 총알이 연속으로 자동 발사(연사)되게 할지 여부입니다.",
  delayForReload: "재장전 모션이 시작된 후, 탄약 보충이 완료될 때까지 소요되는 총 시간(초 단위)입니다.",
  ammotype: "사용하는 탄약의 종류 및 규격을 수식하는 코드명입니다.",
  name: "총기 아이디 또는 내부 시스템 플러그인에 인식되는 전역 고유명사입니다.",
  displayname: "인게임 툴팁 및 킬로그 UI 상에서 유저들에게 화려하게 보여줄 색상 코드 명칭칭입니다.",
  id: "아이템 고유 정수 ID 또는 서버와 호환되는 리소스 보더 인덱스 값입니다.",
  variant: "총기의 3D 모델링 스킨이나 특색 텍스처를 변경할 수 있는 바리에이션 서브 코드 값입니다.",
  craftingRequirements: "제작대에서 총기를 조합해 만드는 데 필요한 마인크래프트 물리 원소 및 금속/레드스톤 배율입니다.",
  weapontype: "설장 무기의 전술 카테고리 유형(SMG, SR, AR, HG, SG, DMR)입니다.",
  weaponsounds: "사격, 재장전, 탄창 제거 및 기타 기계 수동 조작 시 실행될 사운드 에셋 경로입니다.",
  enableIronSights: "아이언 사이트(가늠쇠/가늠구멍)를 통한 견착 조준 시스템을 활성화할지 판단하는 기준 값입니다.",
};

export const DESCRIPTIONS_EN: Record<string, string> = {
  damage: "The base damage of the firearm. Higher values increase the physical damage dealt to targets.",
  firerate: "The rate of fire. Larger numbers increase the number of bullets fired per unit time.",
  recoil: "The intensity of recoil. Determines the cursor and camera vertical jumping error rate when shooting. (Default AR: 0.7)",
  maxbullets: "The maximum number of bullets that can be loaded into a single magazine (Magazine capacity).",
  maxBulletDistance: "The effective range of the bullet (in blocks). Bullet damage decays severely beyond this range.",
  setZoomLevel: "Zoom magnification level. Increases the field of view zoom magnification when aiming with right-click.",
  delayForShoot: "Delay time between shots. Smaller values allow for faster semi-automatic firing.",
  isAutomatic: "Whether the firearm fires continuously (automatic) when holding down the mouse click.",
  delayForReload: "The total duration (in seconds) from the start of the reload motion until reloading is complete.",
  ammotype: "The code name specifying the type and specification of the ammunition used.",
  name: "The unique identifier or global system noun recognized by the plugin configuration.",
  displayname: "The cosmetic weapon name with color codes displayed to players in tooltips or kill logs.",
  id: "The unique integer item ID or custom resource pack index compatible with your server.",
  variant: "A sub-code for model/texture variations, allowing you to change 3D modeling skins.",
  craftingRequirements: "The required materials (elements, metals, or Redstone ratios) to craft this weapon in a workbench.",
  weapontype: "The tactical weapon category classification (SMG, SR, AR, HG, SG, DMR).",
  weaponsounds: "Sound asset paths played during firing, reloading, or other mechanical operations.",
  enableIronSights: "Whether to enable the iron sight aiming system (aim down sights).",
};

export const DESCRIPTIONS = DESCRIPTIONS_KO;

// UI Dictionary i18n Translations
export const TRANSLATIONS = {
  ko: {
    // Top Bar
    title: "ARMOURY FIXER",
    subtitle: "MC 플러그인 전술 수집기",
    themeToggle: "테마 토글",
    langToggle: "ENGLISH",
    importPreset: "프리셋 로드",
    presetSelect: "프리셋 선택",
    undo: "실행 취소(Undo)",
    redo: "다시 실행(Redo)",
    exportFile: "내보내기",

    // Tabs
    editorTab: "⚙ 에디터 조종실 (CONFIG FORGE)",
    infoTab: "📜 설명서 & 고객 정비실 (ABOUT & SUPPORT)",

    // Left Panel
    fileManager: "FILE MANAGER",
    chooseFile: "파일 선택",
    dragAndDrop: "또는 정비 스테이션에 DND 해도 인식합니다",
    selectedFile: "선택된 파일",
    saveFile: "SAVE FILE",
    quickPresets: "QUICK PRESETS",

    // Editor Area
    searchPlaceholder: "설정 검색 (예: recoil, damage)...",
    showChangedOnly: "변경된 항목만 보기",
    expandAll: "일괄 펼치기",
    collapseAll: "일괄 접기",
    sensorArea: "YAML Drag-box Sensor Area",
    dragReminder: "컴퓨터 속의 yml 파일을 이 영역 안으로 올려놓으면 바로 파싱 편집 환경이 구축됩니다.",
    emptyState: "YAML Empty State",
    emptyDescription: "적용 중인 설정 구조체가 없거나 삭제되었습니다. 아래 버튼을 눌러 기본 마인크래프트 수정 시안용 예제 파일을 채우십시오.",
    loadDefault: "기본 예제 파일로 채우기",
    helperTitle: "⚙ 실시간 기어 도움판",
    helperHoverText: "에디터 내에 마우스를 올리거나 터치하면, 해당 설정이 인게임에서 담당하는 설명 및 추천 기본 스팀 사양이 이곳에 실시간 연동되어 출력됩니다.",
    helperExplanation: "설명",
    designGuide: "디자인 강조 가이드 :",
    designGuideDetail: "수정된 슬라이드 값 및 주황색 불빛 강조 처리됨",
    fontDetail: "일반 가독성을 위해 Pretendard 폰트가 핵심 설계로 반영되었습니다.",

    // About Tab
    aboutTitle: "무슨 사이트인가요? (Site Guide)",
    aboutText1: "이곳은 마인크래프트 서버 개발자 및 운영자분들이 복잡하고 까다로운 총기/장비 모드(예: Quality Armoury 플러그인 에셋)의 YAML 환경 설정을 직관적이고 다채로운 비주얼 기어 속에서 안전하게 수정하도록 고안된 커스텀 yaml 에디터입니다.",
    aboutText2: "인게임 밸런싱(데미지, 반동 오차, 연사 딜레이, 탄창 용량 등)을 변경할 때 문장 부호 하나라도 실수하면 플러그인이 완전히 깨지게 설계되어 있는 단스크립트 YAML 특성을 보완하여, 마우스 클릭과 고장 없는 인풋 조절판을 통해 100% 무결성 사양의 weapon.yml 사양을 조립할 수 있습니다.",
    feat1Title: "⚙️ 정밀 제어 터미널",
    feat1Desc: "입력된 모든 데이터 형식을 Boolean, Number, List 타입별로 판별하여 연산 오류를 사전에 철저히 차단합니다.",
    feat2Title: "🔥 스마트 기어 프리셋",
    feat2Desc: "SMG, Sniper(SR), Assault(AR) 등 대표적인 전술 카테고리 기어를 단 한 번의 토글 버튼식으로 즉시 로딩해 병합합니다.",
    guideTitle: "안전 장치 가이드 (How to operate)",
    guideStep1Title: "순정 설정 수동 드롭",
    guideStep1Desc: "보유 중인 마인크래프트 플러그인 폴더의 .yml 에셋 파일을 센서 박스 안으로 드래그 앤 드롭하거나 업로드하세요.",
    guideStep2Title: "인텔리센스 툴팁",
    guideStep2Desc: "키워드 입력폼 옆의 파란색 ⓘ 아이콘에 마우스를 호버하면 해당 인게임 물리량의 설명이 실시간 주황 도움판에 안전 연동됩니다.",
    guideStep3Title: "동적 변경 추적성",
    guideStep3Desc: "기본값 대비 수정된 필드는 테두리에 주황색 그라데이션 광배가 작동하여 어떤 데이터 세트를 임의로 조정했는지 한눈에 검토 가능합니다.",
    guideStep4Title: "되돌리기(Undo/Redo) 엔진",
    guideStep4Desc: "실수로 값을 잘못 수정했더라도 상단의 압축 밸브 기어 탭을 통해 작업 세션을 무한으로 뒤집을 수 있습니다!",

    // Legal Policy Group
    legalTitle: "법률 및 운영 정책 (Legal Policy)",
    legalToS: "서비스 이용약관 (Terms of Service)",
    legalPrivacy: "개인정보처리방침 (Privacy Policy)",

    // Support Form Box
    inquiryTitle: "기계 장치 상태 문의 및 제보 (1:1 Inquiry)",
    inquiryFormSender: "보내는 기어 마스터 (이름) :",
    inquiryFormEmail: "회신받을 연락 이메일 (Default) :",
    inquiryFormType: "전송 분류 (Filter) :",
    inquiryFormContent: "기록 내용 (Report Box) :",
    inquirySubmit: "📟 전송 프로세서 작동 (Submit)",
    inquirySuccessTitle: "문의 기어 발송 성공!",
    inquirySuccessDesc: "작성하신 정비 보고서 및 리포트 파일이 ericdm47@gmail.com 개발자 기어 함으로 성공적으로 주입되었습니다!",
    inquiryPlaceholderName: "이름 혹은 서버 아이디",
    inquiryPlaceholderContent: "이곳에 문의하고 싶으신 의견 또는 발생한 애로 사항을 자유롭게 타이핑해 주십시오...",

    inquiryHowToTitle: "문의 전송 방법 안내",
    inquiryHowToDesc: "이 편집기는 브라우저 안에서 단독 실행되는 정적 포지 에뮬레이터(Client-side SPA)입니다. 백엔드 전송 서버를 거치지 않고, 고객님의 인게임 이메일 앱을 이용해 개발자 메일함으로 보다 안전하게 즉시 발송됩니다!",
    inquiryEmailTemplate: "Email Template",
    inquiryActionCopy: "📋 내용 복사하기",
    inquiryActionCopied: "✓ 복사 완료!",
    inquiryActionWriteMail: "✉ 메일 쓰기 실행",
    inquiryGoBack: "← 뒤로 돌아가서 폼 다시 쓰기",
    inquiryAlertNameContent: "이름과 문의내용을 모두 성실하게 입력해 주십시오.",

    // Developer Contact detailed panel
    devChannel: "개발자 무전 채널 (Forge Masters)",
    devChannelDesc: "마인크래프트 개발을 사랑하는 Forge Master의 오피셜 연락선 링크입니다. 기능 개선 제안이나 오류 발생 피드백은 언제든지 대환영입니다.",
    devChannelStamp: "Designed with Antigravity Engine",

    // In-game properties descriptors
    propSMG: "SMG (경기관총)",
    propSR: "SR (저격소총)",
    propAR: "AR (돌격소총)",
    propHG: "HG (권총)",
    propSG: "SG (산탄총)",
    propDMR: "DMR (지정사수)",
    presetPlaceholder: "프리셋 선택",

    inquirySelectBug: "🐛 인게임 버그 제보 / 사양 분석 요청",
    inquirySelectFeat: "⚙️ 추가 기어 사양 / 프리셋 추가 제안",
    inquirySelectCollab: "💼 비즈니스 기술 제안 또는 커스텀 주문",
    inquirySelectOther: "☕ 기타 일반적인 인사이트 및 격려",
  },
  en: {
    // Top Bar
    title: "ARMOURY FIXER",
    subtitle: "Minecraft Plugin Tactical Configurator",
    themeToggle: "Toggle Theme",
    langToggle: "한국어",
    importPreset: "Load Preset",
    presetSelect: "Select Preset",
    undo: "Undo",
    redo: "Redo",
    exportFile: "Export",

    // Tabs
    editorTab: "⚙ CONFIG FORGE (Editor Area)",
    infoTab: "📜 ABOUT & SUPPORT (Guide)",

    // Left Panel
    fileManager: "FILE MANAGER",
    chooseFile: "Choose File",
    dragAndDrop: "Drag and drop the .yml file here to quickly load",
    selectedFile: "Selected File",
    saveFile: "SAVE FILE",
    quickPresets: "QUICK PRESETS",

    // Editor Area
    searchPlaceholder: "Search settings (e.g., recoil, damage)...",
    showChangedOnly: "Show Modified Key Only",
    expandAll: "Expand All",
    collapseAll: "Collapse All",
    sensorArea: "YAML Drag-box Sensor Area",
    dragReminder: "Upload or drag on-premise .yml files inside this layout container to execute parsers immediately.",
    emptyState: "YAML Empty State",
    emptyDescription: "Currently active configuration schema is empty. Press the dynamic button below to auto-inject the standard demo weapon blueprint.",
    loadDefault: "Fill with Default Blueprint",
    helperTitle: "⚙ Real-Time Guidance panel",
    helperHoverText: "Hover your cursor or click on any properties indicator inside the workspace to display technical configurations and game stats.",
    helperExplanation: "Info",
    designGuide: "Design Highlight Guidelines :",
    designGuideDetail: "Modified parameter rows reflect an active golden-orange neon energy glow.",
    fontDetail: "Optimized with high-contrast Pretendard & JetBrains typography for clean technical readability.",

    // About Tab
    aboutTitle: "What is this Application? (Site Guide)",
    aboutText1: "This on-premise tactical configuration forge is explicitly crafted for Minecraft Server Proprietors and Admins to quickly modulate weaponry configs (such as 'Quality Armoury' plugin templates) safely with high-fidelity steampunk-inspired dials, entirely bypassing YAML syntax crashes.",
    aboutText2: "Formatting errors can break full plugin services instantly. Using our mouse-interactive failsafe input controls, you can craft solid 100% syntactically perfect weapon.yml assets without writing raw code or dealing with strict indentation anomalies.",
    feat1Title: "⚙️ High-Fidelity Type Checker",
    feat1Desc: "Instantly validates Boolean, Numeric, or List types based on the schema model, preempting server crash errors.",
    feat2Title: "🔥 Tactical Quick Presets",
    feat2Desc: "Load popular templates such as SMG, Sniper, or AR directly into the working directory at the click of a button.",
    guideTitle: "Operation Guidelines (Failsafes)",
    guideStep1Title: "Manual Drag-&-Drop Upload",
    guideStep1Desc: "Directly drop any existing weapon .yml configuration asset directly inside the editor sensor frame to load the parser engine.",
    guideStep2Title: "Intel Tooltips",
    guideStep2Desc: "Clicking or hovering on the blue information indicators (ⓘ icons) outputs detailed in-game mechanic parameters in real-time.",
    guideStep3Title: "Active Glow Indicators",
    guideStep3Desc: "Settings that differ from original/default values are highlighted with vivid pulsing mechanical frames for quick verification.",
    guideStep4Title: "Infinite Work Backups",
    guideStep4Desc: "Mismade edits? Utilize the pressure-valve undo & redo system on the top dashboard bar to traverse your active edit history.",

    // Legal Policy Group
    legalTitle: "Polices & Guidelines (Legal Policy)",
    legalToS: "Terms of Service",
    legalPrivacy: "Privacy Policy",

    // Support Form Box
    inquiryTitle: "1:1 Support & Steam Inquiry",
    inquiryFormSender: "Sender's Server ID (Name) :",
    inquiryFormEmail: "Reply Destination Email :",
    inquiryFormType: "Inquiry Category (Filter) :",
    inquiryFormContent: "Report Body / Details (Report Box) :",
    inquirySubmit: "📟 ACTIVATE TRANSMITTER (Submit)",
    inquirySuccessTitle: "Engine Log Transmitted!",
    inquirySuccessDesc: "Your technical report sheet has been packaged and directed to the development console at ericdm47@gmail.com!",
    inquiryPlaceholderName: "Name or game moniker",
    inquiryPlaceholderContent: "Write down your troubleshooting questions or upgrade ideas inside this transmission terminal...",

    inquiryHowToTitle: "Support Interface Guidelines",
    inquiryHowToDesc: "This utility operates exclusively as a client-side SPA. To guarantee total data privacy, inquiries are composed using structured templates ready to send on your standard operating machine email client!",
    inquiryEmailTemplate: "Email Template",
    inquiryActionCopy: "📋 Copy Contents",
    inquiryActionCopied: "✓ Copied!",
    inquiryActionWriteMail: "✉ Open Mail Client",
    inquiryGoBack: "← Go Back and Edit",
    inquiryAlertNameContent: "Please write your name and content properly before transmitting.",

    // Developer Contact detailed panel
    devChannel: "Developer Radio Station (Forge Masters)",
    devChannelDesc: "Direct communications to the official Forge Master developer. We highly appreciate any feature requests or system bug logs.",
    devChannelStamp: "Designed with Antigravity Engine",

    // In-game properties descriptors
    propSMG: "SMG (Submachine Gun)",
    propSR: "SR (Sniper Rifle)",
    propAR: "AR (Assault Rifle)",
    propHG: "HG (Handgun)",
    propSG: "SG (Shotgun)",
    propDMR: "DMR (Designated Marksman)",
    presetPlaceholder: "Select Preset",

    inquirySelectBug: "🐛 Plugin Crash Logs / In-game Bugs",
    inquirySelectFeat: "⚙️ Feature Request / New Preset Proposals",
    inquirySelectCollab: "💼 Custom Commission / Business Inquiries",
    inquirySelectOther: "☕ General Feedback & Encouragement",
  }
};

