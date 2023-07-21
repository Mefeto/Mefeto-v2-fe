import { InputForm } from "@/app/write/page";

export const generateHtmlFromInput = (
  steps: InputForm
) => `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head><body><article><div class="page-body"><h1>${steps.step1}</h1><h2>어떤 상황인가요?</h2>${steps.step2}<h2>어떤 점이 문제인가요?</h2>${steps.step3}<h2>어떻게 해결되면 좋을까요?</h2>${steps.step4}</div></article></body></html>
`;
