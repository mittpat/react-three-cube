# React Three Fiber - Spinning Cube

A simple spinning cube built with React Three Fiber, ready to deploy to Azure Static Web Apps.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser

## Build

```bash
npm run build
```

This creates a `dist` folder with the production build.

## Deploy to Azure Static Web Apps

### Prerequisites
- Azure subscription
- GitHub account

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/react-three-cube.git
   git branch -M main
   git push -u origin main
   ```

2. **Create Static Web App in Azure Portal**
   - Go to Azure Portal → Create a resource
   - Search for "Static Web Apps"
   - Click Create
   - Fill in details:
     - **Name**: `react-three-cube` (or your preferred name)
     - **Region**: Choose your region
     - **GitHub details**: Authorize and select your repo
     - **Build presets**: React
     - **App location**: `/` (root)
     - **Output location**: `dist`

3. **Azure will automatically**
   - Create a GitHub Actions workflow
   - Build and deploy on each push
   - Provide you with a URL to access your app

That's it! Your cube will be live.

## Features

- ✨ Spinning cube with auto-rotation
- 🎮 Orbit controls (mouse interaction)
- 💡 Ambient and point lighting
- 📱 Fully responsive
- ⚡ Built with Vite for fast builds

## Customization

Edit `src/components/SpinningCube.jsx` to change:
- Cube color: modify the `color` prop
- Rotation speed: adjust the values in `useFrame`
- Size: change the `args` in `boxGeometry`
