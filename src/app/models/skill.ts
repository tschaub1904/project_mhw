export interface Skill {
  id: number,
  slug: string,
  name: string,
  description: string,
  ranks: SkillRank[]
}

export interface SkillRank {
    id: number,
    slug: string,
    level: number,
    description: string,
    skill: number,
    skillName: string,
    modifiers: SkillRankModifiers
  }

  export interface SkillRankModifiers {
    affinity: number,
    attack: number,
    damageFire: number,
    damageWater: number,
    damageIce: number,
    damageThunder: number,
    damageDragon: number,
    defense: number,
    health: number,
    sharpnessBonus: number,
    resistAll: number,
    resistFire: number,
    resistWater: number,
    resistIce: number,
    resistThunder: number,
    resistDragon: number
  }