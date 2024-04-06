echo off
:: read the .env file
::for /F "delims=" %%i in (.env) do (set "%%i")
docker compose up --build


::start "" http://localhost/app1

::echo press any key to stop container...
pause

::docker compose down
