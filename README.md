# TechCare Patient Health Records Dashboard

A production-quality, responsive healthcare patient dashboard web application based on the Coalition Technologies Adobe XD design and Patient Data API.

## Design Reference
- **Adobe XD Design**: [TechCare Healthcare Dashboard](https://xd.adobe.com/view/3f9ab587-7536-4db8-a7dd-64d474e10867-6ac9/?hints=off)
- **API Documentation**: [Coalition Technologies Patient Data API](https://documenter.getpostman.com/view/11861104/2sA35G42ve)

---

## Key Features & Highlights

1. **Faithful Adobe XD Design Reproduction**:
   - Exact color palette: Active teal `#01F0D0`, Deep slate navy `#072635`, Background `#F6F7F8`, Lavender chart container `#F4F0FE`, and vital cards (`#E0F3FA`, `#FFE6E9`, `#FFE6E1`).
   - Authentic typographic hierarchy utilizing the **Manrope** font family across all weights.
   - Exact card radiuses (`rounded-2xl`, `rounded-[70px]`, `rounded-full`), shadow elevations, and subtle border lines.
   - High-fidelity vector SVG and PNG assets extracted directly from the design specification.

2. **Dedicated API Service (`src/services/api.ts`)**:
   - HTTP Basic Authentication (`coalition:skills-test`) executed via secure headers.
   - Data normalization ensuring type-safe access and graceful fallbacks for missing/malformed fields.
   - Dual-mode connection supporting direct endpoint querying as well as dev-server proxy (`/api/patients`) to circumvent browser CORS barriers.
   - Bundled offline fallback dataset ensuring zero downtime in sandboxed environments.

3. **Interactive Blood Pressure Visualization (`src/components/BloodPressureChart.tsx`)**:
   - Built with **Chart.js**.
   - Smooth Bezier curves for **Systolic** (`#E66FD2`) and **Diastolic** (`#8C6FE6`) pressure.
   - Dynamic time range switcher ("Last 6 months", "Last 12 months", "All history").
   - Adjacent metrics panel with custom indicator arrows (`ArrowUp.svg`, `ArrowDown.svg`) and clinical status levels.

4. **Reusable Component Architecture**:
   - `Header.tsx`: Floating pill header with doctor profile (`Dr. Jose Simmons`), active Patients tab, and mobile responsive menu.
   - `Sidebar.tsx`: Searchable patient directory with active selection highlight (`#D8FCF7`) on **Jessica Taylor**.
   - `DiagnosisHistory.tsx`: Clinical history container orchestrating chart and vital metrics.
   - `VitalCard.tsx`: Reusable component rendering Respiratory Rate, Temperature, and Heart Rate.
   - `DiagnosticList.tsx`: Diagnosis conditions table with pill header and status tags.
   - `PatientProfile.tsx`: Patient demographics, 200px circular avatar, contact data, and "Show All Information" CTA.
   - `LabResults.tsx`: Laboratory reports list with action download affordances.
   - `LoadingState.tsx` & `ErrorState.tsx`: Polished skeletons and error recovery states with retry triggers.

5. **Responsive Breakdown**:
   - **Desktop (1440px+)**: 3-column layout matching the Adobe XD template.
   - **Laptop (1024px–1280px)**: Proportional grid preserving column hierarchy.
   - **Tablet (768px–1023px)**: Stacked clinical views with horizontal scroll tables.
   - **Mobile (375px–480px)**: Vertical stack, hamburger menu, touch-friendly touch targets.

---

## Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 2. Installation
```bash
npm install
```

### 3. Environment Configuration
The application comes preconfigured with default values in `.env`:
```env
VITE_API_URL="https://fedskillstest.coalitiontechnologies.workers.dev"
VITE_API_USERNAME="coalition"
VITE_API_PASSWORD="skills-test"
```

### 4. Running the Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 5. Building for Production
```bash
npm run build
```

---

## Project Structure

```
├── public/
│   ├── assets/            # Vector SVGs and PNGs from Adobe XD design
│   └── submission.zip     # Complete submission package
├── src/
│   ├── components/
│   │   ├── BloodPressureChart.tsx
│   │   ├── DiagnosisHistory.tsx
│   │   ├── DiagnosticList.tsx
│   │   ├── ErrorState.tsx
│   │   ├── Header.tsx
│   │   ├── LabResults.tsx
│   │   ├── LoadingState.tsx
│   │   ├── PatientProfile.tsx
│   │   ├── Sidebar.tsx
│   │   ├── VitalCard.tsx
│   │   └── VitalCards.tsx
│   ├── data/
│   │   └── fallbackPatients.ts
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── patient.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
