import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the taskType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'task');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Task');
        expect(type?.schema.length).toBe(6);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('projectId');
        expect(fieldNames).toContain('priority');
        expect(fieldNames).toContain('targetDate');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('isTop3Today');
    });

    it('should define the dailySprintType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'dailySprint');
        expect(type).toBeDefined();
        expect(type?.name).toBe('DailySprint');
        expect(type?.schema.length).toBe(2);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('date');
        expect(fieldNames).toContain('notes');
    });
});
