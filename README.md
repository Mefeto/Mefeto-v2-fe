# MEFETO AI Solutions
박주명 이 개발 중인 MEFETO에 필요한 AI 기능들 

## 변경사항!
Next JS 공부하고 Vercel에 대해 알아가다 보니 정말 좋은 것 같아요... mefeto-ai-solutions 폴더에 넣어 두었던 ReactJS 만으로 쓰인 아래의 모든 기능들을 NextJS 로 다시 바꾸어 쓰려고 합니다.  
그리고 Vercel AI에 제가 한 것과 거의 동일한 SDK를 이미 제공하고 있더라구요... Vercel AI를 이용해 더 간결하고 기능적이게 다시 구현하고 있습니다.  


## 사용 예시
### 관련법 검색
  https://github.com/Mefeto/Mefeto-v2-fe/assets/126857540/e6ec3a82-062a-4e35-8b35-f39c4e014301

키워드와 관련된 모든 대한민국 법조문들을 검색하는 서비스입니다. 국가법령정보 공동활용 서비스를 통해 제공되는 다양한 API들을 MEFETO AI Solutions에 포함된 API Chain을 이용해 연결하여 구현되었습니다. 

### 특수 데이터 기반 Chat GPT

  https://github.com/Mefeto/Mefeto-v2-fe/assets/126857540/97b29292-59b7-4c46-9702-80deb37025b7

관련법 검색 서비스와 GPT를 연결하여 대한민국 법에 기반하여 답변할 수 있는 Chat GPT입니다. GPT의 function calling을 이용하여 외부 API를 통해 얻은 데이터에 기반한 답변을 할 수 있도록 MEFETO AI Solutions에 포함된 useChatGPT를 이용하여 구현되었습니다. 

