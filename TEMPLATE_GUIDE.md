# 🚀 템플릿 사용 절차 가이드

> 이 템플릿은 React + TypeScript + Vite + styled-components 기반의 어드민 프로젝트를 빠르게 시작할 수 있도록 설계되었습니다.
> 아래 절차에 따라 템플릿을 복사하고 프로젝트명을 바꾸어 사용하세요.

## 1. GitHub 템플릿으로 로컬에 복제하기

### 1-1) 기존 커밋 히스토리를 사용하지 않고 싶다면?

1. 템플릿 저장소 접속
2. "Use this template" 버튼 클릭 → "Create a new repository" 버튼 클릭
3. 새 저장소명 입력 (ex. `[프로젝트명]-admin-web`)
4. 로컬에 저장소 클론

```
git clone https://github.com/[프로젝트명]-admin-web.git
cd [프로젝트명]-admin-web
npm install
```

### 1-2) 기존 커밋 히스토리까지 가져오고 싶다면?

```
# 템플릿 클론
git clone https://github.com/you/template-repo.git new-project
cd new-project

# 푸시 (기존 커밋 포함)
git push -u origin main
```

## 2. 프로젝트명 및 메타 정보 변경

> 아래 파일들의 프로젝트명과 메타 정보를 새 프로젝트에 맞게 변경합니다.

| 파일             | 설명                           | 예시                               |
| ---------------- | ------------------------------ | ---------------------------------- |
| `package.json`   | `"name"`, `"description"` 변경 | `"name": "[프로젝트명]-admin-web"` |
| `README.md`      | 프로젝트 설명 업데이트         | 상단 제목, 설명 문구               |
| `vite.config.ts` | 기본 타이틀 변경 (필요시)      | `title: '[프로젝트명]-admin-web'`  |
| `index.html`     | `<title>` 태그 수정            | `<title>[프로젝트명]</title>`      |

## 3. 개발 서버 실행

> http://localhost:5173에서 프로젝트 확인 가능합니다.

```
npm run dev
```

## 4. 프로젝트 구조 및 설정 변경 가이드

> `src/` 디렉토리 구조와 함께 각 프로젝트에 맞는 구조로 수정/확장하여 사용합니다.

→ [프로젝트 개발 규격 및 구조](https://inavisystems.atlassian.net/wiki/x/HADaMQ)를 참고하세요.
