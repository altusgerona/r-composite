# R Composite Component

R Composite Component

A React Web Component-like library we made that uses Material Design Lite.

Storyboard will work on port 8081 while Webpack server runs on 8080.

For this to work with webpack hot reload. Please go to `node_modules/webpack-dev-server/client/index.js`
and at line 62, please change:

```
  protocol: urlParts.protocol,
```

to...

```
  protocol: (window.location.protocol == 'https:') ? 'https:' : urlParts.protocol
```



