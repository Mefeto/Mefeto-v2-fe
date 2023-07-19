const OPENAPI_KEY = {
    encoded: null, //process.env.REACT_APP_OPENAPI_KEY_ENCODED,
    decoded: null,
    법제처: null
};
//TODO: Very Dangerous!! Should use .env

const URL_CONFIGs = {
    "법무부 생활법률지식 정보": {
        description: "생활에서 자주 접하는 생활법률(주택.상가임대차, 임금, 해고, 상속) 분야에 대해 질문/답변 형식으로 변호사가 제작한 문답지식 자료",
        baseURL: "http://apis.data.go.kr/1270000/lawedu/lawqna",
        requestParams: {
            ServiceKey: {
                value: OPENAPI_KEY.encoded,
                required: true,
                description: "OpenAPI Key (encoded)"
            },
            pageNo: {
                value: "1",
                required: true,
                description: "Page Number"
            },
            numOfRows: {
                value: "10",
                required: true,
                description: "How many results per page"
            }
        },
        responseElements: {
            mainCategory: {
                required: true,
                description: "Main Category"
            },
            middleCategory: {
                required: false,
                description: "middle Category",
            },
            smallCategory: {
                required: false,
                description: "Small Category",
            },
            articleNo: {
                required: true,
                description: "Ariticle Number",
            },
            question: {
                required: true,
                description: "Question",
            },
            answer: {
                required: true,
                description: "Answer",
            }
        },
        referenceLink: "https://www.data.go.kr/data/15028606/openapi.do"
    },
    "법령 목록 조회": {
        description: "query에 대한 법령 목록을 검색",
        baseURL: "http://www.law.go.kr/DRF/lawSearch.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c). https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "law",
                required: true,
                descrption: "서비스 대상"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태(HTML/XML)"
            },
            search: {
                value: null,
                required: false,
                description: "검색범위 (기본 : 1 법령명) 2 : 본문검색"
            },
            query: {
                value: null,
                required: false,
                description: "법령명에서 검색을 원하는 질의"
            },
            display: {
                value: null,
                required: false,
                description: "검색된 결과 개수 (default=20 max=100)"
            },
            page: {
                value: null,
                required: false,
                description: "검색 결과 페이지 (default=1)"
            },
            sort: {
                value: null,
                required: false,
                description: "정렬옵션(기본 : lasc 법령오름차순) / ldes: 법령내림차순 / dasc: 공포일자 오름차순 / ddes: 공포일자 내림차순 / nasc: 공포번호 오름차순 / ndes: 공포번호 내림차순 / efasc: 시행일자 오름차순 / efdes: 시행일자 내림차순"
            },
            data: {
                value: null,
                required: false,
                description: "법령의 공포일자 검색 (ex: 20010101)"
            },
            efYd: {
                value: null,
                required: false,
                description: "시행일자 범위 검색(20090101~20090130)"
            },
            ancYd: {
                value: null,
                required: false,
                description: "공포일자 범위 검색(20090101~20090130)"
            },
            ancNo: {
                value: null,
                required: false,
                description: "공포번호 범위 검색(306~400)"
            },
            rrClsCd: {
                value: null,
                required: false,
                description: "법령 제개정 종류 (300201 - 제정 / 300202 - 일부개정 / 300203 - 전부개정 / 300204 - 폐지 / 300205 - 폐지제정 / 300206 - 일괄개정 / 300207 - 일괄폐지 / 300209 - 타법개정 / 300210 - 타법폐지 / 300208 - 기타)"
            },
            nb: {
                value: null,
                required: false,
                description: "법령의 공포번호 검색"
            },
            org: {
                value: null,
                required: false,
                description: "소관부처별 검색(소관부처코드 제공)"
            },
            knd: {
                value: null,
                required: false,
                description: "법령종류(코드제공)"
            },
            lsChapNo: {
                value: null,
                required: false,
                description: "법령분류(01 - 제1편 / 02 - 제2편 / 03 - 제3편... 44 - 제44편)"
            },
            gana: {
                value: null,
                required: false,
                description: "사전식 검색 (ga,na,da…,etc)"
            },
            popYn: {
                value: null,
                required: false,
                description: "상세화면 팝업창 여부(팝업창으로 띄우고 싶을 때만 'popYn=Y')"
            }
        },
        responseElements: {
            target: {
                required: true,
                description: "검색서비스 대상"
            },
            키워드: {
                required: true,
                description: "검색어"
            },
            section: {
                required: true,
                description: "검색범위"
            },
            totalCnt: {
                required: true,
                description: "검색건수"
            },
            page: {
                required: true,
                description: "결과페이지번호"
            },
            "law id": {
                required: true,
                description: "결과 번호"
            },
            법령일련번호: {
                required: true,
                description: "법령일련번호"
            },
            현행연혁코드: {
                required: true,
                description: "현행연혁코드"
            },
            법령명한글: {
                required: true,
                description: "법령명한글"
            },
            법령약칭명: {
                required: true,
                description: "법령약칭명"
            },
            법령ID: {
                required: true,
                description: "법령ID"
            },
            공포일자: {
                required: true,
                description: "공포일자"
            },
            공포번호: {
                required: true,
                description: "공포번호"
            },
            제개정구분명: {
                required: true,
                description: "제개정구분명"
            },
            소관부처명: {
                required: true,
                description: "소관부처명"
            },
            소관부처코드: {
                required: true,
                description: "소관부처코드"
            },
            법령구분명: {
                required: true,
                description: "법령구분명"
            },
            시행일자: {
                required: true,
                description: "시행일자"
            },
            자법타법여부: {
                required: true,
                description: "자법타법여부"
            },
            법령상세링크: {
                required: true,
                description: "법령상세링크"
            }
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    },
    "법령 본문 조회": {
        description: "해당 법령 ID를 가지는 법령 본문을 조회",
        baseURL: "http://www.law.go.kr/DRF/lawService.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c) https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "law",
                required: true,
                description: "서비스 대상"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태 : HTML/XML"
            },
            ID: {
                value: null,
                required: false,
                description: "법령 ID (ID 또는 MST 중 하나는 반드시 입력)"
            },
            MST: {
                value: null,
                required: false,
                description: "법령 마스터 번호 - 법령테이블의 lsi_seq 값을 의미함"
            },
            LM: {
                value: null,
                required: false,
                description: "법령의 법령명(법령명 입력시 해당 법령 링크)"
            },
            LD: {
                value: null,
                required: false,
                description: "법령의 공포일자"
            },
            LN: {
                value: null,
                required: false,
                description: "법령의 공포번호"
            },
            JO: {
                value: null,
                required: false,
                description: "조번호\n생략(기본값) : 모든 조를 표시함\n6자리숫자 : 조번호(4자리)+조가지번호(2자리)\n(000200 : 2조, 001002 : 10조의 2)"
            },
            LANG: {
                value: null,
                required: false,
                description: "원문/한글 여부\n생략(기본값) : 한글\n(KO : 한글, ORI : 원문)"
            }
        },
        responseElements: {
            법령ID: {
                required: true,
                description: "법령ID"
            },
            공포일자: {
                required: true,
                description: "공포일자"
            },
            공포번호: {
                required: true,
                description: "공포번호"
            },
            언어: {
                required: true,
                description: "언어종류"
            },
            법종구분: {
                required: true,
                description: "법종류의 구분"
            },
            법종구분코드: {
                required: true,
                description: "법종구분코드"
            },
            법령명_한글: {
                required: true,
                description: "한글법령명"
            },
            법령명_한자: {
                required: true,
                description: "법령명_한자"
            },
            법령명약칭: {
                required: true,
                description: "법령명약칭"
            },
            제명변경여부: {
                required: true,
                description: "제명변경여부"
            },
            한글법령여부: {
                required: true,
                description: "한글법령여부"
            },
            편장절관: {
                required: true,
                description: "편장절관 일련번호"
            },
            소관부처코드: {
                required: true,
                description: "소관부처코드"
            },
            소관부처: {
                required: true,
                description: "소관부처명"
            },
            전화번호: {
                required: true,
                description: "전화번호"
            },
            시행일자: {
                required: true,
                description: "시행일자"
            },
            제개정구분: {
                required: true,
                description: "제개정구분"
            },
            별표편집여부: {
                required: true,
                description: "별표편집여부"
            },
            공포법령여부: {
                required: true,
                description: "공포법령여부"
            },
            소관부처명: {
                required: true,
                description: "소관부처명"
            },
            부서명: {
                required: true,
                description: "연락부서명"
            },
            부서연락처: {
                required: true,
                description: "연락부서 전화번호"
            },
            조문번호: {
                required: true,
                description: "조문번호"
            },
            조문여부: {
                required: true,
                description: "조문여부"
            },
            조문제목: {
                required: true,
                description: "조문제목"
            },
            조문시행일자: {
                required: true,
                description: "조문시행일자"
            },
            조문제개정유형: {
                required: true,
                description: "조문제개정유형"
            },
            조문이동이전: {
                required: true,
                description: "조문이동이전"
            },
            조문이동이후: {
                required: true,
                description: "조문이동이후"
            },
            조문변경여부: {
                required: true,
                description: "조문변경여부(Y값이 있으면 해당 조문내에 변경 내용 있음 )"
            },
            조문내용: {
                required: true,
                description: "조문내용"
            },
            항번호: {
                required: true,
                description: "항번호"
            },
            항제개정유형: {
                required: true,
                description: "항제개정유형"
            },
            항내용: {
                required: true,
                description: "항내용"
            },
            호번호: {
                required: true,
                description: "호번호"
            },
            호내용: {
                required: true,
                description: "호내용"
            },
            부칙공포일자: {
                required: true,
                description: "부칙공포일자"
            },
            부칙공포번호: {
                required: true,
                description: "부칙공포번호"
            },
            부칙내용: {
                required: true,
                description: "부칙내용"
            },
            별표번호: {
                required: true,
                description: "별표번호"
            },
            별표가지번호: {
                required: true,
                description: "별표가지번호"
            },
            별표구분: {
                required: true,
                description: "별표구분"
            },
            별표제목: {
                required: true,
                description: "별표제목"
            },
            별표시행일자: {
                required: true,
                description: "별표시행일자"
            },
            별표서식파일링크: {
                required: true,
                description: "별표서식파일링크"
            },
            별표HWP파일명: {
                required: true,
                description: "별표 HWP 파일명"
            },
            별표서식PDF파일링크: {
                required: true,
                description: "별표서식PDF파일링크"
            },
            별표PDF파일명: {
                required: true,
                description: "별표 PDF 파일명"
            },
            별표이미지파일명: {
                required: true,
                description: "별표 이미지 파일명"
            },
            별표내용: {
                required: true,
                description: "별표내용"
            },
            개정문내용: {
                required: true,
                description: "개정문내용"
            },
            제개정이유내용: {
                required: true,
                description: "제개정이유내용"
            }
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    },
    "법령정보지식베이스 관련법령 API": {
        description: "query에 대해 관련 법령의 정보를 검색",
        baseURL: "https://www.law.go.kr/DRF/lawSearch.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c) https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "lsRlt",
                required: true,
                description: "서비스 대상(관련법령 : lsRlt)"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태 : XML"
            },
            query: {
                value: null,
                required: false,
                description: "기준법령명에서 검색을 원하는 질의"
            },
            ID: {
                value: null,
                required: false,
                description: "법령 ID"
            },
            lsRltCd: {
                value: null,
                required: false,
                description: "법령 간 관계 코드"
            }
        },
        responseElements: {
            target: {
                required: true,
                description: "검색서비스 대상"
            },
            키워드: {
                required: true,
                description: "검색 단어"
            },
            검색결과개수: {
                required: true,
                description: "검색 건수"
            },
            기준법령ID: {
                required: true,
                description: "기준법령 ID"
            },
            기준법령명: {
                required: true,
                description: "기준법령명"
            },
            기준법령상세링크: {
                required: true,
                description: "기준법령 본문 조회링크"
            },
            관련법령id: {
                required: true,
                description: "관련법령 순번"
            },
            관련법령ID: {
                required: true,
                description: "관련법령 ID"
            },
            관련법령명: {
                required: true,
                description: "관련법령명"
            },
            법령간관계코드: {
                required: true,
                description: "법령간관계코드"
            },
            법령간관계: {
                required: true,
                description: "법령간관계"
            },
            관련법령상세링크: {
                required: true,
                description: "관련법령 본문 조회링크"
            },
            관련법령조회링크: {
                required: true,
                description: "해당 관련법령을 기준법령으로 한 관련법령 정보 조회링크"
            }
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    },
    "법령정보지식베이스 법령용어 조회 API": {
        description: "키워드에 대한 관련 법령 용어를 검색하고 다른 관련 용어와 법 조문간 관계 링크를 조회",
        baseURL: "https://www.law.go.kr/DRF/lawSearch.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c) https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "lstrmAI",
                required: true,
                description: "서비스 대상(법령용어 : lstrmAI)"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태 : XML"
            },
            query: {
                value: null,
                required: false,
                description: "법령용어명에서 검색을 원하는 질의"
            },
            display: {
                value: null,
                required: false,
                description: "검색된 결과 개수(default=20 max=100)"
            },
            page: {
                value: null,
                required: false,
                description: "검색 결과 페이지 (default=1)"
            },
            homonymYn: {
                value: null,
                required: false,
                description: "동음이의어 존재여부 (Y/N)"
            }
        },
        responseElements: {
            target: {
                required: true,
                description: "검색서비스 대상"
            },
            키워드: {
                required: true,
                description: "검색 단어"
            },
            검색결과개수: {
                required: true,
                description: "검색 건수"
            },
            section: {
                required: true,
                description: "검색범위"
            },
            page: {
                required: true,
                description: "현재 페이지번호"
            },
            numOfRows: {
                required: true,
                description: "페이지 당 출력 결과 수"
            },
            "법령용어 id": {
                required: true,
                description: "법령용어 순번"
            },
            법령용어명: {
                required: true,
                description: "법령용어명"
            },
            동음이의어존재여부: {
                required: true,
                description: "동음이의어 존재여부"
            },
            비고: {
                required: true,
                description: "동음이의어 내용"
            },
            용어간관계링크: {
                required: true,
                description: "법령용어-일상용어 연계 정보 상세링크"
            },
            조문간관계링크: {
                required: true,
                description: "법령용어-조문 연계 정보 상세링크"
            }
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    },
    "법령정보지식베이스 일상용어 조회 API": {
        description: "키워드에 대한 관련 일상 용어를 검색하고 용어간 관계 링크를 조회",
        baseURL: "https://www.law.go.kr/DRF/lawSearch.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c) https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "dlytrm",
                required: true,
                description: "서비스 대상(일상용어 : dlytrm)"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태 : XML"
            },
            query: {
                value: null,
                required: false,
                description: "일상용어명에서 검색을 원하는 질의"
            },
            display: {
                value: null,
                required: false,
                description: "검색된 결과 개수(default=20 max=100)"
            },
            page: {
                value: null,
                required: false,
                description: "검색 결과 페이지 (default=1)"
            }
        },
        responseElements: {
            target: {
                required: true,
                description: "검색서비스 대상",
            },
            키워드: {
                required: true,
                description: "검색 단어",
            },
            검색결과개수: {
                required: true,
                description: "검색 건수",
            },
            section: {
                required: true,
                description: "검색범위",
            },
            page: {
                required: true,
                description: "현재 페이지번호",
            },
            numOfRows: {
                required: true,
                description: "페이지 당 출력 결과 수",
            },
            "일상용어 id": {
                required: true,
                description: "일상용어 순번",
            },
            일상용어명: {
                required: true,
                description: "일상용어명",
            },
            출처: {
                required: true,
                description: "일상용어 출처",
            },
            용어간관계링크: {
                required: true,
                description: "일상용어-법령용어 연계 정보 상세링크",
            },
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    },
    "법령정보지식베이스 일상용어-법령용어 연계 API": {
        description: "query로 주어진 일상용어에 대한 관련된 법령 용어를 검색",
        baseURL: "https://law.go.kr/DRF/lawService.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c) https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "dlytrmRlt",
                required: true,
                description: "서비스 대상(일상용어-법령용어 연계 : dlytrmRlt)"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태 : XML"
            },
            query: {
                value: null,
                required: false,
                description: "일상용어명에서 검색을 원하는 질의(query 또는 MST 중 하나는 반드시 입력)"
            },
            MST: {
                value: null,
                required: false,
                description: "일상용어명 일련번호"
            },
            trmRltCd: {
                value: null,
                required: false,
                description: "용어관계(동의어 : 140301 / 반의어 : 140302 / 상위어 : 140303 / 하위어 : 140304 / 연관어 : 140305)"
            }
        },
        responseElements: {
            target: {
                required: true,
                description: "검색서비스 대상"
            },
            키워드: {
                required: true,
                description: "검색 단어"
            },
            검색결과개수: {
                required: true,
                description: "검색 건수"
            },
            일상용어명: {
                required: true,
                description: "일상용어명"
            },
            출처: {
                required: true,
                description: "일상용어 출처"
            },
            연계용어id: {
                required: true,
                description: "연계용어 순번"
            },
            법령용어명: {
                required: true,
                description: "법령용어명"
            },
            비고: {
                required: true,
                description: "동음이의어 내용"
            },
            용어관계코드: {
                required: true,
                description: "용어관계코드"
            },
            용어관계: {
                required: true,
                description: "용어관계명"
            },
            용어간관계링크: {
                required: true,
                description: "법령용어-일상용어 연계 정보 상세링크"
            },
            조문간관계링크: {
                required: true,
                description: "법령용어-조문 연계 정보 상세링크"
            }
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    },
    "법령정보지식베이스 법령용어-조문 연계 API": {
        description: "query로 주어진 법령용어에 대한 관련 법조문을 검색",
        baseURL: "https://law.go.kr/DRF/lawService.do",
        requestParams: {
            OC: {
                value: OPENAPI_KEY.법제처,
                required: true,
                description: "사용자 이메일의 ID(g4c@korea.kr일경우 OC값=g4c) https://open.law.go.kr/LSO/openApi/cuAskList.do 에 OPEN API 활용 신청이 되어 있어야 함."
            },
            target: {
                value: "lstrmRltJo",
                required: true,
                description: "서비스 대상(법령용어-조문 연계 : lstrmRltJo)"
            },
            type: {
                value: "XML",
                required: true,
                description: "출력 형태 : XML"
            },
            query: {
                value: null,
                required: false,
                description: "법령용어명에서 검색을 원하는 질의"
            },
            MST: {
                value: null,
                required: false,
                description: "법령용어명 일련번호"
            }
        },
        responseElements: {
            target: {
                required: true,
                description: "검색서비스 대상"
            },
            키워드: {
                required: true,
                description: "검색 단어"
            },
            검색결과개수: {
                required: true,
                description: "검색 건수"
            },
            "법령용어 id": {
                required: true,
                description: "법령용어 순번"
            },
            법령용어명: {
                required: true,
                description: "법령용어명"
            },
            비고: {
                required: true,
                description: "동음이의어 내용"
            },
            용어간관계링크: {
                required: true,
                description: "법령용어-일상용어 연계 정보 상세링크"
            },
            "연계법령 id": {
                required: true,
                description: "연계법령 순번"
            },
            법령명: {
                required: true,
                description: "법령명"
            },
            조번호: {
                required: true,
                description: "조번호"
            },
            조가지번호: {
                required: true,
                description: "조가지번호"
            },
            조문내용: {
                required: true,
                description: "조문내용"
            },
            용어구분코드: {
                required: true,
                description: "용어구분코드"
            },
            용어구분: {
                required: true,
                description: "용어구분명조문연계"
            },
            용어링크: {
                required: true,
                description: "조문-법령용어 연계 정보 상세링크"
            }
        },
        referenceLink: "https://open.law.go.kr/LSO/openApi/guideResult.do"
    }
};

export default URL_CONFIGs;