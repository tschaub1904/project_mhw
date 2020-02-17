export interface Attack {
    display: number,
    raw: number
}

export interface WeaponElement{
    type: string,
    damage: number,
    hidden: boolean
}

export interface WeaponSharpness{
    red: number,
    orange: number,
    yellow: number,
    green: number,
    blue: number,
    white: number,
    purple: number
}

export interface WeaponAttributes{
    affinity: number,
    defense: number
}