import moveForward from './layer-animations'

moveForward();

// https://webpack.github.io/docs/hot-module-replacement.html
if (module.hot) {
  module.hot.accept();
}