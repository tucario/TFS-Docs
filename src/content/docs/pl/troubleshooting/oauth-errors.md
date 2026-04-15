---
title: Błędy OAuth
description: Napraw typowe błędy OAuth, które mogą wystąpić podczas łączenia organizacji Salesforce — niezgodność przekierowań, wygasłe sesje, unieważnione tokeny.
---

Większość błędów OAuth jest powtarzalna i wpada do jednej z czterech kategorii.
Oto jak je rozróżnić i naprawić.

## „redirect_uri mismatch”

**Objaw:** Salesforce wyświetla ogólną stronę błędu zamiast ekranu
„Allow”, z `error=redirect_uri_mismatch` w adresie URL.

**Przyczyna:** aplikacja TranSFlator Connected App w Salesforce jest
skonfigurowana z adresem URL wywołania zwrotnego (callback), który nie pasuje do tego, czego
faktycznie używa aplikacja (`http://localhost:1717/oauth/callback`).

**Naprawa:** to nigdy nie powinno zdarzyć się klientom — oznaczałoby to,
że metadane naszej aplikacji Connected App zostały uszkodzone. Jeśli na to trafisz, napisz na adres
[hello@tucario.com](mailto:hello@tucario.com) z adresem URL z Twojej przeglądarki.

## „invalid_grant” przy wymianie tokena

**Objaw:** przeglądarka prawidłowo przekierowuje z powrotem, ale aplikacja
wyświetla komunikat „authentication failed”.

**Przyczyna:** kod autoryzacyjny wygasł, zanim aplikacja zdążyła go
wymienić. Dzieje się tak, gdy spędzisz więcej niż minutę na ekranie uprawnień Salesforce.

**Naprawa:** kliknij ponownie **Add Connection** i przejdź przez proces bez przerw.

## „session expired or invalid”

**Objaw:** połączenie działało wczoraj, dziś po kliknięciu wyświetla się czerwona kropka i komunikat „Session expired”.

**Przyczyna:** Twój token odświeżający został unieważniony. Dzieje się tak, gdy:

- Administrator kliknął **Revoke** w aplikacji TranSFlator Connected App na ekranie Salesforce Connected Apps OAuth Usage.
- Hasło Twojego użytkownika Salesforce zostało zresetowane (Salesforce unieważnia
  wszystkie tokeny odświeżające przy zmianie hasła).
- Twoja organizacja ma politykę „ważności tokena odświeżającego”, której termin właśnie minął.

**Naprawa:** kliknij połączenie, aplikacja poprosi Cię o
ponowną autoryzację. Przejdź przez proces OAuth i wszystko wróci do normy.

## „IP address not allowed”

**Objaw:** Salesforce odrzuca żądanie OAuth z komunikatem `restricted_access` lub podobnym.

**Przyczyna:** Twoja organizacja ma ustawione **Login IP Ranges** (zakresy IP logowania) na profilu, na którym się uwierzytelniłeś, a Twoje obecne IP nie znajduje się w tym zakresie.

**Naprawa:** połącz się z dozwolonego adresu IP (VPN biurowy itp.) lub poproś administratora o rozluźnienie zakresu IP profilu dla Twojego użytkownika.

:::note[TODO]
Dodać konkretne zrzuty ekranu błędów. Udokumentować konkretne wpisy w dzienniku audytu (Audit Log), których należy szukać w Setup Salesforce podczas debugowania.
:::
