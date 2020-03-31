
Not necessary, use Yarn workspaces.
```
lerna add @blogsley/blocksley --scope=@blogsley/quasar-app-extension-blocksley
lerna add @blogsley/quasar-app-extension-blocksley --scope=@blogsley/blocksley-demo
```
Not necessary, just use Node.
```
yarn add @babel/core @babel/node @babel/preset-env --dev -W
```