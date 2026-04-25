# RareSoul 16｜稀有物種人格圖鑑

> Source of truth rebuilt from the latest shared PRD. The local PRD file was empty when this MVP started, so this file records the working scope used by the project.

## Product Positioning

RareSoul 16 is a self-owned personality archetype product. It translates user tendencies into animal archetypes, relationship patterns, career patterns, stress patterns, and couple compatibility reports.

Frontend copy must not position the product as an official MBTI, Myers-Briggs, medical, recruiting, or diagnostic tool.

## Public Naming

Use RareSoul language on the frontend:

| Internal concept | Public language |
| --- | --- |
| E / I | 外放能量 / 內聚能量 |
| S / N | 實感觀察 / 趨勢直覺 |
| T / F | 邏輯決策 / 情感價值 |
| J / P | 結構節奏 / 流動節奏 |

Internal codes may use `ENFP-like`, `INTJ-like`, and similar labels, but public result names must use animal archetypes.

## MVP Pages

1. Homepage
2. Quiz page with 108 questions
3. Completion / result preview page
4. Paywall / full report page with locked and unlocked states
5. Couple invite placeholder
6. Admin data structure placeholder

## Quiz

- 108 questions
- One question per screen
- 5-point scale
- Back navigation
- Progress indicator
- Local autosave for MVP
- Scoring engine produces preview and full report JSON

## Scoring

Core dimensions:

- energy_orientation: outer / inner
- information_style: sensing / intuitive
- decision_core: logic / value
- life_rhythm: structure / flow

Every answer contributes weighted points to one side of a dimension. Reverse questions use `6 - answer`.

The stronger side of each core dimension forms an internal code:

- outer + intuitive + value + flow = `ENFP-like`
- inner + intuitive + logic + structure = `INTJ-like`

The frontend maps that code to an animal archetype.

## MVP Business Flow

```text
Homepage
↓
108-question quiz
↓
Result preview
↓
Locked full report
↓
Unlock placeholder
↓
Full report
↓
Couple invite placeholder
```

## V1 Data Requirements

- 108 question seed records
- 16 archetype records
- Dimension report copy structure
- Love report copy structure
- Career report copy structure
- Pairing rule structure
- Supabase schema migration
- Scoring engine initial spec

## Disclaimer

RareSoul 16 是一套自有的人格原型與行為風格測驗，參考人格心理學、行為偏好、關係互動與職場適應模式設計。本測驗並非官方 MBTI、Myers-Briggs Type Indicator 或 The Myers-Briggs Company 之產品，亦未與其有任何授權、合作或背書關係。測驗結果僅供自我理解、關係溝通與職場探索參考，不作為心理診斷、醫療、招募或人事決策依據。
