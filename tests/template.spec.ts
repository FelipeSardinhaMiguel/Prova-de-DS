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
  await page.getByText("Executar um efeito colateral (ex: buscar dados, configurar uma inscrição) após a renderização").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  //3ª Pergunta
  await page.getByText("Testes unitários").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //4ª Pergunta
  await page.getByText("Teste de integração").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //5ª Pergunta
  await page.getByText("Os testes devem ser simples e legíveis — evite complexidade desnecessária").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //6ª Pergunta
  await page.getByText("Executa uma função de configuração antes de cada caso de teste individualmente").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //7ª Pergunta
  await page.getByText("Don't Repeat Yourself — evite duplicar conhecimento ou lógica").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //8ª Pergunta
  await page.getByText("Um conjunto de casos de teste agrupados em torno de uma funcionalidade ou preocupação").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //9ª Pergunta
  await page.getByText("Uma tupla com o valor atual do estado e uma função de atualização").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //10ª Pergunta
  await page.getByText("Uma função que valida os dados de entrada, salva no banco de dados e envia um e-mail").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //11ª Pergunta
  await page.getByText("Porque são os mais caros de escrever, executar e manter").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //12ª Pergunta
  await page.getByText("Para manter o teste rápido e determinístico, sem depender de um serviço externo").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //13ª Pergunta
  await page.getByText("A porcentagem do código de produção executada pela suite de testes").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //14ª Pergunta
  await page.getByText("Incluir na lista de dependências um valor que é reatribuído dentro do próprio efeito").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //15ª Pergunta
  await page.getByText("Testa um único trecho de lógica de forma isolada, sem dependências externas").click();
  await page.getByRole('button', { name: 'Próxima' }).click();
  
  //16ª Pergunta
  await page.getByText("Quantas vezes a função foi chamada e com quais argumentos").click();
  await page.getByRole('button', { name: 'Enviar' }).click();
  

  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});