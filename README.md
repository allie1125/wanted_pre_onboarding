# 원티드 프리온보딩 코스\_프론트엔드 지원과제

## [클릭하여 과제 보기](https://allie1125.github.io/wanted_pre_onboarding/)

### Toggle.js

- 토글버튼 상태값의 자료형을 boolean으로 설정하고,토글버튼을 클릭할 때 마다 상태값이 반대로 전환되도록하는 클릭리스너를 구현
- 상태값에 따른 CSS스타일링을 적용하여서 그에 따라 글자색상과 토글 배경상자 위치 변경

> 그동안 비교적 비중을 덜 두었던 애니메이션 구현에서 방법이 감이오지 않았다.  
> MDN 문서를 참고하였고, 속성을 서서히 변화시켜 시각적으로 애니메션효과를 얻을 수 있는 transition을 적용하였다.  
> 상태전환 시 CSS에서 left/right의 퍼센티지를 설정하여서 상자가 왼쪽/오른쪽으로 이동하도록 하였다.

### Tab.js

- tabMenu 변수에 각 메뉴객체들을 포함하는 배열을 선언

```javascript
const tabMenu = [
  { idx: 0, tabName: "potato", kor: "감자" },
  { idx: 1, tabName: "sweet_potato", kor: "고구마" },
  { idx: 2, tabName: "curry_rice", kor: "카레라이스" },
];
```

- 탭메뉴를 클릭할 때 마다 useState 값이 클릭한 객체로 업데이트 되도록 하는 클릭리스너를 구현
- 클래스네임을 제외한 나머지 코드가 똑같이 3번 반복사용 되어야 하기 때문에 불필요한 반복을 줄이기 위해 javascript 내장함수 map을 사용

```javascript
<div className="tabs">
  {tabMenu.map(({ idx, tabName, kor }) => (
    <div key={idx} className={`tab_text ${tabName === activeTab ? "bold" : ""}`} onClick={() => changeTabMenu(tabName)}>
      {kor}
    </div>
  ))}
</div>
```

- 클래스네임에 따라 글자굵기와, 탭 바가 1% / 33% / 66% 퍼센트 위치이동 하도록 CSS스타일링을 적용

### Slider.js

- percentButton 변수에 퍼센티지 값 배열 선언

```javascript
const percentButton = [1, 25, 50, 75, 100];
```

- 각 퍼센티지 버튼(1,25,50,75,100%) 클릭했을 때 percentValue가 해당값으로 업데이트 되도록 하는 이벤트리스너 구현
- 퍼센티지 숫자를 표현하는 인풋 value에 percentageValue값을 할당
- 퍼센트 바는 input type="range"를 사용하여 최소/최대/단위 값을 설정하고, value에 percentageValue를 할당
- 퍼센트 바 영역이 클릭되면, percentValue가 업데이트 되는 onChange 리스너를 구현

> Input type의 종류 중 range를 알지 못해서 구현방법의 갈피를 잡지못하여, 과제 중 가장 많은 시간을 할당하였다.  
> 처음에는 브라우저상에서 퍼센트 바 div 엘리먼트의 위치값, 클릭 좌표값을 얻어서 CSS표현을 통해 구현해 보고자 하였지만, 브라우저의 사이즈를 변경했을 때에 의도한 대로 동작하지 않았다.  
> 다른 방법으로 접근해보고자 키워드를 바꾸어 검색해 보았고, input type range를 사용하여 구현하였다.  
> 하지만, input태그로 구현하며 일정수준 이상의 커스텀은 한계가 있다는 것을 알게되어 이점이 조금 아쉬운 점으로 남아 과제제출 이후 다시한 번 구현해 보고자 한다.

### Input.js

- input에 입력값(value)이 들어오면 useState 값에 value를 추가하도록 하는 이벤트리스너 구현

1. E-mail

- 이메일 정규식을 사용하여 이메일 value가 형식에 맞으면 true / 맞지 않을 시 false를 반환
- 그에 따라 이메일형식 일치여부를 이모티콘 O / X 로 표현
- 인풋값이 없을 때에는 이모티콘이 모두 노출되지 않도록 예외처리

2. Password

- 패스워드 노출/비노출 상태값을 boolean으로 설정하고, 클릭시 상태값이 반대로 전환되도록 구현
- input 태그의 type속성(text/password)을 활용하여 boolean값에 따른 “보기” / “숨김” 텍스트 노출

### Dropdown.js

- dropdownMenus 변수에 메뉴 배열 선언

```javascript
const dropdownMenus = ["Toggle", "Tab", "Slider", "Input", "Dropdown", "Apple", "Banana", "Orange", "Cherry"];
```

- input에 검색문자(value)가 들어오면 useState 값에 value를 추가하도록 하는 이벤트리스너 구현
- value가 업데이트 될 때 마다, value(검색문자)를 포함하는 값이 있는 지 dropdownMenus 배열을 순회하며, 검색문자를 포함하는 메뉴배열을 리턴하도록 filter를 사용하여 구현

```javascript
//dropdown메뉴를 순회하면서 검색문자를 포함한 메뉴배열만 리턴(대소문자 구분없이 검색)
const result = dropdownMenus.filter((word) => word.toLowerCase().includes(value.toLowerCase()));
setSearchResultMenu(result);
```

- 대/소문자 구분없이 모두 검색되도록 toLowerCase 메서드를 사용하여 구현
- 드롭다운박스 클릭 상태값 자료형을 boolean으로 설정하고, 값에 따라 CSS display none/block 처리
- 드롭다운 옵션을 클릭하면, selectedOption 값이 해당 메뉴값으로 변경되어 선택된 값 노출

> 기존의 select, option태그를 사용해서 만들 수 있을 것이라고 예상하여 초기버전을 구현하였지만,막상 그 이후 CSS커스텀, 검색기능을 구현하려 알아보니 기존의 태그를 사용해서는 어렵다는것을 알게 되었고, 결론적으로 두번에 걸쳐 만드는 상황이 발생하였다.  
> 이처럼 구현 이전에 충분히 구현방안을 생각 해 두고 시작하는 것이 시간을 아끼는 지름길이 되겠다.
