import { LitElement, PropertyValues } from 'lit';
/**
 * FastData 试用剩余时间提示
 * 提供给 dlink、dataSense 等项目进行复用展示
 */
export declare class ExpirationAlert extends LitElement {
    /**
     * 租户 id，查询是否试用过期的请求参数
     */
    tenantId: string;
    /**
     * 租户登录态 token，查询是否试用过期 header 中的参数
     */
    token: string;
    /**
     * 点击关闭按钮后设置隐藏状态的 cookie 名。
     * 默认为 'fast-data-sdk-cookie-name'
     */
    cookieName: string;
    /**
     * 点击关闭按钮后设置隐藏状态的 cookie 过期时间。
     * 默认为 1。表示 1 天后过期。
     */
    cookieExpires: number;
    /**
     * 点击关闭按钮后设置隐藏状态的 cookie 的域名。
     * 默认为 'fastdata.cn'
     */
    cookieDomain: string;
    private _dayLeft;
    private _visible;
    render(): import("lit").TemplateResult<1>;
    private onUpgrade;
    private onClose;
    updated(changed: PropertyValues<this>): void;
    private fetchExpirtaion;
    static styles: import("lit").CSSResult;
}
