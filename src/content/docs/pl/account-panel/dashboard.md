---
title: Pulpit nawigacyjny
description: Twój ekran startowy w panelu TranSFlator — saldo kredytów, statystyki tłumaczeń, stan API oraz onboarding przy pierwszym uruchomieniu.
---

Pulpit nawigacyjny to pierwsze, co widzisz zaraz po zalogowaniu. Odpowiada
na trzy pytania, z którymi zwykle przychodzisz do panelu:
*ile kredytów mi zostało, czy API działa poprawnie i ile ostatnio
przetłumaczyłem*.

![Pulpit nawigacyjny panelu TranSFlator — nagłówek z powitaniem, karta AI Characters pokazująca 5 000 pozostałych znaków i datę kolejnego odnowienia, baner „Batch-translate with AI” z maskotką tukana oraz cztery karty statystyk poniżej: Usage (ostatnie 30 dni), Top language pairs (30d), Recent translations, API Health (24h) i Credits forecast.](../../../../assets/screenshots/panel/dashboard.png)

## Co pokazuje każdy kafelek

**AI Characters** — Twoje bieżące saldo kredytów i data kolejnego
odnowienia (plan darmowy: co 30 dni, plany płatne: pierwszy dzień
Twojego cyklu rozliczeniowego). Przycisk **Buy Characters** przenosi
od razu do procesu zakupu.

**Batch-translate with AI** — przypomnienie, które silniki są
podłączone (Gemini · Claude · Mistral · DeepSeek) i że możesz je w
każdej chwili przełączyć z poziomu **API Settings**.

**Usage · Last 30 days** — bieżący licznik znaków przetłumaczonych w
ciągu ostatnich 30 dni na wszystkich silnikach. Przydatne do oceny, czy
Twój darmowy limit wystarczy do końca miesiąca.

**Top language pairs · 30d** — ranking Twoich najczęściej używanych par
źródło→cel. Pusty na świeżym koncie; uzupełnia się automatycznie po
uruchomieniu pierwszych partii.

**Recent translations** — lista najnowszych wierszy, które
przetłumaczyłeś. Kliknięcie w **Translation History** (lewy pasek boczny)
otwiera pełny dziennik.

**API Health · 24h** — średnie opóźnienie i liczba żądań z Twoim
tokenem API w ciągu ostatnich 24 godzin. Jeśli zobaczysz skok
opóźnienia lub żądań, których sam nie inicjowałeś, natychmiast
wyrotuj token (zobacz [Ustawienia API](/account-panel/api-token/)).

**Credits forecast** — prosta prognoza, kiedy Twoje bieżące saldo się
wyczerpie, na podstawie Twojego ostatniego trendu użycia. Wypełnia się
po kilku dniach aktywności.

## Onboarding przy pierwszym uruchomieniu

Nowe konta, które właśnie zweryfikowały swój e-mail, są prowadzone przez
dwuetapowy proces onboardingu, zanim pulpit nawigacyjny zostanie
załadowany po raz pierwszy.

### Krok 1 — Wybierz silnik AI

![Krok onboardingu „Choose Your AI Engine” — grupa Recommended z Google Gemini i Anthropic Claude, grupowania regionalne dla Ameryki Północnej, Europy, Azji oraz Australii i Oceanii, każde z jedną lub dwiema kartami silników, oraz przycisk „Continue” na dole.](../../../../assets/screenshots/panel/choose-engine.png)

TranSFlator działa z czterema silnikami AI; wybierasz jeden jako
domyślny dla nowych partii. Selektor grupuje je jako:

- **Recommended** — uniwersalne ustawienia domyślne: Google Gemini dla
  szybkiego, dokładnego tłumaczenia wielojęzycznego; Anthropic Claude
  dla pracy wymagającej niuansów i znajomości kontekstu.
- **North America** — przetwarzanie w USA dla ruchu z Ameryki Północnej
  o niskim opóźnieniu.
- **Europe** — Mistral AI, zgodny z RODO (GDPR) i mocny w językach UE.
- **Asia** — DeepSeek, ekonomiczny i mocny w językach CJK.
- **Australia & Oceania** — Gemini, najlepsze pokrycie regionalne.

Wybór nie jest wiążący. Silniki możesz przełączać w każdej chwili z
ekranu **API Settings** lub w konfiguracji partii w aplikacji
desktopowej.

### Krok 2 — Wybierz swój plan

![Krok onboardingu „Choose Your Plan” — karta Free Plan (5 000 znaków/miesiąc, dostęp do API z uwierzytelnianiem tokenem, wszystkie obsługiwane języki, tłumaczenia zoptymalizowane pod Salesforce) z przyciskiem „Continue with Free Plan” oraz karta Premium („Need more characters?”) z przyciskiem „View Premium Packages”.](../../../../assets/screenshots/panel/choose-plan.png)

Plan darmowy (5 000 znaków na 30 dni, dostęp do API, wszystkie
obsługiwane języki) wystarczy, aby przetestować TranSFlator od początku
do końca, a nawet obsłużyć małe organizacje. Dla większych wolumenów
karta **Premium** otwiera selektor pakietów — szczegóły w
[Kupowaniu kredytów](/account-panel/buying-credits/).

Kliknij **Continue with Free Plan**, aby zakończyć onboarding i trafić
na pulpit nawigacyjny. Pakiety możesz kupić w dowolnym późniejszym
momencie przyciskiem **Buy Characters** na pulpicie lub wpisem
**Buy Characters** w pasku bocznym.
