#!/bin/bash

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   🚀 Setup GitHub para Swinger World Pro                    ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para pausar
pause() {
    read -p "Presiona ENTER para continuar..."
}

echo -e "${BLUE}Este script te ayudará a subir el proyecto a GitHub.${NC}"
echo ""

# Verificar si estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No estás en el directorio del proyecto${NC}"
    echo "Por favor, ejecuta este script desde la carpeta swinger-world-app"
    exit 1
fi

echo -e "${GREEN}✅ Directorio correcto detectado${NC}"
echo ""

# Paso 1: Configuración de Git
echo "─────────────────────────────────────────────────────────────"
echo -e "${YELLOW}PASO 1: Configuración de Git${NC}"
echo "─────────────────────────────────────────────────────────────"
echo ""

echo "¿Ya tienes Git configurado? (y/n)"
read -r git_configured

if [ "$git_configured" != "y" ]; then
    echo "Ingresa tu nombre:"
    read -r git_name
    echo "Ingresa tu email:"
    read -r git_email
    
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
    
    echo -e "${GREEN}✅ Git configurado${NC}"
else
    echo -e "${GREEN}✅ Git ya configurado${NC}"
fi

echo ""
pause

# Paso 2: Inicializar repositorio
echo ""
echo "─────────────────────────────────────────────────────────────"
echo -e "${YELLOW}PASO 2: Inicializar Repositorio${NC}"
echo "─────────────────────────────────────────────────────────────"
echo ""

if [ -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Ya existe un repositorio Git${NC}"
    echo "¿Quieres reinicializarlo? (y/n)"
    read -r reinit
    
    if [ "$reinit" == "y" ]; then
        rm -rf .git
        git init
        echo -e "${GREEN}✅ Repositorio reinicializado${NC}"
    fi
else
    git init
    echo -e "${GREEN}✅ Repositorio inicializado${NC}"
fi

echo ""
pause

# Paso 3: Añadir archivos
echo ""
echo "─────────────────────────────────────────────────────────────"
echo -e "${YELLOW}PASO 3: Añadir Archivos${NC}"
echo "─────────────────────────────────────────────────────────────"
echo ""

git add .
echo -e "${GREEN}✅ Archivos añadidos${NC}"
echo ""

# Mostrar qué se va a subir
echo "Archivos que se subirán:"
git status --short | head -20
echo ""

if [ $(git status --short | wc -l) -gt 20 ]; then
    echo "... y $(( $(git status --short | wc -l) - 20 )) archivos más"
fi

echo ""
pause

# Paso 4: Crear commit
echo ""
echo "─────────────────────────────────────────────────────────────"
echo -e "${YELLOW}PASO 4: Crear Commit${NC}"
echo "─────────────────────────────────────────────────────────────"
echo ""

git commit -m "🎉 Initial commit: Swinger World Pro - Complete application

Features:
- 190 unique AI Members (130 women + 60 men)
- Real Stripe integration with 5 membership plans
- Token system for Super Likes and Boosts
- Premium UI/UX with Framer Motion animations
- Reactive backgrounds based on current view
- Incognito mode
- Complete documentation
- Ready for Railway deployment

Monetization:
- Tokens: €19 (50) and €40 (99)
- PRO: €29.99/month
- ELITE: €49/month
- RUBY: €81.99/year
- DIAMOND: €210 lifetime

Tech Stack: React 18, Vite, Tailwind CSS, Framer Motion, Lucide React"

echo -e "${GREEN}✅ Commit creado${NC}"
echo ""
pause

# Paso 5: Conectar con GitHub
echo ""
echo "─────────────────────────────────────────────────────────────"
echo -e "${YELLOW}PASO 5: Conectar con GitHub${NC}"
echo "─────────────────────────────────────────────────────────────"
echo ""

echo "Ahora necesitas crear el repositorio en GitHub:"
echo ""
echo "1. Ve a: ${BLUE}https://github.com/new${NC}"
echo "2. Repository name: ${GREEN}swingerworldpro${NC}"
echo "3. Description: ${GREEN}Elite adult social network with AI Members${NC}"
echo "4. Visibility: ${YELLOW}Private (recomendado)${NC}"
echo "5. NO marques 'Initialize with README'"
echo "6. Click en 'Create repository'"
echo ""
echo "¿Ya creaste el repositorio? (y/n)"
read -r repo_created

if [ "$repo_created" != "y" ]; then
    echo -e "${YELLOW}Por favor, crea el repositorio y vuelve aquí${NC}"
    exit 1
fi

echo ""
echo "Ingresa tu usuario de GitHub:"
read -r github_user

echo ""
echo "Conectando con GitHub..."
git remote add origin "https://github.com/$github_user/swingerworldpro.git"
git branch -M main

echo -e "${GREEN}✅ Conectado con GitHub${NC}"
echo ""
pause

# Paso 6: Subir código
echo ""
echo "─────────────────────────────────────────────────────────────"
echo -e "${YELLOW}PASO 6: Subir Código${NC}"
echo "─────────────────────────────────────────────────────────────"
echo ""

echo "Subiendo código a GitHub..."
echo ""
echo -e "${YELLOW}IMPORTANTE:${NC}"
echo "- Usuario: tu usuario de GitHub"
echo "- Password: tu token de acceso personal"
echo ""
echo "Si no tienes token, créalo aquí:"
echo "${BLUE}https://github.com/settings/tokens${NC}"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Código subido exitosamente${NC}"
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║   🎉 ¡ÉXITO! Tu código está en GitHub                       ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "Tu repositorio: ${BLUE}https://github.com/$github_user/swingerworldpro${NC}"
    echo ""
    echo "Próximos pasos:"
    echo "1. ✅ Verifica que todo se subió correctamente"
    echo "2. 🚀 Despliega en Railway desde este repositorio"
    echo "3. 💰 ¡Empieza a recibir pagos!"
    echo ""
else
    echo ""
    echo -e "${RED}❌ Error al subir código${NC}"
    echo ""
    echo "Posibles soluciones:"
    echo "1. Verifica tu usuario y token"
    echo "2. Asegúrate de que el repositorio existe en GitHub"
    echo "3. Intenta manualmente: git push -u origin main"
    echo ""
fi
