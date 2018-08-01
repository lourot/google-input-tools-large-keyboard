# Publishing a new version

```
$ cd ../
$ export version=7.8.9
$ sed -i "s/  \"version\": \".*\",/  \"version\": \"$version\",/g" manifest.json
$ git commit -am $version
$ git push
$ git tag $version
$ git push --tags
```

`Draft a new release`
[on GitHub](https://github.com/AurelienLourot/google-input-tools-large-keyboard/releases).

```
$ wget https://github.com/AurelienLourot/google-input-tools-large-keyboard/archive/$version.zip
```

## On the [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)

(See [Publish in the Chrome Web Store](https://developer.chrome.com/webstore/publish).)

### Upload...

... the previously created zip.

### Detailed description

```
This extension makes "Input Tools"'s keyboard larger. Nothing more, nothing less.

Google Input Tools' virtual/on-screen keyboard is often too small. Install this extension to make it readable. This is especially useful for the Arabic virtual keyboard layout.

Make sure you have also installed Google Input Tools:
https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab
```

### Icon

[assets/storeIcon.png](assets/storeIcon.png)

### Screenshots

* [assets/screenshot.png](assets/screenshot.png)
* [assets/screenshot2.png](assets/screenshot2.png)

### Small promotional tile

[assets/tile.png](assets/tile.png)

### Website

https://github.com/AurelienLourot/google-input-tools-large-keyboard

### Category

Accessibility

### Regions

All regions

### Google Play for Education

Opt in

### Language

English
