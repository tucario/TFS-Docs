---
title: Ustawienia API
description: Twój token API, preferowany silnik AI, limity żądań, przykład curl oraz webhook wyczerpania kredytów — wszystko na jednym ekranie.
---

**API Settings** w lewym pasku bocznym to panel sterowania do
bezpośredniego korzystania z API. Aplikacja desktopowa odczytuje większość
tych samych wartości za Ciebie; ten ekran istnieje na wypadek, gdy chcesz
samodzielnie wywoływać API z CI, skryptu lub integracji zewnętrznej.

![Ekran API Settings — karta API Token z zamaskowanym tokenem oraz przyciskami Copy i Rotate Token, karta AI Credits pokazująca 5 000 z 5 000 pozostałych znaków i datę odnowienia, selektor AI Engine z „pigułkami” Gemini/Claude/Mistral/DeepSeek, karta Rate Limit pokazująca 60 req/min, karta z przykładem cURL oraz pole Depletion Webhook.](../../../../assets/screenshots/panel/api-settings.png)

## Token API

Każde konto TranSFlator ma jeden token API — długi losowy ciąg, który
uwierzytelnia Twoje konto wobec API tłumaczeń.

Karta tokenu pokazuje bieżącą wartość domyślnie zamaskowaną, z dwoma
akcjami:

- **Copy** — kopiuje pełny token do schowka. Traktuj go jak hasło.
- **Rotate Token** — unieważnia bieżący token i wystawia nowy. Użyj,
  jeśli podejrzewasz, że token wyciekł (wysłany do publicznego repo,
  opublikowany na czacie, pozostawiony w logu) lub w ramach regularnej
  polityki rotacji.

Po rotacji każda aplikacja desktopowa lub skrypt wciąż używający starego
tokenu otrzyma przy następnym wywołaniu `HTTP 401 Unauthorized` i będzie
wymagać zalogowania / aktualizacji konfiguracji.

## Kredyty AI

Lustrzane odbicie karty salda z pulpitu, wyświetlane tu, ponieważ
użytkownicy bezpośredniego API często chcą je mieć obok tokenu i
selektora silnika. Pokazuje pozostałe znaki, limit planu i datę
odnowienia.

## Silnik AI

Wybierz, który model obsługuje tłumaczenia inicjowane przez API:

- **Gemini** — uniwersalny model wielojęzyczny od Google.
- **Claude** — Anthropic, z wyczuciem niuansów i kontekstu.
- **Mistral** — europejski, zgodny z RODO (GDPR), mocny w językach UE.
- **DeepSeek** — ekonomiczny i mocny w językach CJK.

Wybór obowiązuje dla każdego wywołania `POST /translate/batch`, które
nie nadpisuje pola `engine` w swoim ciele. Zmiana silnika tutaj
aktualizuje też `preferred_ai_model` w dokumencie użytkownika, dzięki
czemu aplikacja desktopowa pobierze go przy następnej synchronizacji.

## Limit żądań

Pokazuje Twój bieżący limit żądań na token (domyślnie 60 req/min).
Przekroczenia zwracają `HTTP 429 Too Many Requests` — odczekaj i
ponów próbę. Limit jest egzekwowany per token API, nie per IP, więc
rotacja tokenów go nie resetuje.

## Przykład cURL

Gotowe do wklejenia wywołanie, wstępnie wypełnione Twoim tokenem i
wskazujące na endpoint tłumaczenia partii:

```bash
curl -X POST https://api.transflator.com/translate \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world","source_lang":"en","target_lang":"pl"}'
```

Kliknij **Copy** na karcie, aby pobrać je z podstawionym prawdziwym
tokenem. Odpowiedź to obiekt JSON z przetłumaczonym ciągiem i
metadanymi o tym, który silnik go wygenerował.

## Webhook wyczerpania kredytów

Opcjonalny. Wklej URL HTTPS, a my wyślemy POST-em ładunek JSON, gdy
saldo kredytów osiągnie zero. Przydatne do:

- Powiadamiania dyżurnego, gdy produkcyjna integracja z API wyczerpie
  kredyty.
- Uruchomienia automatycznego doładowania we własnym systemie
  rozliczeniowym.
- Wysłania powiadomienia do Slacka przez incoming webhook.

Zostaw pole puste, aby wyłączyć. Webhook uruchamia się raz na zdarzenie
wyczerpania (nie przy każdym kolejnym 429); ponownie aktywuje się po
następnym doładowaniu lub odnowieniu.
