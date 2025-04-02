import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("assert", () => {
  it('should just work', () => {
    assert.strictEqual(1, 1);
  });
});