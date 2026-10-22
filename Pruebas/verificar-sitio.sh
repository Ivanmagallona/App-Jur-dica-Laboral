#!/bin/sh
# Comprobación de la página del equipo (ESP-01).
#
# Uso, desde la raíz del repositorio:
#   sh pruebas/verificar-sitio.sh
# En Windows, en una terminal Git Bash.
#
# No se edita para que pase: si una comprobación falla, se arregla la página.
# Si lo que está mal es la comprobación, se discute en el equipo y se cambia
# en su propio Pull Request.

fallas=0
revisadas=0

bien() { echo "  ✔ $1"; revisadas=$((revisadas + 1)); }
mal()  { echo "  ✘ $1"; revisadas=$((revisadas + 1)); fallas=$((fallas + 1)); }

salto='
'

echo "1. La página existe"
if [ -f index.html ]; then
  bien "index.html está en la raíz del repositorio"
else
  mal "no hay index.html en la raíz del repositorio"
  echo
  echo "Resultado: todavía no hay página. Lo demás no se revisa."
  exit 1
fi

echo
echo "2. Hay una tarjeta por cada perfil de integrantes/"
hay_perfiles=no
for perfil in integrantes/*.md; do
  [ -e "$perfil" ] || continue
  hay_perfiles=si
  if grep -qF "$perfil" index.html; then
    bien "la página enlaza a $perfil"
  else
    mal "la página no enlaza a $perfil"
  fi
done
[ "$hay_perfiles" = si ] || mal "no hay ningún perfil en integrantes/"

echo
echo "3. Los archivos que la página usa existen"
enlaces=$(grep -oE '(href|src)="[^"]*"' index.html \
  | sed -E 's/^(href|src)="//; s/"$//; s/[?#].*$//' \
  | grep -vE '^(https?:|mailto:|tel:|data:|#|$)' | sort -u)
if [ -z "$enlaces" ]; then
  echo "  (la página no usa archivos propios)"
else
  set -f
  ifs_anterior=$IFS
  IFS=$salto
  for ruta in $enlaces; do
    if [ -e "$ruta" ]; then
      bien "$ruta existe"
    else
      mal "$ruta no existe"
    fi
  done
  IFS=$ifs_anterior
  set +f
fi

echo
echo "4. No se descarga nada de fuera, salvo las fotos de GitHub"
archivos=$(find . -path ./.git -prune -o \( -name '*.html' -o -name '*.css' \) -type f -print)
set -f
ifs_anterior=$IFS
IFS=$salto
externos=''
for archivo in $archivos; do
  hallazgos=$(
    {
      grep -nE 'src="https?://' "$archivo" | grep -vE 'src="https://(github\.com|avatars\.githubusercontent\.com)/'
      grep -nE '<link[^>]*href="https?://' "$archivo"
      grep -nE "(@import|url\()[[:space:]]*[\"']?https?://" "$archivo"
    } | sed -E "s|^([0-9]+):|$archivo, línea \\1: |"
  )
  [ -n "$hallazgos" ] && externos="$externos$hallazgos$salto"
done
IFS=$ifs_anterior
set +f
if [ -z "$externos" ]; then
  bien "ningún archivo descarga recursos de otros sitios"
else
  mal "estos archivos descargan algo de fuera:"
  printf '%s' "$externos" | sed 's/^/      /'
fi

echo
if [ "$fallas" -eq 0 ]; then
  echo "Resultado: todo en orden ($revisadas comprobaciones)."
  exit 0
else
  echo "Resultado: $fallas de $revisadas comprobaciones fallaron."
  exit 1
fi