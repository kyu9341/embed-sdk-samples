# 이슈 목록

각 이슈에 대한 세부 내용은 각 커밋에서 샘플 코드와 함께 커밋 메시지로 작성해 두었습니다.

- Text to Image 생성 후 "편집 계속" 버튼을 이용해 Full Editor 진입 시 Container Config 설정이 적용되지 않음
  - [`cce1b1b719acf248ffce88974ad9cfee2f59076c`](https://github.com/kyu9341/embed-sdk-samples/commit/cce1b1b719acf248ffce88974ad9cfee2f59076c)
- 멀티페이지 보내기에서 비디오가 포함된 경우 onPublish 콜백이 호출되지 않거나 로딩이 멈추는 경우가 있음
  - [`7c7cf61069317300be7030c79ed216a786037a46`](https://github.com/kyu9341/embed-sdk-samples/commit/7c7cf61069317300be7030c79ed216a786037a46)
- module.editImage 사용 중 추가 편집을 위해 Full Editor 진입 시 exportOptions 설정이 가능한지 확인 필요
  - [`8831a92ad2cb97ad46f4bb6b7ad5adba09d114bd`](https://github.com/kyu9341/embed-sdk-samples/commit/8831a92ad2cb97ad46f4bb6b7ad5adba09d114bd)
- ExportOptionsGroup을 사용하는 경우 문서에 명시된 형식에 맞게 입력해도 유효하지 않은 파라미터라는 에러가 발생함
  - [`106bdc8cc68ef3bad043b3857d39f4bcca257336`](https://github.com/kyu9341/embed-sdk-samples/commit/106bdc8cc68ef3bad043b3857d39f4bcca257336)

---

# Adobe Express Embed SDK Full Editor tutorial

This sample project is a companion to the [Full Editor](https://developer.adobe.com/express/embed-sdk/docs/guides/tutorials/full-editor/) tutorial for the Adobe Express Embed SDK. 

## Running the sample

1. Make sure you have an Embed SDK API Key. If you don't have one, follow the instructions in the [Quickstart guide](https://developer.adobe.com/express/embed-sdk/docs/guides/quickstart/).
2. Locate the `.env` file in the project root and add your Embed SDK API Key to the `API_KEY` field.

```bash
VITE_API_KEY="your-api-key-here!"
```

3. Install the dependencies:

```bash
npm install
```

4. Start the local server:

```bash
npm run start
```

5. Open your browser and navigate to [https://localhost:5555](https://localhost:5555).

## Learn more

Please refer to the [Tutorial](https://developer.adobe.com/express/embed-sdk/docs/guides/tutorials/) for a detailed guide on how to use this sample project.