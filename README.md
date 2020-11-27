# Vue + tailwindcss module

A Vue.js project is based on Vue-cli with tailwindcss, sass, jquery  
Vue.js專案模板，可使用tailwindcss、sass及jquery

## Requirements
- node >= v12.18.3  
- npm >= v6.14.6 

## Dependencies
- postcss@^8.1.10  
- tailwindcss@^2.0.1  
- node-sass@^4.14.1
- sass@^1.29.0
- sass-loader@^7.3.1
- vue@^2.5.2
- vue-router@^3.0.1
- jquery@^3.5.1


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build tailwindcss
npm run tailwindcss
```

- tailwindcss 沒有hot reload，改了css要再編譯一次
- main.css import tailwindcss will output to main-output.css by `npm run tailwindcss`
- 執行`npm run dev`可即時編譯sass