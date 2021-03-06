declare module 'preload-webpack-plugin' {
  type AsFunction = (entry: string) => string

  export interface PreloadWebpackPluginOptions {
    rel: 'preload'

    as: 'script' | 'font' | AsFunction

    // tslint:disable-next-line:max-union-size
    include: 'initial' | 'asyncChunks' | 'allChunks' | 'allAssets' | string[]

    fileBlacklist: string[] | RegExp[]

    excludeHtmlNames: string[]
  }

  declare class PreloadWebpackPlugin {
    public constructor(PreloadWebpackPluginOptions: options)
  }

  export default PreloadWebpackPlugin
}
