import AntFrame from '../AntFrame/AntFrame';
import AntGame from './AntGame';
import { SceneOrientation } from '../AntFrame/UI/AntAdaptorMgr';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UqeePortraitScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    async start() {
        AntFrame.Adaptor.ChangeOrientation(SceneOrientation.Portrait);
        AntFrame.Adaptor.Adapt(cc.size(720, 1280));
        AntFrame.Adaptor.dump();
        AntFrame.UIMgr.node.addComponent(AntGame);
    }
    // update (dt) {}
}
