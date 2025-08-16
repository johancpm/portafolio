export interface SkillInterface {
  category: Category;
  name: string;
  level: string;
  percent: number;
  iconUrl: string;
  percentColor: SkillColors;
}

export enum Category{
  lengs = 'Lenguajes',
  frameworks = 'Frameworks',
  tools = 'Herramientas',
}

export enum SkillColors {
 ten = 'text-red-800',
 twenty = 'text-red-700',
 thirty = 'text-red-600',
 forty = 'text-red-500',
 fifty = 'text-red-400',
  sixty = 'text-yellow-700',
  seventy = 'text-yellow-600',
  eighty = 'text-green-500',
  ninety = 'text-green-600',
  hundred = 'text-green-700',
}