## Guide
### API Chain
Open API를 간편하게 사용할 수 있습니다. 
1. API Key 설정하기
  `./src/APIchain/URL_CONFIGs.js`에서  
   ```javascript
   const OPENAPI_KEY = { 
     encoded: "YOUR OPEN API KEY(encoding)", 
     decoded: "YOUR OPEN API KEY(encoding)", 
     법제처: "YOUR 법제처 EMAIL ID" 
   }
   ```
   에 Open API key와 법제처에 등록한 이메일의 앞부분(`exmaple@gmail.com => example 만`)을 넣어줍니다.  
   Open API Key는 [공공 데이터 포털](https://www.data.go.kr/) 에서 얻을 수 있으며,  
   국가법령정보 공동활용 서비스 ID는 [국가법령정보 공동활용 서비스](https://open.law.go.kr/LSO/main.do) 에 회원가입한 이메일의 앞부분입니다.  
   
   **CAUTION** API Key를 직접 js 파일에 입력하는 것은 보안상 위험합니다. `.env`파일을 이용해 환경 변수로 설정하는 것이 권장됩니다.
   ~~.env 어떻게 쓰는 건지 몰라서 아직 못했다...~~

2. API 호출해서 response 받기
   ```javascript
   import fetchFromAPI from 'fetchFromAPI.js위치';
   
   const response = await fetchFromAPI(
     "사용하려는 API 이름 (URL_CONFIGs에 있어야 합니다.)",
     {
       "요쳥변수이름": value,
       ...
     }
   )
   ```
   와 같이 사용하여 응답을 받을 수 있습니다.
   
   자동으로 URL_CONFIGs 에서 해당 API를 찾아 주어진 요청 변수를 이용해 요청 url을 생성하고 요청을 보내 응답을 받고 JS Object로(XML이어도 자동으로 변환합니다.) 로 반환합니다. 요청 변수는 Optional이며, 주어지지 않거나 일부만 주어지면 나머지는 URL_CONFIGs에 지정된 default 요청 변수들을 사용합니다.

3. 여러 API 연결하기
   여러 API를 직렬로 연결하여 사용하기 위해서는  
   `./src/APIchain/APIchain`에서  
   `APIchain` 함수를 정의하여 사용합니다.  
   예시로 작성되어 있는 내용은 `키워드 -> 관련 일상 용어`, `일상용어 -> 법령용어`, `법령 용어 -> 법 조문` API를 직렬로 연결하여 키워드와 관련되어 있는 법조문을 최대한 검색할 수 있도록 연결한 것입니다.  
  간편하게 API의 응답을 정제하고 다른 APU와 직-병렬 연결하는 기능을 개발하고 있습니다. 

4. API 추가하기  
   `./src/APIchain/URL_CONFIGs.js`(1에서 작업한 파일과 같은 파일) 에서
   ```javascript
   const URL_CONFIGs = {
     ...
   }
   ```
   에
   ```javascript
   "API이름" : {
     description: "API의 기능에 대한 설명", // Optional
     baseURL: "요청 주소",
     requestParams: {
       "요청변수명" : {
          value: "요청변수의 기본 설정 값(사용하지 않을 요청 변수이면 null)",
          required: boolean, //필수 요청 변수이면 true, otherwise false
          description: "요청 변수에 대한 설명" // Optional
       },
       ...
     },
     responseElements: { // Optional
       "response변수명" :{
         required: boolean, //response에 반드시 포함되면 true, otherwise false
         description: "response 변수에 대한 설명"
       },
       ...
     },
     referenceLink: "해당 API에 대한 정보 링크" // Optional
   }
   ```
   을 추가합니다.  
   `Optional`이라 되어 있는 부분들은 반드시 입력해야 하는 정보는 아니지만, function calling 에서 여기에 Configured 된 API를 자동으로 포함하는 기능 개발에 활용될 예정이므로 입력하는 것이 권장됩니다.

   일일이 입력하는 과정이 피곤할 수 있지만 적절한 prompt와 ChatGPT를 이용해서 빠르게 작성할 수 있고, 이미 정의되어 있는 API들은 이 방법을 이용해 작성되어 있습니다. 이에 사용할 수 있는 prompt를 보다 정제하고 여기에 추가하거나 API를 설명하는 웹페이지 주소만 넣으면 자동으로 configure하도록 자동화 해보겠습니다. 

### useChatGPT
Open AI 의 GPT API중 createChatCompletion 을 이용하여 ChatGPT와 같은 시스템을 간편하게 개발할 수 있는 Custom Hooks입니다. 
1. useChatGPT 사용하기
   ```javascript
   import useChatGPT from 'useChatGPT 위치";

   function ChatInterface(){
     const [chatLog, sendUserMessage] = useChatGPT(prompt);

     const onSubmit = (message) => {
       sendUserMessage(message);
     }
   }

   export default ChatInterface;
   ```
   와 같이 사용할 수 있습니다.
   `chatLog`는 `useState`를 이용하여 대화 기록을
   ```javascript
   [
     {role: "system", content: "prompt"},
     {role: "user", content: "How are you?"},
     {role: "assistant", content: "Hello, how can I help you?"},
     ...
   ]
   ```
   와 같은 배열로 담고 있습니다.
     
   `sendUserMessage`는 인자로 string 타입의 user message를 넣어 실행할 수 있는 함수로, 자동으로 `chatLog`에 user의 message를 추가하고 ChatCompletion요청을 보내 GPT의 응답을 `chatLog`에 업데이트합니다.
   
   또한 `useChatGPT`는 자동으로 function call을 감지하여 GPT가 function call을 요청하면 `./src/GPT/Funcions.js`에 정의되어 있는 function 들 중 해당하는 function을 찾아 실행하고 return 값을 GPT에 제공하여 응답을 받습니다. GPT가 `Functions`에 정의되지 않은 함수를 호출하면 GPT에게 자동으로 이를 알려 수정을 유도할 수 있습니다.

2. GPT가 호출할 수 있는 함수 추가하기
   GPT가 호출할 수 있는 함수들의 목록을 지정할 수 있습니다.
   `./src/GPT/Functions.js`에서 `functions`에 함수의 이름을 `key`로 하고, 함수를  `value`로 하는 Javascript Dictionary의 형태로 functions를 지정할 수 있습니다.
   ```javascript
   export const functions = {
     "functionName": someFunction(parameter) return something;,
     ...
   };
   ```

   그리고 나서 `functionsDescription`에 방금 추가한 함수에 대한 설명을 담은 object를 추가하여 GPT가 함수를 이해할 수 있도록 합니다.
   ```javascript
    export const functionsDescription = [
      {
          name: "get_related_laws",
          description: "keyword에 대한 대한민국 관련법을 찾는다.",
          parameters: {
              type: "object",
              properties: {
                  keyword: {
                      type: "string",
                      description: "관련법을 찾고자 하는 keyword (짧은 일상 용어)"
                  }
              },
              required: ["keyword"]
          }
      },
     ...
    ];
   ```
   와 같이 함수에 대한 설명을 포함하면 됩니다.
   function에 대한 Description을 어떻게 작성하는 것이 좋은 것인지는 [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/gpt/function-calling)를 참고하십시오. 
   **주의** `functions`에 함수를 포함하였더라도 `functionsDescription`에 설명을 포함하지 않으면 GPT는 알 수 없습니다.

   functions를 정의하면 자동으로 functionsDescription을 생성하고, URL_CONFIGs에 정의된 API들도 자동으로 functions과 functionsDescription에 추가하는 기능을 개발 중에 있습니다. 그 전까지는 직접 입력해 주십시오. 
   
## 개발 중인 기능들

### Youtube 자막 fetch
API_CONFIGs에 youtube 자막 fetching api를 추가하고 있습니다. 공식 youtube api가 아니라 인증 없이 간편하게 사용할 수 있는 community api를 사용하려고 합니다. 

[Update!] 개발 완료  
API Routes로 npm package youtube-caption-extractor를 이용해서 해당 youtube video의 videoID를 넣으면 제목, 더보기정보, 자막스크립트 를 추출할 수 있는 api입니다. Next JS를 공부하고 처음으로 만들어본 것입니다. Review하고 틀리거나 이상하게 쓴 부분 있으면 알려주세요.  

**요청하기**
```javascript
const videoID = "youtube 동영상 ID(https://www.youtube.com/watch?v=[여기 있는 거))"
const response = await fetch(`../api/youtubeInfo/?videoID=${videoID}`).then(res => res.json());
```
api 요청 주소 뒤에 `&lang="en"`을 붙여서 다른 언어 스크립트(자동 번역 스크립트 제외), `&join=false`를 붙여서 영상 시간대 별로 나뉘어진 자막을 받을 수 있습니다. 

**응답 형태**
```javascript
response = {
  title: "영상 제목",
  description: "더보기 란에 써있는 정보",
  caption: "영상 자막 스크립트(하나의 문자열로 합쳐서)"
}
```
`&join=false`을 붙였을 때는 
```
response = {
  title: "영상 제목",
  description: "더보기 란에 써있는 정보",
  subtitles: [
    {
      start: "해당자막 시작 지점(초),
      dur: "해당 자막 지속 시간(초),
      text: "자막 내용"
    }, 
    ...
  ]
}
```


### IRS(Information Retrieval System)
현재는 GPT에 Domain Specific Knowledge를 제공하기 위해서 function call을 통해 API로 검색한 내용 중 앞 부분을 임의로 선택해서 제공하고 있습니다. 이는 GPT의 Context Window에 제한이 있어서 검색 결과의 모든 법 조문을 전달할 수 없기 때문입니다. 따라서 가장 관련있고 GPT가 응답하기 위해 필요한 정보만을 모아서 GPT에게 제공하기 위한 방법이 필요합니다. 이를 IRS(Information Retrieval System)이라 합니다. Neural Search, Semantic Search 등 다양하게 불리는 듯 합니다. Transformer가 사용하는 Attention Mechanism에서 영감을 받아 고안하였습니다. ~~이미 IRS를 구현한 다른 시스템에서 기본적으로 사용하는 개념인 듯 합니다~~ 

![IRS Diagram](https://github.com/ParkJumyung/test/assets/126857540/bb0cf075-fe51-4ff6-86a3-e0a98498b07c)

IRS를 구현하기 위한 방법으로 다음을 생각하고 있습니다.  
1. Vector Database 구성
   법조문을 비롯한 발의 법률안 등 서비스에 필요한 모든 Domain Specific Knowledge를 수집하여 string으로 변환하고, 적당한 단위로 Chunking 합니다. 큰 단위에서 부터 문장 단위까지 다양한 크기 별로 Chunking하여야 효율적인 검색을 구현할 수 있습니다.
   Chunking한 텍스트 들에 index를 부여하고 모든 chunking한 string을 담은 array를 생성해서 `embed()`를 이용해 Vector Embedding합니다. 이는 텍스트를 GPT의 Embedding을 이용하여 Vector로 변환합니다. Embedding 된 Vector는 원래 텍스트에 대한 풍부한 정보를 함축적으로 포함하며, 비슷한 텍스트는 Vector Space 에서 비슷한 위치에 위치하게 됩니다. 모든 Vector는 길이가 1로 Normalized 되어 있습니다.  
   `id` `텍스트` `Embedding Vector` 의 구성으로 모든 Chunk를 Vector Database에 저장합니다.
   `Embedding Vector`가 Key, `텍스트`가 Value로 기능할 것입니다.
   모든 `Embedding Vector`를 모아 2d Matrix를 구성할 수 있습니다. 이를 `Key Matrix`라 하겠습니다.  이는 `id`의 순서를 따라야 합니다. 
   ~~ReactJS Frontend 만 공부해서 아직 Database 어떻게 사용하는 것인지는 모르지만 지금 공부중입니다아~~
   PineCone을 사용할 예정입니다.
   
   <img src = "https://github.com/ParkJumyung/test/assets/126857540/217b4432-8754-4d7b-a693-e62bdbfcf1f8" width="50%">
   
3. Query Vector 생성
   GPT가 function Calling을 통해 원하는 정보를 묻는 전달하면 해당 Query를 Embed 하여 `Query Vector`를 생성합니다. GPT가 한번에 여러 질문을 할 수 있으므로 `Query Vector`는 여러개 일 수 있으며, 이는 하나의 2d Matrix로 종합됩니다.  이를 `Query Matrix`라 하겠습니다.  

   ![2](https://github.com/ParkJumyung/test/assets/126857540/3164d0bb-a77b-408a-a680-5d9cad0fec60)
   
4. Query -> Hypothetical Key Transform Matrix Training
  이 단계는 Embedding 의 Quality에 따라 생략될 수도 있습니다. Query는 질문의 형태이고, Database는 사실의 형태이기 때문에 단순히 Query를 Embedding 했을 때 가까운 Vector를 Search하면 Query에 대한 대답을 찾는다기 보다는 Query와 유사한 의미의 텍스트들, 즉 비슷한 질문들을 조회할 수 있습니다. 이를 해결하기 위해 Embedding한 Query Vector를 그에 대한 대답이 있는 Vector의 영역으로 조정할 필요가 있습니다.
이는 Vector Space에서 Vector를 원하는 영역으로 이동시킬 수 있는 `Transformation Matrix`를 학습시켜 해결할 수 있습니다. 질문 형태의 Query와 연관된 Data의 Vector 쌍을 구성하여 학습 데이터로 하고, Embedding Vector Space의 차원을 가진 `Transformation Matrix`를 단순한 Neural Network를 이용하여 학습시킵니다.
학습된 `Transformation Matrix`를 `Query Matrix`와 행렬 곱 하여 얻은 `Query Matrix(Transformed)`를 검색에 사용합니다.
Tensorflow.js를 사용할 예정입니다.  

  ![3](https://github.com/ParkJumyung/test/assets/126857540/8b1386fc-8cba-468b-96c0-e24b249311f0)
   
4. Cosine Similarity Search
   `Query Matrix(Transformed)`에 있는 `Query Vector`들과 `Key Matrix`에 있는 `Embedding Vector`의 거리를 계산하여 주어진 `Query Vector`와 가까운 `Embedding Vector`를 추려냅니다. Embedding Vector Space에서 가까운 Vector는 유사한 의미의 텍스트임을 의미하므로 이를 통해서 관련있는 Data만 모을 수 있습니다.
   보통 거리로서 Cosine Similarity가 가장 많이 사용됩니다. 이는 두 Vector가 이루는 각의 cosine값을 의미하는데, 비슷한 의미는 비슷한 방향의 벡터이기 때문에 많이 사용됩니다. 또한 Open AI가 제공하는 Embedding Model은 모두 길이 1로 Normalized되어 있어 단순히 두 Vector의 Dot Product로 계산할 수 있고, 각각의 Dot Product는 행렬 곱으로 Batch Process 될 수 있기 때문에 매우 게산 효율적입니다.  
   따라서 `Key Matrix`와 `Query Matrix(Transformed)`의 전치를 행렬 곱하여 `Score Matrix`를 얻습니다. `Score Matrix`는 각 Key와 Query의 거리를 나타냅니다.
   Tensorflow.js를 사용할 예정입니다.  
   
   ![4](https://github.com/ParkJumyung/test/assets/126857540/3891197b-ad9c-4805-ae00-ddffd47acb89)
   
5. 관련있는 정보 선택 및 종합
   `Score Matrix`를 이용해서 각 Query에 대해 관련있는 Value만을 모아 종합하여 GPT에게 효율적이고 압축적인 데이터를 전달할 수 있습니다.
   `Score Matrix`에서 `Threshold`이상인 요소들은 1로, 나머지는 0으로 변환하여 `Retrieval Matrix`를 계산합니다. `Retrieval Matrix`는 각 Query에 대하여 각 Data를 사용할 것이면 1, 아니면 0을 포함합니다. `Retrieval Matrix`의 각 열을 `Logical OR`하여 얻을 수 있는 `Retrieval Vector`는 각 Data를 조회해야 할 지 말아야 할 지 1과 0으로 압축적으로 표현합니다. `Retrieval Vector`와 Database의 `Value Matrix`를 Dot Product(+는 String Concatenation이라 하면) 필요한 Data만 모은 `Result` String을 얻을 수 있습니다. GPT에게 보내기 전 Context Window를 넘지 않는 지 확인하고 GPT에게 보내면 검색이 완료됩니다.
   Tensorflow.js를 사용할 예정입니다.  

   ![5](https://github.com/ParkJumyung/test/assets/126857540/fae60053-def9-4ef8-b48c-5049a90adc93)

6. 개발자용 확인 툴
   모든 Vector들은 1536차원 Vector Space의 HyperSphere의 표면에 있는 Vector이므로 실제로 Embedding 한 Vector들이 어떻게 분포하고 있으며, Transformation이 어떠한 영향을 미쳤는지 개발자가 확인하고 이해하기 매우 어렵습니다. Embedding Vector Space에 대한 개발자의 이해를 돕고 Trouble Shotting을 돕기 위해 Dimensionality Reduction이 필요합니다.
   Dimensionality Reduction은 고차원 데이터 분포 특성을 보존하면서 낮은 차원 축소하는 기술입니다. 가장 많이 사용되고 효과적인 Dimensionality Reduction Technique는 t-SNE로 이를 사용할 것입니다. `t-SNE`는 Tensorflow.js에서 제공됩니다. 

### Further Developments
1. `.env`사용해서 API Key 관리하기 ~~보안을 위해 빨리 구현해야...~~
   
2. DALL-E  
   OpenAPI에서 제공하는 Image Generation AI입니다. MEFETO의 글과 관련된 Image를 자동 생성하여 모든 Article에 사용하고, Diagram을 생성하거나, 글 작성자가 손 쉽게 관련 Image를 삽입할 수 있는 Interface를 구현하는 데에 매우 도움이 될 것이라 생각합니다.
   
3. `API_CONFIGs` 자동 작성 prompt
   
4. `API_CONFIGs Description` 기반 `functionsDescription` 자동 생성
   
5. 법전 등 Database 미리 구축  
   지금은 그때 그때 API를 이용하여 관련 법조문을 가져오지만 IRS를 사용한다면 미리 법전 전체를 다운로드하여 Database를 구축하는 것이 합리적입니다. 지금 사용하는 API가 관련 법을 검색하는 방식은 단순히 단어를 Matching하는 Lazy Search이기 때문에 IRS를 사용한다면 매번 API를 호출하는 것이 무의미합니다. 따라서 독립적인 Database를 구축할 것입니다. ~~아직 BackEnd 지식이 전무해서 API 호출에만 의존하고 있어요...~~
  
6. GPT on-the-fly Function call 기능    
   GPT에 Plugins에 Code Interpreter라고 GPT가 Python코드를 필요하면 직접 작성해서 Python Sandbox에서 실행해서 사용하는 기능이 있습니다. 그야말로 GPT에게 Computer를 주는 것인데, Plugins Waitlist가 줄어들 기미가 보이지 않습니다. 하지만 Function call 기능을 이용해서 이를 구현할 수 있습니다.
   `functions`에 text로 된 Python code를 인자로 하는 `executePythonCode()` function을 만들고 GPT가 스스로 생성한 Python 코드를 실행할 수 있게 할 수 있습니다. 이를 구현하기 위해서는 Python을 실행하기 위한 Backend가 필요하고, 오류가 발생했을 때 오류 메세지를 다시 GPT에게 전송하여 스스로 수정을 시도할 수 있게 해야 합니다. 어려운 것은 사실이지만 불가능하지는 않으며, GPT에게 엄청난 Power를 쥐어줄 수 있을 것입니다.

7. Deep Seach 구현  
   위에서 구상한 IRS는 주어진 Query와 관련있는 Data를 찾아낼 수 있지만 이는 Shallow할 수 있습니다.  
   예를 들어 `A가 증가하면 C가 감소한다`와 연관된 데이터를 검색할 때
   `A가 증가하면 B가 감소한다`, `B가 감소하면 C가 감소한다`의 데이터를 엮어 관련있는 데이터로 판별하기는 어렵다는 것입니다. 즉, Data 내부의 연관성을 고려하여 종합적인 관련성 판별을 하기는 어려운 Architecture인 것입니다. 이를 해결하기 위해서는 여러 사이즈의 Chuncking을 통해 Layer Search하거나, Data내부의 Self-Attention을 고려하여 검색해야 할 것입니다. 특히 법 조문을 Chunking해서 Vector Database로 사용할 때, 법 조문 끼리 상호 참조하고, 다른 Chunk에서 다른 Chunk의 용어를 정의하고, 법 조문간 관계가 있으므로 부적절한 Search 방법일 수 있습니다. 위의 IRS의 성능이 좋지 않다면 이것이 가장 큰 이유일 것입니다.
   Data 관점에서 말하면 여러 독립적인 사실들을 목록 식으로 나열한 Data는 각 사실별로 Chunking하는 것이 합리적이지만, 근본적으로 Graph Network의 형태를 가진 Data를 선형적으로 Chunking하는 것은 비 합리적이고 Chunking 과정이 Data간 연결 관계를 소실시킨다는 것입니다. 이를 해결할 수 있는 구체적인 아키텍처의 구현 방법이 아직 명확하지 않아 잘 모르겠지만, 일단 위의 IRS의 성능을 확인하고, 더 생각해 보려 합니다. 
