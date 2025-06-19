# ADMIN WEB TEMPLATE

> React + TypeScript + Vite + styled-components 기반의 웹 어드민 템플릿 입니다.

## 📌 브랜치 정보

- main : 상용에 환경 배포 코드
- dev : 개발 서버 배포 코드
  - `devs/[기능명]` : 기능 개발 브랜치 → `dev` → `main` 순으로 Merge 진행

## 📄 템플릿 사용 가이드

→ [TEMPLATE_GUIDE.md](./TEMPLATE_GUIDE.md)를 참고하세요.

## 📦 릴리즈 및 커밋 컨벤션 가이드

| 태그       | 설명                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `feat`     | 새로운 기능 추가 또는 주요 기능 개선                                 |
| `fix`      | 기능 오류 또는 버그 수정 작업                                        |
| `style`    | 코드 스타일 변경 (기능 변화 없음)                                    |
| `refactor` | 코드 리팩토링 (기능 변화 없이 구조 개선, 파일명/폴더 구조 변경 포함) |
| `chore`    | 빌드, 설정, 배포, 문서 등 기타 유지보수 작업                         |
| `hotfix`   | 긴급 버그 수정 (운영 이슈 대응)                                      |
| `docs`     | 문서 수정 (README, 주석 등)                                          |
| `perf`     | 성능 최적화                                                          |
| `test`     | 테스트 코드 추가 및 수정                                             |
| `merge`    | 배포 및 병합(Merge)을 위한 설정 변경                                 |
| `ci`       | CI 설정 및 스크립트 수정 (GitHub Actions 등)                         |
| `revert`   | 이전 커밋 되돌리기                                                   |
| `ui/ux`    | UI/UX 개선 (화면/디자인 및 사용자 흐름 개선)                         |
| `improve`  | 기존 기능/화면 개선 (사업/기획 요청 반영)                            |
| `seo`      | 메타태그, 디스크립션 등 SEO 최적화                                   |
| `release`  | 상용 배포 릴리즈 태그 (ex. `vYYYY-MM-DDD.HH.MM.SS`)                  |

## 🚀 릴리즈 및 태그 자동 생성 절차

GitHub Actions의 release-please를 사용하여 PR 머지 시 자동으로 CHANGELOG 작성 및 Git 태그 생성이 이루어집니다.

### 💡 작동 방식 요약

1. main 브랜치에 PR이 Merge 또는 Push 가 진행되면, GitHub Actions 워크플로우가 실행됩니다.
2. PR의 커밋 메시지(feat, fix, chore 등)를 기반으로 CHANGELOG.md가 업데이트됩니다.
3. 커밋 분석 결과에 따라 버전이 자동으로 결정됩니다 (vYYYY-MM-DDD.HH.MM.SS 형식).
4. 새로운 버전 태그(git tag vYYYY-MM-DDD.HH.MM.SS)가 자동으로 생성되며 GitHub Releases 페이지에 릴리즈가 게시됩니다.
