---
title: Token API
description: Generuj, kopiuj, rotuj i unieważniaj swój osobisty token API. Używany przez aplikację desktopową i do bezpośrednich wywołań API.
---

Każde konto TranSFlator ma jeden **token API** — długi, losowy
ciąg znaków, który uwierzytelnia Twoje konto w backendzie TranSFlator
podczas wywołań API tłumaczenia.

Zazwyczaj nie musisz o nim myśleć. Aplikacja desktopowa używa go
automatycznie po zalogowaniu. Jedynym momentem, w którym wchodzisz z nim
w bezpośrednią interakcję, jest chęć wywołania API tłumaczenia z poziomu
własnego kodu (np. rurociągu CI/CD).

## Gdzie się znajduje

W panelu → **Profil → Token API**. Token jest wyświetlany wraz z przyciskiem
**Kopiuj** i przyciskiem **Wygeneruj ponownie**.

## Wygeneruj ponownie (rotacja)

Kliknij **Wygeneruj ponownie**, aby unieważnić obecny token i wydać
nowy. Użyj tego, jeśli podejrzewasz, że token wyciekł — został przesłany do
publicznego repozytorium, opublikowany na czacie, zostawiony w pliku dziennika — lub po prostu
w ramach regularnego harmonogramu rotacji.

Po wygenerowaniu nowego tokena każda aplikacja desktopowa już zalogowana przy użyciu
starego otrzyma błąd `401 Unauthorized` przy następnym wywołaniu API i
poprosi o ponowne zalogowanie.

## Bezpośrednie użycie

Wyślij go jako token Bearer w nagłówku `Authorization` podczas
wywoływania naszego API tłumaczenia:

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <TWÓJ_TOKEN_API>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pl",
    "engine": "gemini"
  }'
```

Odpowiedź to tablica JSON z przetłumaczonymi ciągami znaków w tej samej
kolejności co dane wejściowe.

:::note[TODO]
Pełna dokumentacja API z każdym punktem końcowym (`/translate/batch`, `/me`,
`/packages`), kodami błędów i limitami szybkości. Zostanie to wydzielone
do osobnej sekcji.
:::
