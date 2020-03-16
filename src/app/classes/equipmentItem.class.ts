export abstract class EquipmentItem{
    public name: string = "none";
    public id: number = -1;

    abstract getStats();
    abstract getName();
}