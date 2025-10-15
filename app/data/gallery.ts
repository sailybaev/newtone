import fs from 'fs'
import path from 'path'

export function getGalleryImages() {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery')
  const files = fs.readdirSync(galleryPath)
  
  return files
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(file => `/images/gallery/${file}`)
}

// Pre-compute the gallery images at build time
export const galleryImages = getGalleryImages() 