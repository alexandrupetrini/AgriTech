/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 3001
    },
    "files": [
        "build/*.*",
        "build/**/*.*"
    ],
    "watchEvents": [
        "change",
        "add",
        "addDir",
        "unlink",
        "unlinkDir"
    ],
    "watch": true,
    "ignore": [],
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": false,
    "proxy": {
        "target": "http://agritech.local",
        "ws": false
    },
    "port": 3000,
    "middleware": false,
    "serveStatic": [],
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "location": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "debug",
    "logPrefix": "sync",
    "logConnections": true,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": [],
    "open": false,
    "browser": ["firefox-dev", "chrome-dev"],
    "cors": true,
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": true,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 10,
    "scrollRestoreTechnique": "window.name",
    "scrollElements": [],
    "scrollElementMapping": [],
    "reloadDelay": 50,
    "reloadDebounce": 100,
    "reloadThrottle": 10,
    "plugins": [],
    "injectChanges": false,
    "startPath": null,
    "minify": false,
    "host": "agritech.local",
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    // "socket": {
    //     "socketIoOptions": {
    //         "log": true
    //     },
    //     "socketIoClientConfig": {
    //         "reconnectionAttempts": 50
    //     },
    //     "path": "/browser-sync/socket.io",
    //     "clientPath": "/browser-sync",
    //     "namespace": "/browser-sync",
    //     "clients": {
    //         "heartbeatTimeout": 500
    //     }
    // },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    },
    "injectNotification": true
};