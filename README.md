# Guatemala-app
Este es el repositorio principal del proyecto Guatemala APP.

## Setup
Para ejecutar la aplicación, primero clone el repositorio en su máquina local:

```bash
git clone https://github.com/jenriquelopezdev/Guatemala-app.git
```

Instalar Cordova

```
    $ npm install -g cordova
```

Instalar Ionic

```
    $ npm install -g ionic
```

## Instalacion del proyecto

1. Instalar dependencias npm  ``` $ npm install ```

2. Instalar recursos ```  $ ionic cordova resources ```

3. Agregar plataformas

```
    $ ionic cordova platform add android
    $ ionic cordova platform add ios
```

##
* iOS Build 

```
   https://ionicframework.com/docs/building/ios

```

* Android Build 

```
   https://ionicframework.com/docs/building/android

```

* Ejecute la aplicación en el dispositivo

```
    $ ionic cordova run android
    $ ionic cordova run ios --device
```

* Create signing key for android to release on Google Play

```
    $ keytool -genkey -v -keystore keystore folder address -alias app alias -keyalg RSA -keysize 2048 -validity 10000
```

* Create release build for Android Play Store

```
    $ ionic cordova build android --release
```

* Sign the ‘unsigned’ APK for upload on Play store

```
    $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore file full path unsigned apk full path app alias
```
