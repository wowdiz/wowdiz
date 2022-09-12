# 크라우드 펀딩 플랫픔 - 와우디즈

## 프로젝트 소개

<br>

## 프로젝트 일정 및 규모
### 프로젝트 일정
* 총 개발 기간 : 33일 (22.06.27 ~ 22.07.29)
* 인원 : 5명

## 📄 ERD
이번 프로젝트에서 가장 심혈을 기울인 ERD입니다.<br>
데이터모델링 수업 외에, 별도 스터디를 진행함으로써 더 견고한 ERD를 설계하기위해 노력했습니다.<br>
<br>

핵심 모듈 | 갯수
---|---|
유저&파트너|13
여행상품|6
커뮤니티 게시판|6
관리자 통합게시판|5
결제&예약|4
유저권한|5
코드테이블|7
분석용테이블|4
기타|9
**합계**|**59**


<br>

## 주요기능
* 카카오 로그인
* 마이페이지
* 커뮤니티게시판
* 파트너 입점 신청
* 파트너 상품 등록
* KG이니시스 & 카카오페이 결제
* 관리자 통합게시판
* 파트너 관리
* 상품 관리
<br>

## ⚙️ 개발환경
#### Frontend
<img src="https://camo.githubusercontent.com/5a7100155d1a7b75357a90e8810530b21c8723c59f2976d0dafc7950205336d7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/d1a61dccdba51c4d1ff3306fe00404de9162915d282bade8ef91b992f84ebd35/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6373732d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white" style="max-width: 100%;"> <img src="https://img.shields.io/badge/JAVASCRIPT | ES6-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black"> <img src="https://img.shields.io/badge/REACT | 18.2-61DAFB?style=for-the-badge&amp;logo=react&amp;logoColor=black">
<br>
<img src="https://img.shields.io/badge/React_Router | 6.3-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white"> <img src="https://img.shields.io/badge/React Hook Form | 7.33-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=black"> <img src="https://img.shields.io/badge/AXIOS | 0.27-6236FF?style=for-the-badge&amp;logo=axios&amp;logoColor=white">
<br>
<img src="https://img.shields.io/badge/MUI | 5.8-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
<img src="https://img.shields.io/badge/CKEditor5 | 5.0-6236FF?style=for-the-badge&amp;logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNDMuNzEgMTEuMDI1YTExLjUwOCAxMS41MDggMCAwIDAtMS4yMTMgNS4xNTljMCA2LjQyIDUuMjQ0IDExLjYyNSAxMS43MTMgMTEuNjI1LjA4MyAwIC4xNjcgMCAuMjUtLjAwMnYxNi4yODJhNS40NjQgNS40NjQgMCAwIDEtMi43NTYgNC43MzlMMzAuOTg2IDYwLjdhNS41NDggNS41NDggMCAwIDEtNS41MTIgMEw0Ljc1NiA0OC44MjhBNS40NjQgNS40NjQgMCAwIDEgMiA0NC4wODlWMjAuMzQ0YzAtMS45NTUgMS4wNS0zLjc2IDIuNzU2LTQuNzM4TDI1LjQ3NCAzLjczM2E1LjU0OCA1LjU0OCAwIDAgMSA1LjUxMiAwbDEyLjcyNCA3LjI5MnoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNNDUuNjg0IDguNzlhMTIuNjA0IDEyLjYwNCAwIDAgMC0xLjMyOSA1LjY1YzAgNy4wMzIgNS43NDQgMTIuNzMzIDEyLjgyOSAxMi43MzMuMDkxIDAgLjE4My0uMDAxLjI3NC0uMDAzdjE3LjgzNGE1Ljk4NyA1Ljk4NyAwIDAgMS0zLjAxOSA1LjE5TDMxLjc0NyA2My4xOTZhNi4wNzYgNi4wNzYgMCAwIDEtNi4wMzcgMEwzLjAyIDUwLjE5M0E1Ljk4NCA1Ljk4NCAwIDAgMSAwIDQ1LjAwM1YxOC45OTdjMC0yLjE0IDEuMTUtNC4xMTkgMy4wMTktNS4xOUwyNS43MS44MDRhNi4wNzYgNi4wNzYgMCAwIDEgNi4wMzcgMEw0NS42ODQgOC43OXptLTI5LjQ0IDExLjg5Yy0uODM0IDAtMS41MS42NzEtMS41MSAxLjQ5OHYuNzE1YzAgLjgyOC42NzYgMS40OTggMS41MSAxLjQ5OGgyNS40ODljLjgzMyAwIDEuNTEtLjY3IDEuNTEtMS40OTh2LS43MTVjMC0uODI3LS42NzctMS40OTgtMS41MS0xLjQ5OGgtMjUuNDkuMDAxem0wIDkuMjI3Yy0uODM0IDAtMS41MS42NzEtMS41MSAxLjQ5OHYuNzE1YzAgLjgyOC42NzYgMS40OTggMS41MSAxLjQ5OGgxOC40NzljLjgzMyAwIDEuNTA5LS42NyAxLjUwOS0xLjQ5OHYtLjcxNWMwLS44MjctLjY3Ni0xLjQ5OC0xLjUxLTEuNDk4SDE2LjI0NHptMCA5LjIyN2MtLjgzNCAwLTEuNTEuNjcxLTEuNTEgMS40OTh2LjcxNWMwIC44MjguNjc2IDEuNDk4IDEuNTEgMS40OThoMjUuNDg5Yy44MzMgMCAxLjUxLS42NyAxLjUxLTEuNDk4di0uNzE1YzAtLjgyNy0uNjc3LTEuNDk4LTEuNTEtMS40OThoLTI1LjQ5LjAwMXptNDEuMTkxLTE0LjQ1OWMtNS44MzUgMC0xMC41NjUtNC42OTUtMTAuNTY1LTEwLjQ4NiAwLTUuNzkyIDQuNzMtMTAuNDg3IDEwLjU2NS0xMC40ODdDNjMuMjcgMy43MDMgNjggOC4zOTggNjggMTQuMTljMCA1Ljc5MS00LjczIDEwLjQ4Ni0xMC41NjUgMTAuNDg2di0uMDAxeiIgZmlsbD0iIzFFQkM2MSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTYwLjg1NyAxNS45OTVjMC0uNDY3LS4wODQtLjg3NS0uMjUxLTEuMjI1YTIuNTQ3IDIuNTQ3IDAgMCAwLS42ODYtLjg4IDIuODg4IDIuODg4IDAgMCAwLTEuMDI2LS41MzEgNC40MTggNC40MTggMCAwIDAtMS4yNTktLjE3NWMtLjEzNCAwLS4yODMuMDA2LS40NDcuMDE4LS4xNS4wMS0uMy4wMzQtLjQ0Ni4wN2wuMDc1LTEuNGgzLjU4N3YtMS44aC01LjQ2MmwtLjIxNCA1LjA2Yy4zMTktLjExNi42ODItLjIxIDEuMDg5LS4yOC40MDYtLjA3MS43Ny0uMTA3IDEuMDg4LS4xMDcuMjE4IDAgLjQzNy4wMjEuNjU1LjA2My4yMTguMDQxLjQxMy4xMTQuNTg1LjIxOHMuMzEzLjI0NC40MjIuNDE5Yy4xMDkuMTc1LjE2My4zOTEuMTYzLjY1IDAgLjQyNC0uMTMyLjc0NS0uMzk2Ljk2MWExLjQzNCAxLjQzNCAwIDAgMS0uOTM4LjMyNWMtLjM1MiAwLS42NTYtLjEtLjkxMi0uMy0uMjU2LS4yLS40My0uNDUzLS41MjMtLjc2MmwtMS45MjUuNTg4Yy4xLjM1LjI1OC42NjQuNDcyLjk0My4yMTQuMjc5LjQ3LjUxNC43NjcuNzA2LjI5OC4xOTEuNjMuMzM5Ljk5NS40NDMuMzY1LjEwNC43NDkuMTU2IDEuMTUxLjE1Ni40MzcgMCAuODYtLjA2NCAxLjI3Mi0uMTkzLjQxLS4xMy43NzgtLjMyMyAxLjEtLjU4MWEyLjggMi44IDAgMCAwIC43NzUtLjk4MWMuMTkzLS4zOTYuMjktLjg2NC4yOS0xLjQwNWgtLjAwMXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=&logoColor=white" alt="CKEditor5" class="img_ev3q"> <img src="https://img.shields.io/badge/SWIPER | 8.2-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"> <img src="https://img.shields.io/badge/NIVO-6AFDEF?style=for-the-badge&amp;&logoColor=white" alt="NIVO" class="img_ev3q">

