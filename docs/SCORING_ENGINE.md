# Scoring Engine v0

## Inputs

```ts
type AnswerMap = Record<string, number>; // question id to 1..5
```

Each question contains:

- `id`
- `module`
- `dimension`
- `direction`
- `weight`
- `reverse`
- `scale`

## Core Algorithm

1. Normalize each answer to 1..5.
2. If `reverse` is true, transform with `6 - value`.
3. Add `value * weight` to the matching dimension side.
4. Convert each dimension into percentages.
5. Pick the dominant side for the four core dimensions.
6. Map the four dominant sides to an internal code.
7. Map the internal code to the public animal archetype.
8. Compute personality intensity as the average of dominant percentages.
9. Compute eight radar metrics from related module and dimension scores.
10. Return preview and report payloads.

## Output

```ts
{
  reportId: string;
  internalCode: "ENFP-like";
  archetype: {...};
  dimensions: {...};
  radar: [...];
  intensity: 75;
  unlocked: false;
}
```

## Guardrails

- Never show the internal code as the main frontend result label.
- Use animal archetype names and RareSoul dimension labels.
- Do not produce medical, hiring, or absolute compatibility claims.
