## 1. UI Kit Selection

### Comparison Table

| Library             | Pros                                                                                                    | Cons                                                      | Example Users             |
| ------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------- |
| **Angular Material** | ✅ Official Google support <br> ✅ Mature, stable, widely used <br> ✅ Excellent documentation & tutorials <br> ✅ Accessibility (a11y) built-in <br> ✅ Easy theming (dark/light/custom) | ❌ Limited to “basic” components only (cards, forms, etc.) <br> ❌ Visual style is common and less unique | Google, Enterprise apps   |
| **PrimeNG**          | ✅ Huge set of ready-to-use components (charts, data tables, pickers, etc.) <br> ✅ Built-in themes and premium templates <br> ✅ Easy to prototype with | ❌ Larger bundle size <br> ❌ Some components require paid license <br> ❌ Doesn’t always follow Angular Material design standards | PrimeTek, Community apps  |
| **NG-ZORRO (Ant Design)** | ✅ Based on Ant Design (professional, modern design system) <br> ✅ Rich component library <br> ✅ Popular in enterprise apps, especially in Asia | ❌ Documentation less polished than Angular Material <br> ❌ Ant Design look may not fit every project | Alibaba, Enterprise China |

---

### Decision & Justification (ADR)

**Chosen UI Kit: Angular Material** 🎨

- **Rationale:**
  1. **Official support** – Maintained by the Angular team with long-term stability and updates.  
  2. **Meets requirements** – Our app needs a login page, app bar, lists, detail pages, search, pagination, and simple cards. Angular Material already provides all of these.  
  3. **Accessibility and theming** – Provides WCAG-compliant components (components work with screen readers, keyboard shortcuts) with built-in accessibility and flexible theming.  
  4. **Community and ecosystem** – Large community support, countless examples on StackOverflow and tutorials make it easier for interns and new developers to learn and fix issues quickly.  

➡️ **PrimeNG** is powerful but heavier and introduces unnecessary complexity for our needs. **NG-ZORRO** is strong in design but not as aligned with Angular’s ecosystem and global usage. For a maintainable, future-proof, and simple solution, **Angular Material** is the best fit.

---

## 2. Localization (i18n) Library Selection

### Comparison Table

| Library                  | Pros                                                                                     | Cons                                                           | Example Users         |
| ------------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------- |
| **Angular built-in i18n** | ✅ Official Angular solution <br> ✅ Strong compile-time checks <br> ✅ Good for large-scale static translations | ❌ No runtime switching (requires rebuild to change language) <br> ❌ Less flexible for dynamic apps | Google, Enterprise    |
| **ngx-translate**        | ✅ Mature, widely adopted <br> ✅ Runtime language switching <br> ✅ Simple to use and easy for beginners | ❌ Legacy focus, less actively maintained for Angular 15+ <br> ❌ More boilerplate needed | Community OSS projects |
| **Transloco**            | ✅ Runtime language switching (our requirement) <br> ✅ Feature-based translations (fits Nx monorepo) <br> ✅ Lazy loading of translations <br> ✅ Actively maintained, modern API | ❌ Adds an extra dependency <br> ❌ Slightly higher learning curve compared to ngx-translate | OSS, Enterprise apps  |

---

### Decision & Justification (ADR)

**Chosen Localization Library: Transloco** 🌍

- **Rationale:**
  1. **Runtime switching** – Our app must allow users to change language (English ↔ Ukrainian) without reloading the page. Angular built-in i18n cannot do this.
  2. **Feature-based design** – Transloco lets us keep translations inside each feature library (e.g., libs/auth, libs/characters-list), which matches Nx monorepo style.  
  3. **Modern and maintained** – Fully compatible with Angular 15+ and actively updated, unlike ngx-translate which is slowly becoming legacy.  
  4. **Flexibility** – Supports lazy loading translations, storing the active language in localStorage, and live updates without page reload.  

➡️ **ngx-translate** is still popular but not ideal for modern Angular. **Angular i18n** is strong but too static for our use case. **Transloco** provides the right balance of runtime flexibility, modularity, and modern support.

---

## ✅ Final Choice

- **UI Kit:** Angular Material  
- **Localization Library:** Transloco  

This combination provides:  
- Simplicity and stability (Material components are official and future-proof).  
- Flexibility (runtime language switching with Transloco).  
- Alignment with Nx monorepo architecture (feature-based i18n and modular UI).  
