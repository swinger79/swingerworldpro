# 🚀 Guía de Despliegue en Railway

## Pasos para Desplegar

### 1. Preparar el Proyecto

```bash
# Asegúrate de estar en el directorio del proyecto
cd swinger-world-app

# Verifica que todos los archivos estén presentes
ls -la
```

### 2. Inicializar Git (si no lo has hecho)

```bash
git init
git add .
git commit -m "Initial commit: Swinger World App complete"
```

### 3. Crear Repositorio en GitHub

```bash
# Crear repositorio en GitHub (https://github.com/new)
# Luego conectarlo:
git remote add origin https://github.com/TU-USUARIO/swinger-world-app.git
git branch -M main
git push -u origin main
```

### 4. Desplegar en Railway

#### Opción A: Desde la Web

1. Ve a [railway.app](https://railway.app)
2. Haz clic en "Start a New Project"
3. Selecciona "Deploy from GitHub repo"
4. Autoriza Railway a acceder a tu GitHub
5. Selecciona el repositorio `swinger-world-app`
6. Railway detectará automáticamente que es un proyecto Vite
7. El despliegue comenzará automáticamente

#### Opción B: Con Railway CLI

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login en Railway
railway login

# Inicializar proyecto
railway init

# Vincular con el proyecto de Railway
railway link

# Desplegar
railway up

# Ver logs
railway logs
```

### 5. Configurar Dominio (Opcional)

1. En el dashboard de Railway, ve a Settings
2. En la sección "Domains", añade un dominio personalizado
3. Configura los registros DNS según las instrucciones

### 6. Variables de Entorno

Railway ya configura automáticamente:
- `PORT`: Puerto asignado por Railway
- `NODE_ENV`: production

No necesitas configurar nada más por defecto.

### 7. Verificar Despliegue

Una vez desplegado, Railway te dará una URL como:
`https://swinger-world-app-production.up.railway.app`

Accede a ella para verificar que todo funciona correctamente.

## Solución de Problemas

### Build Falla

Si el build falla, verifica:

```bash
# Localmente, prueba el build
npm run build

# Si funciona localmente, verifica los logs en Railway
railway logs
```

### App no Carga

1. Verifica que el comando de start sea correcto en `package.json`
2. Revisa los logs en Railway para ver errores
3. Asegúrate de que el puerto sea el correcto

### Actualizar Despliegue

```bash
# Hacer cambios en tu código
git add .
git commit -m "Descripción de los cambios"
git push

# Railway desplegará automáticamente los cambios
```

## Comandos Útiles

```bash
# Ver logs en tiempo real
railway logs --follow

# Ver información del proyecto
railway status

# Abrir el dashboard
railway open

# Ver variables de entorno
railway variables

# Reiniciar servicio
railway restart
```

## Optimizaciones Post-Despliegue

1. **CDN**: Considera usar Cloudflare para mejorar tiempos de carga
2. **Analytics**: Integra Google Analytics o similar
3. **Monitoring**: Usa Sentry para tracking de errores
4. **Performance**: Habilita compresión gzip en Railway

## Seguridad

- Las variables sensibles deben estar en Railway, nunca en el código
- Activa HTTPS automático (Railway lo hace por defecto)
- Considera implementar rate limiting
- Añade headers de seguridad en el futuro

## Mantenimiento

### Actualizaciones

```bash
# Actualizar dependencias
npm update

# Build de prueba
npm run build

# Si todo está bien, commit y push
git add .
git commit -m "Update dependencies"
git push
```

### Monitoreo

Revisa regularmente:
- Logs de Railway para detectar errores
- Métricas de uso (usuarios, requests, etc.)
- Tiempos de carga y rendimiento

## Soporte

Si tienes problemas:
1. Revisa los logs: `railway logs`
2. Consulta la documentación de Railway: https://docs.railway.app
3. Verifica que todos los archivos de configuración estén correctos

---

¡Tu app Swinger World ahora está lista para el mundo! 🚀
