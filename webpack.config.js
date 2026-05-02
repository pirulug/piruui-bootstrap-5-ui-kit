const Webpack = require("webpack");
const Path = require("path");
const Fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettifyWebpackPlugin = require("pirulug-prettify-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DeleteEmptyFilesPlugin = require("pirulug-delete-empty-files-webpack-plugin");

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== "production",
};

// PUG
const PAGES_DIR = `${Path.resolve(__dirname, "src")}/view/pages`;

function getFiles(dir, allFiles) {
  const files = Fs.readdirSync(dir);
  allFiles = allFiles || [];
  files.forEach(function (file) {
    const name = Path.join(dir, file);
    if (Fs.statSync(name).isDirectory()) {
      allFiles = getFiles(name, allFiles);
    } else if (file.endsWith(".pug")) {
      allFiles.push(Path.relative(PAGES_DIR, name).replace(/\\/g, "/"));
    }
  });
  return allFiles;
}

const PAGES = getFiles(PAGES_DIR);
const jsonData = {};
module.exports = {
  entry: {
    piruui: "./src/js/piruui.js",
    extra: "./src/plugins/extra/extra.js",
    bootstrapicons: "./src/plugins/bootstrapicons/bootstrapicons.js",
    feathericons: "./src/plugins/feathericons/feathericons.js",
    fontawesome: "./src/plugins/fontawesome/fontawesome.js",
    liteyoutube: "./src/plugins/liteyoutube/liteyoutube.js",
    prism: "./src/plugins/prism/prism.js",
    custom: "./src/plugins/custom/custom.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  devtool: false,
  output: {
    path: Path.join(opts.rootDir, "dist"),
    pathinfo: opts.devBuild,
    filename: "assets/js/[name].js",
    chunkFilename: "assets/js/[name].js",
  },
  performance: { hints: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
    runtimeChunk: false,
  },
  plugins: [
    // DELETE
    new CleanWebpackPlugin(),
    // Extract css files to seperate bundle
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
      chunkFilename: "assets/css/[name].css",
    }),
    // Copy fonts and images to dist
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/fonts", to: "assets/fonts" },
        { from: "src/img", to: "assets/img" },
      ],
    }),
    // Cargar paginas de .pug
    ...PAGES.map((page) => {
      const name = page.replace(".pug", "");
      const level = (name.match(/[\\\/]/g) || []).length;
      const baseUrl = level > 0 ? "../".repeat(level) : "./";

      return new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/, ".html")}`,
        templateParameters: {
          baseUrl: baseUrl,
          assets: baseUrl + "assets/",
          siteName: "PiruUI",
          navLogoStyle: "text",
          ...jsonData,
        },

        minify: {
          collapseWhitespace: false,
          keepClosingSlash: false,
          removeComments: false,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: false,
          removeStyleLinkTypeAttributes: false,
          useShortDoctype: false,
          preventAttributesEscaping: false,
        },
        inject: false,
      });
    }),

    // Beautify
    new PrettifyWebpackPlugin({
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      htmlWhitespaceSensitivity: "ignore",
      endOfLine: "auto",
      htmlWhitespaceSensitivity: "css",
      jsxBracketSameLine: false,
      htmlWhitespaceSensitivity: "ignore",
      proseWrap: "always",
    }),
    // Eliminar archivos vacios
    new DeleteEmptyFilesPlugin(__dirname, "dist"),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      // Css-loader & sass-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
                loadPaths: [Path.resolve(__dirname, "node_modules")],
              },
            },
          },
        ],
      },
      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      // Load images (including svg)
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
      // Pug
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pirulug-pug-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: [
          {
            loader: "json-loader",
          },
        ],
      },
    ],
  },
  ignoreWarnings: [
    (warning) =>
      /Global built-in functions are deprecated/.test(warning.message) ||
      /Sass @import rules are deprecated/.test(warning.message) ||
      /deprecation warnings omitted/.test(warning.message),
  ],
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["node_modules"],
    alias: {
      request$: "xhr",
      "~": Path.resolve(__dirname, "./src"),
      "../webfonts": Path.resolve(
        __dirname,
        "node_modules/@fortawesome/fontawesome-free/webfonts"
      ),
    },
  },
  cache: {
    type: "filesystem",
  },
  devServer: {
    static: {
      directory: Path.join(__dirname, "dist"),
    },
    watchFiles: [
      "src/data/**/*.json",
      "src/js/**/*.js",
      "src/scss/**/*.scss",
      "src/view/**/*.pug",
    ],
    compress: true,
    port: 8989,
    open: true,
    liveReload: true,
  },
  stats: {
    assets: true,
    builtAt: true,
    colors: true,
    modules: false,
    children: false,
  },
};
