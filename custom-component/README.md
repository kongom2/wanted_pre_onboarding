1. 재사용성을 위해 CSS는 CSS in JS 기술 중 styled-components를 사용하였습니다.
2. 공통적으로 사용하는 Text를 컴포넌트화 하여 모든 과제에 활용했습니다.
3. 배열과 기본값 들은 constants 파일에 담에 꺼내 사용했습니다.

# 토글

### 구현한 방법과 이유에 대한 간략한 내용

- Text는 앞으로 계속 쓰이기에 컴포넌트를 분리하여 common 폴더에 넣었습니다.
- useState를 사용하여 true, false를 조정하여 on, off를 구현 했습니다.
- 체크박스에 CSS를 변경하여 스위치 디자인을 했습니다.

### 구현하면서 어려웠던 점과 해결 방법

- styled-components를 주로 사용하는데 2가지 부분을 한개의 CSS 코드로 변화를 주는데 어려움이 있었습니다. className을 통해 이를 해결했는데, 좋은 방법이 있는지 더 찾아봐야 할 것 같습니다.

 

### 자세한 실행 방법

- 버튼을 누르면 체크박스가 체크가 되면서 변한 상태값이 useState에 담기게 됩니다.

# 모달

### 구현한 방법과 이유에 대한 간략한 내용

- 모달창은 별도의 컴포넌트로 제작하여 common 폴더에 넣었습니다.
- useState를 사용하여 true, false를 조정하여 open, close를 구현 했습니다.

### 구현하면서 어려웠던 점과 해결 방법

- X 버튼을 CSS에 유니코드로 넣어 만들고자 했는데, 안되어서 이모지를 활용했습니다.

### 자세한 실행 방법

- open modal버튼을 누르면 모달상태값이 true로 바뀌며 모달창이 생성됩니다.
X버튼을 누르면 모달상태값이 false로 바뀌며 모달창이 사라집니다.

# 탭

### 구현한 방법과 이유에 대한 간략한 내용

- constants 파일에 tabArr을 만들어서 보관했습니다.
- tabArr를 불러와 map 함수를 이용하여 item으로 화면에 그렸습니다.
- setTapColor, setTapContent는 index를 기준으로 다르게 표현되도록 구현했습니다.
- 삼항연산자를 이용하여 해당 컨텐츠가 아닐 때 노출 되지 않도록 했습니다.

### 구현하면서 어려웠던 점과 해결 방법

- CSS가 번거롭긴 했지만 어려웠던 점은 없습니다.

### 자세한 실행 방법

- 탭 클릭시 index를 통해 해당 번호에 맞는 CSS와 컨텐츠가 노출됩니다.

# 태그

### 구현한 방법과 이유에 대한 간략한 내용

- constants 파일에 tabArr을 만들어서 보관했습니다.
- 태그는 Array 형태로 상태값을 관리 합니다.
- focus는 true, false로  상태값을 관리 합니다.
- enter입력시 입력한 값이 tagArr에 추가 되도록 했습니다.
- filter 기능으로 해당 텍스트가 없는 새로운 배열을 만들어 노출하는 방식으로 태그 지우기 버튼을 만들었습니다.

### 구현하면서 어려웠던 점과 해결 방법

- input안에 다른 태그를 넣을수있나 찾아보았지만, 넣지 못하는게 맞다고 생각하여
div에 아웃라인 효과를 주었습니다.

### 자세한 실행 방법

- input에 텍스트를 쓰고 enter를 누르면 tagArr에 추가됩니다.
- 추가된 배열은 map으로 input 창에 보여집니다.
- 닫기 버튼을 누르면, filter 기능으로 해당 텍스트가 없는 새로운 배열을 만들어 노출하는 방식으로 태그가 지워집니다.

# 자동완성

### 구현한 방법과 이유에 대한 간략한 내용

- constants 파일에 wordList을 만들어서 보관했습니다.
- html5에서 추가된 datalist를 사용했습니다.

### 구현하면서 어려웠던 점과 해결 방법

- datalist의 배경을 변경 해보려 방법을 찾고 적용해보았는데 안되었습니다.

### 자세한 실행 방법

- 저장되어 있는 단어들이 datalist의 option을 통해 텍스트를 적을 때 마다 나타납니다.

# 클릭 수정

### 구현한 방법과 이유에 대한 간략한 내용

- constants 파일에 defaultInfo를 만들어서 보관했습니다.
- input을 name 과 age 두가지로 상태를 관리 했습니다.
- 각각 defaultInfo.name과 defaultInfo.age로 기본 입력상태를 만들었습니다.

### 구현하면서 어려웠던 점과 해결 방법

- 포커스에서 벗어날 때 상태를 어떤 방식으로 처리해야 할지 고민이었습니다.
- onBlur를 통해 벗어날 때 상태값을 바꿀 수 있도록 처리 했습니다.

### 자세한 실행 방법

- input창을 누르면 입력이 가능한 상태가 됩니다.
- 입력한 내용에서 input창을 벗어나게 되면 바뀐 입력값이 state에 담겨 값이 변경됩니다.
