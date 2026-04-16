---
title: Profil
description: Dane Twojego konta, preferowany silnik AI, zmiana hasła i e-maila oraz wejście do usuwania konta.
---

Ekran **Profile** to ostatnia pozycja w pasku bocznym panelu. Wszystko,
co nie jest rozliczeniami ani historią tłumaczeń, znajduje się tutaj.

![Ekran Profile — nagłówek konta z e-mailem użytkownika, datą rejestracji i odznaką Verified, karta Preferred AI Engine pokazująca Mistral AI (Europe) z przyciskiem Change AI Engine, karta Security z wierszami Password i Email address, każdy z przyciskiem Change, oraz czerwona karta Danger Zone z wierszem Delete account i przyciskiem Delete.](../../../../assets/screenshots/panel/profile.png)

## Nagłówek konta

Pokazuje Twój e-mail używany do logowania (zamaskowany na zrzutach
ekranu), datę rejestracji oraz odznakę **Verified** po potwierdzeniu
adresu. Jeśli odznaki nie ma, wróć i zakończ
[weryfikację e-maila](/account-panel/sign-up/#verify-your-email).

## Preferowany silnik AI

Podsumowanie silnika aktualnie ustawionego jako domyślny, z przyciskiem
**Change AI Engine**. Kliknięcie ponownie otwiera ten sam selektor
silnika, który widziałeś podczas onboardingu (zobacz
[Pulpit nawigacyjny — onboarding przy pierwszym uruchomieniu](/account-panel/dashboard/#first-run-onboarding)).

Zmiana silnika tutaj aktualizuje pole `preferred_ai_model` w Twoim
dokumencie użytkownika; nowe tłumaczenia (panel, desktop, API bez
jawnego `engine`) od razu je pobierają.

## Bezpieczeństwo

Dwie niezależne akcje:

- **Password — Change** — otwiera dialog, który najpierw prosi o
  bieżące hasło, a potem dwukrotnie o nowe. Aktualizacja zachodzi
  atomowo w Firebase Auth; żadne inne sesje nie są wylogowywane, więc
  jeśli zmieniasz hasło z powodu podejrzenia wycieku, wyrotuj też swój
  [token API](/account-panel/api-token/).
- **Email address — Change** — wysyła link weryfikacyjny na nowy adres.
  Zmiana wejdzie w życie dopiero po kliknięciu tego linku; do tego
  czasu logowanie nadal działa ze starym adresem.

## Danger Zone

Karta z czerwoną obwódką na dole ekranu. Jedyną akcją jest
**Delete account** i jest celowo odsunięta, aby nie dało się jej
kliknąć przez pomyłkę. Kliknięcie **Delete** rozpoczyna kaskadę
opisaną w [Usuwaniu konta](/account-panel/delete-account/).

Usunięcie jest **nieodwracalne** i kasuje Twój dokument użytkownika,
historię zakupów, historię tłumaczeń oraz wpis w Firebase Auth.
Przeczytaj podlinkowaną stronę, zanim klikniesz.
