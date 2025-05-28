// Gulpの基本機能を読み込み
import { src, dest, watch, series } from 'gulp';
// gulp-sass を読み込み
import gulpSass from 'gulp-sass';
// Dart Sass をインポート「sass」パッケージ
import * as dartSass from 'sass';

// gulp-sass に Dart Sass を設定して使う
const sass = gulpSass(dartSass);

// Sass をコンパイルする関数
const compileSass = () => {
  // SCSSファイルすべてを対象に
  return src('./src/scss/**/*.scss')
    //「expanded」に指定
    .pipe(sass({ style: 'expanded' }))
    // 出力先は css フォルダ
    .pipe(dest('./css'));
};

// SCSSファイルの変更を監視して自動でコンパイル
const watchSass = () => {
  watch('./src/scss/**/*.scss', compileSass);
};

// デフォルトタスク（初回実行＋監視）
export default series(compileSass, watchSass);

// 個別に実行できるようにエクスポート
export { compileSass as sass, watchSass as watch };
