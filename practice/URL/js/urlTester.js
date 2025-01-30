import { logger } from './logger.js';

/**
 * URL 處理器
 */
export class UrlTester {
  #baseUrl;
  #baseUrlObj;

  // 不存在的絕對路徑
  static notExistAbsolutePath = '/aaa';
  // 不存在的上一層相對路徑
  static notExistRelativePreviousPath = '../aaa';
  // 不存在的下一層相對路徑
  static notExistRelativeNextPath = "./aaa";

  /**
   * 建構。
   * @param {String} baseUrl - URL 字串，作為基礎 URL。
   */
  constructor(baseUrl) {
    if (!baseUrl) {
      throw new Error("必須給入 baseUrl！");
    }
    this.#baseUrl = baseUrl;
    this.#baseUrlObj = new URL(this.#baseUrl);
    console.log(`基礎 URL ==>`, this.#baseUrl);
    console.log(`基礎 URL 實例 ==>`, this.#baseUrlObj);
  }


  /**
   * 自定義 URL，會以基礎 URL 為基準。
   * @param {string} customUrl - 自訂的 URL，可以是絕對路徑、相對路徑、或是完整的網址。
   * @returns {URL} URL 物件實例。
   */
  buildUrlCustom (customUrl) {
    return new URL(customUrl, this.#baseUrl);
  }

  /**
   * 根目錄。
   * @returns {URL} URL 物件實例。
   */
  buildUrlRoot () {
    // return new URL("/"); // Failed to construct 'URL': Invalid URL
    return this.buildUrlCustom("/");
  }

  /**
   * 不存在的絕對路徑。
   * @returns {URL} URL 物件實例。
   */
  buildUrlNotExistAbsolute () {
    return this.buildUrlCustom(UrlTester.notExistAbsolutePath);
  }

  /**
   * 相對路徑 - 當層。
   * @returns {URL} URL 物件實例。
   */
  buildUrlRelativeCurrent () {
    return this.buildUrlCustom("./");
  }

  /**
   * 相對路徑 - 上一層。
   * @returns {URL} URL 物件實例。
   */
  buildUrlRelativePrevious () {
    return this.buildUrlCustom("../");
  }

  /**
   * 不存在的上一層相對路徑。
   * @returns {URL} URL 物件實例。
   */
  buildUrlNotExistRelativePrevious () {
    return this.buildUrlCustom(UrlTester.notExistRelativePreviousPath);
  }

  /**
   * 不存在的下一層相對路徑。
   * @returns {URL} URL 物件實例。
   */
  buildUrlNotExistRelativeNext () {
    return this.buildUrlCustom(UrlTester.notExistRelativeNextPath);
  }


  /**
   * 取得基礎 URL。
   * @returns {string} 基礎 URL。
   */
  getBaseUrl () {
    return this.#baseUrl;
  }

  /**
   * 取得以基礎 URL 建構的 URL 物件實例
   * @returns {URL} URL 物件實例
   */
  getBaseUrlObj () {
    return this.#baseUrlObj;
  }


  /**
   * 測試
   */
  test () {
    console.log(this);

    logger.logTestTitle(`基礎 URL 物件`);
    logger.logUrlObj(this.getBaseUrlObj());

    logger.logTestTitle(`根目錄`);
    logger.logUrlObj(this.buildUrlRoot());

    logger.logTestTitle(`當層目錄`);
    logger.logUrlObj(this.buildUrlRelativeCurrent());

    logger.logTestTitle(`上一層目錄`);
    logger.logUrlObj(this.buildUrlRelativePrevious());

    logger.logTestTitle(`不存在的絕對路徑 (${UrlTester.notExistAbsolutePath})`);
    logger.logUrlObj(this.buildUrlNotExistAbsolute());

    logger.logTestTitle(`不存在的上一層相對路徑 (${UrlTester.notExistRelativePreviousPath})`);
    logger.logUrlObj(this.buildUrlNotExistRelativePrevious());

    logger.logTestTitle(`不存在的下一層相對路徑 (${UrlTester.notExistRelativeNextPath})`);
    logger.logUrlObj(this.buildUrlNotExistRelativeNext());

    logger.logTestTitle(`自定義 URL`);
    logger.logUrlObj(this.buildUrlCustom("https://www.google.com.tw/search"));
  }
}
