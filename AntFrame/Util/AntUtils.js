
declare var canvas;
declare var wx;

export class AntUtils {
    public static CaptureImage(params?: any) {
        let filepath = '';
        params = params || {};
        // let canvas: any = cc.game.canvas;
        let tempFilePath = canvas.toTempFilePathSync({
            x: params.x || 10,
            y: params.y || 10,
            width: params.width || 500,
            height: params.height || 500,
            destWidth: params.destWidth || 500,
            destHeight: params.destHeight || 500,
            fileType: 'png',
            quality: 1,
        });

        return tempFilePath;
    }
}
