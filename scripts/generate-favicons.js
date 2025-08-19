#!/usr/bin/env node

/**
 * Favicon Generator for Abhinaya Sutra
 * 
 * This script generates favicons in various sizes and formats from a source image.
 * It creates all the necessary favicon files for different platforms and devices.
 * 
 * Requirements:
 * - Node.js 14+
 * - Sharp (will be installed as a dev dependency)
 * - A high-resolution source image (preferably 1024x1024px or larger)
 * 
 * Usage:
 * 1. Place your source image in the project root as 'logo-source.png'
 * 2. Run: node scripts/generate-favicons.js
 * 3. The generated favicons will be placed in the public/images/favicons directory
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const { promisify } = require('util');

// Promisify the rimraf function
const rimrafAsync = promisify(rimraf);

// Configuration
const CONFIG = {
  sourceFile: path.join(__dirname, '../../logo-source.png'),
  outputDir: path.join(__dirname, '../../public/images/favicons'),
  padding: 0.1, // 10% padding around the icon
  backgroundColor: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
  sizes: [
    // Standard favicon
    { width: 16, height: 16, name: 'favicon-16x16.png' },
    { width: 32, height: 32, name: 'favicon-32x32.png' },
    { width: 48, height: 48, name: 'favicon.ico' },
    
    // Apple Touch Icons
    { width: 57, height: 57, name: 'apple-touch-icon-57x57.png' },
    { width: 60, height: 60, name: 'apple-touch-icon-60x60.png' },
    { width: 72, height: 72, name: 'apple-touch-icon-72x72.png' },
    { width: 76, height: 76, name: 'apple-touch-icon-76x76.png' },
    { width: 114, height: 114, name: 'apple-touch-icon-114x114.png' },
    { width: 120, height: 120, name: 'apple-touch-icon-120x120.png' },
    { width: 144, height: 144, name: 'apple-touch-icon-144x144.png' },
    { width: 152, height: 152, name: 'apple-touch-icon-152x152.png' },
    { width: 167, height: 167, name: 'apple-touch-icon-167x167.png' },
    { width: 180, height: 180, name: 'apple-touch-icon-180x180.png' },
    { width: 1024, height: 1024, name: 'apple-touch-icon-1024x1024.png' },
    
    // Android/Chrome
    { width: 192, height: 192, name: 'android-chrome-192x192.png' },
    { width: 512, height: 512, name: 'android-chrome-512x512.png' },
    
    // Microsoft Tiles
    { width: 70, height: 70, name: 'mstile-70x70.png' },
    { width: 144, height: 144, name: 'mstile-144x144.png' },
    { width: 150, height: 150, name: 'mstile-150x150.png' },
    { width: 310, height: 150, name: 'mstile-310x150.png' },
    { width: 310, height: 310, name: 'mstile-310x310.png' },
    
    // Safari Pinned Tab
    { width: 16, height: 16, name: 'safari-pinned-tab.svg', format: 'svg' }
  ]
};

// Main function
async function generateFavicons() {
  try {
    console.log('🚀 Starting favicon generation...');
    
    // Check if source file exists
    if (!fs.existsSync(CONFIG.sourceFile)) {
      throw new Error(`Source file not found: ${CONFIG.sourceFile}\nPlease place your logo file at the root of the project as 'logo-source.png'`);
    }
    
    // Clean and create output directory
    await rimrafAsync(CONFIG.outputDir);
    await mkdirp(CONFIG.outputDir);
    console.log(`📁 Output directory: ${CONFIG.outputDir}`);
    
    // Process each size
    for (const size of CONFIG.sizes) {
      const outputPath = path.join(CONFIG.outputDir, size.name);
      
      // Calculate dimensions with padding
      const width = size.width;
      const height = size.height || size.width; // Use height if specified, otherwise use width
      const padding = Math.min(width, height) * CONFIG.padding;
      const paddedWidth = width - padding * 2;
      const paddedHeight = height - padding * 2;
      
      console.log(`🔄 Generating ${size.name} (${width}x${height})...`);
      
      // Create a sharp instance
      let image = sharp(CONFIG.sourceFile)
        .resize({
          width: Math.round(paddedWidth),
          height: Math.round(paddedHeight),
          fit: 'contain',
          background: CONFIG.backgroundColor
        })
        .flatten({ background: CONFIG.backgroundColor });
      
      // Handle different formats
      if (size.format === 'svg') {
        // For SVG, we'll just copy the source SVG if available
        if (CONFIG.sourceFile.endsWith('.svg')) {
          await fs.promises.copyFile(CONFIG.sourceFile, outputPath);
        } else {
          console.warn('⚠️  SVG generation from non-SVG source is not implemented. Skipping SVG generation.');
          continue;
        }
      } else if (size.name.endsWith('.ico')) {
        // Special handling for ICO format
        await image.png().toFile(outputPath.replace(/\.ico$/, '.png'));
        // Note: For a proper ICO file with multiple sizes, you'd need a library like 'sharp-ico'
        console.warn('⚠️  ICO generation is simplified. For a proper ICO with multiple sizes, use a dedicated ICO generator.');
      } else {
        // Default to PNG
        await image.png().toFile(outputPath);
      }
      
      console.log(`✅ Generated ${size.name}`);
    }
    
    // Generate site.webmanifest content
    const manifest = {
      name: 'Abhinaya Sutra',
      short_name: 'Abhinaya Sutra',
      description: 'Classical Dance Academy',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#9c27b0',
      icons: [
        {
          src: '/images/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/images/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    };
    
    // Write manifest file
    const manifestPath = path.join(__dirname, '../../public/site.webmanifest');
    await fs.promises.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`✅ Generated site.webmanifest`);
    
    console.log('🎉 Favicon generation complete!');
    console.log('💡 Next steps:');
    console.log('1. Add the following to your HTML <head> section:');
    console.log(`   <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png">`);
    console.log(`   <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png">`);
    console.log(`   <link rel="shortcut icon" href="/images/favicons/favicon.ico">`);
    console.log(`   <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon-180x180.png">`);
    console.log(`   <link rel="manifest" href="/site.webmanifest">`);
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

// Run the generator
generateFavicons();
