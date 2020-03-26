import { Config } from './Config';
import { Platform } from "./GamePlatform";

export class Adv {
    private static _self: Adv;

    public static get inst(): Adv {
        if (!this._self) {
            this._self = new Adv();
        }
        return this._self;
    }

    public async showBannerAd(params : any) {
        if(!params){
            params = {};
        }

        params.adUnitId = Config.ctx.ad.bannerId;
        await Platform.sdk.ShowBannerAd(params);
    }

    public hideBannerAd() {
        Platform.sdk.HideBannerAd();
    }

    public async showVideoAd(params:any) {
        params = params || {};
        let adUnitId = params.adUnitId || Config.ctx.ad.videoId;
        let finishCb = params.finishCb;
        let exitCb = params.exitCb;
        let errorCb = params.errorCb;
        await Platform.sdk.ShowRewardVideoAd({
            adUnitId: adUnitId,
            finishCb: finishCb,
            exitCb: exitCb,
            errorCb: errorCb,
        });
    }

    public async showInterstitialAd(finishCb: any, errorCb: any = null) {
        await Platform.sdk.ShowInterstitialAd({
            adUnitId: Config.ctx.ad.interstId,
            finishCb: finishCb,
            errorCb: errorCb,
        });
    }
}
