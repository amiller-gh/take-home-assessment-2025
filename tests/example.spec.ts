/**
 * POC test file! More tests should be added to validate assorted API server error 
 * responses, and exhaustive user flow tests for filtering, sorting, scrolling, 
 * clicking links, etc. 
 */
import { test, expect } from '@playwright/test'

import { getState } from '@universe/fips';

import type { IRegistrationDeadline, JSendResponse } from '../src/app/models';

function isValidUrl(string) {
  let url;
  try { url = new URL(string); }
  catch (_) { return false; }
  return url.protocol === "http:" || url.protocol === "https:";
}

test.describe('Website Should', () => {
  test('navigate to the home page', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await expect(page.locator('h1')).toContainText('Find Your State Registration')
  })
});

test.describe('API Server Should', () => {
  test('return per-state registration data', async ({ page }) => {
    const res = await fetch('http://localhost:3000/api/registration')
    const data = await res.json() as JSendResponse<IRegistrationDeadline[]>;
  
    // Our endpoint should never error as currently written.
    if (data.status === 'error') {
      throw new Error(`Unexpected API Error Response: ${data.message}`);
    }
    
    // Assert the JSend response is well formed.
    expect(data.status).toStrictEqual('success');
    expect(data.data.length).toStrictEqual(51);
  
    // Assert all of our data objects are well formed.
    for (const dat of data.data) {
      expect(getState(dat.state)).not.toBe(null);
      expect(typeof dat.reg_deadline_in_person).toBe('number');
      expect(typeof dat.reg_deadline_mail).toBe('number');
      expect(typeof dat.reg_deadline_online).toBe('number');
      if (dat.reg_url) {
        expect(isValidUrl(dat.reg_url)).toBe(true);
      }
      else {
        expect(dat.reg_url).toBeNull();
      }
      if (dat.same_day_reg) {
        expect(typeof dat.same_day_reg).toBe('string')
      }
      else {
        expect(dat.same_day_reg).toBeNull();
      }
      if (dat.description) {
        expect(typeof dat.description).toBe('string')
      }
      else {
        expect(dat.description).toBeNull();
      }
    }
  });
})