### Backend
<img src="https://img.shields.io/badge/JAVA | 11-0d8ac7?style=for-the-badge&logo=OpenJDK&logoColor=white"> <img src="https://img.shields.io/badge/SPRINGBOOT | 2.7-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/MySQL | 8.0-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/MYBATIS | 3.5-000000?style=for-the-badge&logo=&logoColor=white">
<br><img src="https://img.shields.io/badge/Spring Security | 5.7-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/JWT | 0.11-6236FF?style=for-the-badge&amp;logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEwMXB4IiBoZWlnaHQ9IjEwMXB4IiB2aWV3Qm94PSIwIDAgMTAxIDEwMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMy4yICgxMjA0MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iand0X2xvZ28iIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTAuMDAwMDAwLCAtNTM4LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA0MTMuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAuMDAwMDAwLCAxMjUuMDAwMDAwKSIgaWQ9IlNoYXBlIj4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTU3LjgsMjcuMiBMNTcuNywwLjMgTDQyLjcsMC4zIEw0Mi44LDI3LjIgTDUwLjMsMzcuNSBMNTcuOCwyNy4yIFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQyLjgsNzMuMyBMNDIuOCwxMDAuMyBMNTcuOCwxMDAuMyBMNTcuOCw3My4zIEw1MC4zLDYzIEw0Mi44LDczLjMgWiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTcuOCw3My4zIEw3My42LDk1LjEgTDg1LjcsODYuMyBMNjkuOSw2NC41IEw1Ny44LDYwLjYgTDU3LjgsNzMuMyBaIiBmaWxsPSIjMDBGMkU2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Mi44LDI3LjIgTDI2LjksNS40IEwxNC44LDE0LjIgTDMwLjYsMzYgTDQyLjgsMzkuOSBMNDIuOCwyNy4yIFoiIGZpbGw9IiMwMEYyRTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLjYsMzYgTDUsMjcuNyBMMC40LDQxLjkgTDI2LDUwLjMgTDM4LjEsNDYuMyBMMzAuNiwzNiBaIiBmaWxsPSIjMDBCOUYxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02Mi40LDU0LjIgTDY5LjksNjQuNSBMOTUuNSw3Mi44IEwxMDAuMSw1OC42IEw3NC41LDUwLjMgTDYyLjQsNTQuMiBaIiBmaWxsPSIjMDBCOUYxIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03NC41LDUwLjMgTDEwMC4xLDQxLjkgTDk1LjUsMjcuNyBMNjkuOSwzNiBMNjIuNCw0Ni4zIEw3NC41LDUwLjMgWiIgZmlsbD0iI0Q2M0FGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYsNTAuMyBMMC40LDU4LjYgTDUsNzIuOCBMMzAuNiw2NC41IEwzOC4xLDU0LjIgTDI2LDUwLjMgWiIgZmlsbD0iI0Q2M0FGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuNiw2NC41IEwxNC44LDg2LjMgTDI2LjksOTUuMSBMNDIuOCw3My4zIEw0Mi44LDYwLjYgTDMwLjYsNjQuNSBaIiBmaWxsPSIjRkIwMTVCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02OS45LDM2IEw4NS43LDE0LjIgTDczLjYsNS40IEw1Ny44LDI3LjIgTDU3LjgsMzkuOSBMNjkuOSwzNiBaIiBmaWxsPSIjRkIwMTVCIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=&logoColor=white" alt="JWT" class="img_ev3q"> <img src="https://img.shields.io/badge/Jackson | 2.13-0d8ac7?style=for-the-badge&logo=&logoColor=white">
<img src="https://img.shields.io/badge/Spring Boot Mail | 1.43-0d8ac7?style=for-the-badge&logo=&logoColor=white">
#### Amazon
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white">
#### Tool
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/ERD Cloud-0052CC?style=for-the-badge&logo=ERDCloud&logoColor=white">
<img src="https://img.shields.io/badge/Notion-F7DF1E?style=for-the-badge&logo=Notion&logoColor=black">

<img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"> <img src="https://img.shields.io/badge/Sourcetree-0052CC?style=for-the-badge&logo=Sourcetree&logoColor=white"> <img src="https://img.shields.io/badge/MySQL Workbench | 8.0-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">


## 📈 프로젝트 분석
언어|파일|공백|커맨드|코드|퍼센트
---|---|---|---|---|---|
Java|161|3,002|596|10,966|42.86%
JSP|68|1,003|703|6,555|25.62%
CSS|60|533|367|3,729|14.57%
Javascript|19|368|258|2,044|7.99%
Query|26|193|58|1,729|6.75%
기타|10|65|53|565|2.21%
합계|344|5,164|2,035|25,588|100%

*API를 제외한, 순수 작성한 코드만 포함하였습니다.
<br>

## 👨‍💻팀원
[권능](https://github.com/darren-gwon) | darren.gwon@gmail.com<br>
<br>
