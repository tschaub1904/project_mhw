import { SkillRank } from '../services/charms/charm.service';

export interface Decoration {
    id: number,
    slug: string,
    name: string,
    rarity: number,
    slot: number,
    skills: SkillRank[]
} 