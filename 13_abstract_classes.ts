abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    abstract getSepia(): void
    getReelTime(): number {
        return 8
    }

}
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia")
    }
}
const hc = new Instagram("abc", "abc", 3)
hc.getReelTime();

//abstract class can not be used to create their object of the own but can be used to make the object of the classes that inherits them , you can give ,methods by abstract if you want to define them in instatiated class , if we want to add some features in abstract class then you can also that 