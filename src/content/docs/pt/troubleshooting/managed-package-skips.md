---
title: Pulos de pacotes gerenciados
description: Por que o TranSFlator marca alguns campos como não traduzíveis, o que um "pacote gerenciado" realmente é e como traduzir textos de ajuda em pacotes gerenciados de sua propriedade.
---

O TranSFlator marca automaticamente campos e elementos pertencentes a **pacotes gerenciados** como somente leitura na grade. Se você está se perguntando por que seu campo favorito está acinzentado, esta página é para você.

## O que significa "pacote gerenciado"

Um pacote gerenciado é um aplicativo instalado em sua organização Salesforce a partir do AppExchange (ou de sua própria organização de desenvolvimento ISV). Campos, objetos, rótulos e layouts que vieram com um pacote gerenciado possuem um prefixo de namespace como `ns__FieldName__c`.

O Salesforce bloqueia os metadados desses componentes. **Mesmo um Administrador do Sistema não pode editar a tradução de um campo de pacote gerenciado a partir de uma organização consumidora** — apenas o desenvolvedor do pacote gerenciado pode, e apenas a partir da organização de desenvolvimento.

O TranSFlator detecta o prefixo do namespace no momento da verificação e acinzenta cada componente que o possui. Não é um bug — é uma proteção contra implantações que falhariam com o erro "Managed package component cannot be modified".

## "Mas eu sou o dono do pacote gerenciado"

Então você precisa traduzi-lo **a partir da sua organização de desenvolvimento**, não da organização do cliente que o instalou. Aqui está o fluxo:

1. Abra o TranSFlator e conecte-se à sua **organização de desenvolvimento do pacote gerenciado** (aquela de onde você gera as versões).
2. Verifique (Scan). Os campos em seu namespace agora aparecerão como editáveis.
3. Traduza e implante normalmente.
4. Gere uma nova versão do pacote gerenciado.
5. As organizações dos clientes receberão as novas traduções na próxima atualização do pacote.

## Pacotes não gerenciados e pacotes gerenciados de primeira geração

Pacotes não gerenciados não possuem namespace e são totalmente editáveis em qualquer lugar. Trate-os como qualquer outro componente — o TranSFlator não os ignorará.

Componentes de pacotes gerenciados de primeira geração instalados como **beta** (não lançados) também são editáveis para o desenvolvedor, mas não para os consumidores.

## Rótulos personalizados (Custom Labels)

Os Rótulos Personalizados se comportam de maneira um pouco diferente: Rótulos Personalizados `Protected` em um pacote gerenciado são bloqueados da mesma forma que os campos. Rótulos Personalizados `Public` *podem* ser sobrescritos por idioma na organização consumidora, e o TranSFlator permite isso — mas a sobrescrita é visível apenas na organização consumidora, não no pacote de origem.

:::note[TODO]
Capturas de tela concretas do acinzentamento de somente leitura na grade e da flag de pacote gerenciado no painel de metadados. Documentar a versão exata da API que o TranSFlator usa para detectar o namespace.
:::
