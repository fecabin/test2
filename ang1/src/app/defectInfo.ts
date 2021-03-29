export class DefectInfo {

    constructor(
        maskId:String,
        ebNumber:String,
        defectId:Number,
        defectNo:String,
        locX:String,
        locY:String,
        defectCd:String,
        ) {
        this.maskId = maskId;
        this.ebNumber = ebNumber;
        this.defectId=defectId;
        this.defectNo=defectNo;
        this.locX = locX;
        this.locY = locY;
        this.defectCd = defectCd;
    }

    maskId: String;
    ebNumber:String;
    defectId:Number;
    defectNo:String;
    techNo:String;
    locX:String;
    locY:String;
    defectCd:String;
}
