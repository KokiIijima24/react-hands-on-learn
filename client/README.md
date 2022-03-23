# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 動作環境

- Git
- node.js ≧ v14
    - npm
    - @stoplight/prism-cli

## 実行方法

```
git clone https://github.com/koki-2424/react-hands-on-learn.git
cd react-hands-on-learn/client
npm i
```

### モックサーバーを起動する

npm ls -g --depthを実行して、prismが入っていないことを確認した場合は
> PS C:\User> npm ls -g --depth=0 \
> C:\Program Files\nodejs \
> +-- @stoplight/prism-cli@4.8.0 \
> +-- npm@6.14.15 \

以下のコマンドを実行してインストールする。
```
npm install @stoplight/prism-cli
```

モックサーバーを起動する。

```
npm run server
```

### アプリケーションを起動する

```
npm run start
```

[http://localhost:3000](http://localhost:3000)へアクセスし、起動していることを確認する。


## Design system

This application uses [Tailwind](https://tailwindcss.com/docs/installation) for its customizability.

source: [Tailwind Toolbox](https://www.tailwindtoolbox.com/templates/minimal-blog)