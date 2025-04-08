// login_page.ts
// src/pages/pmtool

import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  // 1. identifikace prvků a dalších properties
  private readonly page: Page;
  private readonly url: string = "https://tredgate.com/pmtool/";
  private readonly userInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  // 2. contructor ve kterém nastavíme jednotlivé lokátory
  constructor(page: Page) {
    this.page = page;
    this.userInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator(".btn");
  }

  // 3. ovládací metody
  // Při vytváření metod doporčím přístup začít s atomyckými s jedním krokem a pak až vytvářet sdržující metody
  // Například: typeUsername - jeden krok, login - sdružení více kroků
  // Atomické metody používáme, když danou funkcionalitu testujeme a sdružující metody např pro preconditions jiiných testů

  // ! Testovací data NIKDY nedáváme do metod, ale dáváme je do parametru
  async typeUsername(username: string) {
    await this.userInput.fill(username);
  }

  async openPmtool() {
    await this.page.goto(this.url);
  }
  async typePassword(password: string) {
    await this.passwordInput.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginButton();
  }
}
