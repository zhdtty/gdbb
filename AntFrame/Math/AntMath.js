
export default class AntMath {

    public static RandomNumber(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }

}