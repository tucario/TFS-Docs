---
title: Falhas na implantação
description: Como ler diálogos de falha de implantação, quais são as causas comuns e o que fazer quando uma implantação é revertida.
---

Quando uma implantação falha, o TranSFlator reverte todo o processo (veja [Implantando no Salesforce](/pt/desktop-app/deploying/)) e mostra um diálogo com cada componente que falhou. O texto literal vem do Salesforce — nós não o editamos. Esta página é o guia para as mensagens de erro mais comuns.

## "INVALID_CROSS_REFERENCE_KEY"

O alvo da tradução não existe mais na organização (por exemplo, um campo personalizado que foi excluído desde a última verificação).

**Correção:** verifique novamente a organização com **Refresh metadata** e tente novamente. A linha obsoleta desaparecerá da grade.

## "Managed package component cannot be modified"

Você tentou traduzir um campo pertencente a um pacote gerenciado, e o Salesforce não permite isso, mesmo para usuários administradores.

**Correção:** O TranSFlator deveria ter marcado esses campos como somente leitura antes de você chegar aqui. Se você está vendo isso durante a implantação, significa que a verificação não detectou a flag de pacote gerenciado — clique em **Skip and retry** para excluir o componente e continuar. Avise-nos se isso se repetir: é um bug do nosso lado.

## "Required field missing"

O Salesforce esperava que o arquivo de tradução incluísse um campo que a grade não enviou. Acontece quando você traduz parcialmente um Tipo de Registro e deixa os valores da lista de opções para trás.

**Correção:** abra o Tipo de Registro na grade, complete as linhas ausentes e tente novamente.

## "Insufficient access rights on cross-reference id"

O seu usuário conectado não possui permissão para modificar o objeto ao qual esta tradução pertence.

**Correção:** atribua o conjunto de permissões (permission set) ao seu usuário ou autentique-se com um usuário que tenha o acesso. A jogada mais segura: crie um usuário dedicado como "administrador de tradução" com permissão em cada objeto que você deseja traduzir.

## Todo o resto

Copie o texto exato do erro do diálogo e cole em um e-mail para [hello@tucario.com](mailto:hello@tucario.com). Inclua o `componentType` do Salesforce, a chave de metadados e a linha que o erro menciona. Nós diremos como corrigir ou adicionaremos o caso a esta página.

:::note[TODO]
Iniciar uma tabela de códigos de erro específicos com links para a documentação do Salesforce. Script que exporta o log de implantação para um arquivo de texto compartilhável para suporte.
:::
