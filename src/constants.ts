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

export const DESCRIPTIONS: Record<string, string> = {
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
