# Faggruppe front-end service workers

-   Twitter konkurent "Bitter"
-   Ustabilt og tregt api
-   Finne strategier for å gjøre brukeropplevelsen bedre

Du finner kode for å hjelpe deg under eksempler

## Oppgave 1

-   Opprett en service worker i public mappen. Lag en ny fil du kaller "bitter-sw.js"
-   Øverst i filen lager du en konstant med navn på cachen. F.eks:
    const cacheName = 'bitter_cache_v1';
-   Legg inn lytter for 'install' og 'activate' eventene
-   Registrer service workeren i index.html
-   Gå til application under developer console
    -   Under service workers vil du se grønn service worker status
    -   Åpne cache storage og se at cachen din er opprettet

## Oppgave 2

-   Legg til lytter for 'fetch' event
-   Log eventet til consol og se hvilke events som blir plukket opp
-   Legg til koden for å hente ut og putte requests i cache
-   Gå tilbake til applications tab i developer console
-   Se hva som blir lagt til i cachen

## Oppgave 3

-   Endre så vi kun cacher api kall
-   Du kan gjøre en sjekk på: event.request.url.indexOf('api') > -1
-   Sjekken gjøres i 'fetch' lytteren

## Oppgave 4

-   Vi bør ikke cache feil fra api
-   Gjør en sjekk på resultatet fra nettverket:
    if (responseFromNetwork.ok) putInCache

## Oppgave 5

Vi gjør kun et api kall. Men det er flere endepunkt tilgjengelig.
Finn en stategi for å laste flere ting samtidig istedenfor alt.

-   Se under api/useApi for å finne tilgjengelige endepunkt.
-   Data blir hentet under pages/Home.tsx. Gjør endringer her for å hente fra flere endepunkt istedenfor ett.

## Oppgave 6

Det kan være hensiktsmessig å slette cachen. Klikk på ikonet oppe til høyre.
Her finner du kode for å sende meldinger til service workeren.
I dette tilfelle en melding om å tømme cachen.

-   Legg til kode i service worker for å håndtere meldingen og tøm cachen.
    -   Legg til denne øverst i service worker filen: let client;

## Oppgave 7

Nå vil resultater fra api kall bli hentet fra cachen for all tid.
Dvs at data ikke blir oppdatert. Vi trenger en mekanisme for å hente ny data.

-   Endre funksjonene som er referert til under "// Kode som blir brukt i oppgave 7" i service-worker-eks.js
-   Set minutesBeforeExpiry til 1 for å se at cachen blir oppdatert etter 1 minutt
