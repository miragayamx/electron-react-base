const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    node: () => process.versions.node
});