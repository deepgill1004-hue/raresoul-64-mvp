# Seed Data Structure

MVP seed data lives in TypeScript under `data/` for the local prototype and should be exported to Supabase later.

## Files

- `data/questions.ts`: generated 108-question seed set
- `data/archetypes.ts`: 16 public animal archetype profiles

## Import Order

1. `questions`
2. `archetype_profiles`
3. `dimension_reports`
4. `love_profiles`
5. `career_profiles`
6. `stress_profiles`
7. `pairing_rules`

## Question Shape

```json
{
  "id": "Q001",
  "text": "一場活動結束後，我通常還想繼續和人交流。",
  "module": "energy",
  "dimension": "energy_orientation",
  "direction": "outer",
  "weight": 1.2,
  "reverse": true,
  "scale": 5,
  "active": true,
  "sort_order": 1
}
```

## Archetype Shape

```json
{
  "code_internal": "ENFP-like",
  "public_name": "霧海海豚型",
  "species_group": "流動共感族",
  "rarity_level": 3,
  "core_sentence": "你不是不穩定，而是天生靠靈感與連結游向新的海域。"
}
```

## Pairing Rule Shape

```json
{
  "code_a": "ENFP-like",
  "code_b": "INFJ-like",
  "relationship_archetype": "高共鳴成長型",
  "emotional_score": 88,
  "rhythm_score": 72,
  "repair_score": 80,
  "complement_score": 84,
  "high_attraction_cost": 43,
  "repair_advice": "先讓情緒被聽見，再討論下一步安排。"
}
```
