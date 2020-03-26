
import Prefab from "./Prefab";
import Sound from "./Sound";
import Texture from "./Texture";
import Animation from "./Animation";
import Atlas from "./Atlas";
export default class Resources {
    private static _prefab:Prefab;
    private static _sound:Sound;
    private static _tex:Texture;
    private static _ani:Animation;
    private static _atlas:Atlas;
    public static get Prefab():Prefab {
        if(!Resources._prefab){
            Resources._prefab = new Prefab();
        }
        return Resources._prefab;
    }

    public static get Sound():Sound {
        if(!Resources._sound){
            Resources._sound = new Sound();
        }
        return Resources._sound;
    }

    public static get Texture():Texture {
        if(!Resources._tex){
            Resources._tex = new Texture();
        }
        return Resources._tex;
    }

    public static get Animation():Animation {
        if(!Resources._ani){
            Resources._ani = new Animation();
        }
        return Resources._ani;
    }

    public static get Atlas():Atlas {
        if(!Resources._atlas){
            Resources._atlas = new Atlas();
        }
        return Resources._atlas;
    }
}

