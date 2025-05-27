import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public/images/gallery')
    const files = fs.readdirSync(galleryPath)
    
    // Filter for image files and create full paths
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `/images/gallery/${file}`)
    
    return NextResponse.json({ images })
  } catch (error) {
    console.error('Error reading gallery directory:', error)
    return NextResponse.json({ error: 'Failed to read gallery' }, { status: 500 })
  }
} 