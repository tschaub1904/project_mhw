import { SkillRank } from '../models/skill';

export interface Decoration {
    id: number,
    slug: string,
    name: string,
    rarity: number,
    slot: number,
    skills: SkillRank[]
} 