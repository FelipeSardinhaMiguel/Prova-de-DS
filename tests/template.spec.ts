import { test, expect } from '@playwright/test';

const MEU_RM   = '251165'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui

  await page.getByLabel("Número de Matrícula").fill(MEU_RM);
  await page.getByLabel("Nome Completo").fill("Felipe Sardinha Miguel");
  await page.getByLabel("URL do Repositório").fill("https://github.com/FelipeSardinhaMiguel/Prova-de-DS.git");
  await page.getByRole('button', { name: 'Iniciar Prova' }).click();

  //1ª Pergunta
  await page.getByText("Os serviços podem ser implantados, escalados e desenvolvidos de forma independente").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  //2ª Pergunta
  await page.getByText("").click();
  
  //3ª Pergunta
  await page.getByText("").click();
  
  //4ª Pergunta
  await page.getByText("").click();
  
  //5ª Pergunta
  await page.getByText("").click();
  
  //6ª Pergunta
  await page.getByText("").click();
  
  //7ª Pergunta
  await page.getByText("").click();
  
  //8ª Pergunta
  await page.getByText("").click();
  
  //9ª Pergunta
  await page.getByText("").click();
  
  //10ª Pergunta
  await page.getByText("").click();
  
  //11ª Pergunta
  await page.getByText("").click();
  
  //12ª Pergunta
  await page.getByText("").click();
  
  //13ª Pergunta
  await page.getByText("").click();
  
  //14ª Pergunta
  await page.getByText("").click();
  
  //15ª Pergunta
  await page.getByText("").click();
  
  //16ª Pergunta
  await page.getByText("").click();
  

  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  // await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});
