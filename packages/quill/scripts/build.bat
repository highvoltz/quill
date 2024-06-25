@REM @echo off
SET DIST=dist

SET TMPDIR=%TEMP%\%RANDOM%
mkdir %TMPDIR%
echo %TMPDIR%
call npx tsc --declaration --emitDeclarationOnly --outDir %TMPDIR%

if exist %DIST% rmdir /s /q %DIST%
mkdir %DIST%

move %TMPDIR%\src\* %DIST%
rmdir /s /q %TMPDIR%
call npx babel src --out-dir %DIST% --copy-files --no-copy-ignored --extensions .ts --source-maps
call npx webpack -- --mode %1
del /q %DIST%\dist\*.css.js %DIST%\dist\*.css.js.*
copy package.json %DIST%
copy README.md %DIST%
copy LICENSE %DIST%