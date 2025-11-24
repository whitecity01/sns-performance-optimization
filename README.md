# sns-performance-optimization

리액트 SNS 피드 페이지 성능 최적화 도전기

## 📘 프로젝트 소개

네트워크 지연 및 서버 응답이 느린 현실적인 환경에서도 더 나은 UX를 제공하기 위해,
일부 API에 의도적으로 1~4초 딜레이를 추가하고,
비최적화/최적화 버전을 각각 구현하여 **성능 차이**를 비교한 프로젝트입니다.

## 🚀 적용한 최적화

- React Query 캐싱: 캐싱된 데이터를 즉시 렌더링 → 초기 로딩 UX 개선

- 무한스크롤 시점 조절: 스크롤 2~3개 남은 시점에서 미리 다음 페이지 요청

- Skeleton UI: 피드 로딩 동안 UI 공백 제거

- 이미지 프리로딩: 다음 이미지를 미리 로드하여 슬라이드 체감 속도 개선

👉 자세한 최적화 과정은 [블로그 글](https://shadowed-olive-ed0.notion.site/SNS-2b438ae8144f80ce810ed6449f093b4a?pvs=74)에서 확인 가능합니다.

## 실행 방법

```bash
>> npm install
>> npm run dev
```

## 프로젝트 구조

### FE

challenge-fe  
 ┣ public/  
 ┣ src/  
 ┃ ┣ assets/  
 ┃ ┣ components/  
 ┃ ┃ ┗ social/  
 ┃ ┃ ┣ non-optimized/ # 미최적화 버전 컴포넌트  
 ┃ ┃ ┗ optimized/ # 최적화 버전 컴포넌트  
 ┃ ┣ interfaces/  
 ┃ ┣ pages/  
 ┃ ┃ ┗ social/ # non-optimized / optimized 페이지  
 ┃ ┣ router/  
 ┃ ┣ services/  
 ┃ ┣ styles/  
 ┃ ┣ App.tsx  
 ┃ ┗ main.tsx  
 ┣ package.json  
 ┣ tsconfig.json  
 ┗ vite.config.ts

### BE

challenge-be  
 ┣ index.js  
 ┣ package-lock.json  
 ┗ package.json

## 🛠 Tech Stack

**FE:** React, TypeScript, Vite, SCSS, React-Query  
**BE:** Node.js (Express)
