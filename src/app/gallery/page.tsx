import Image from "next/image";
import fs from "fs";
import path from "path";

type GalleryCategory = {
  name: string;
  images: string[];
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  const categories: GalleryCategory[] = [];
  let uncategorizedImages: string[] = [];

  try {
    const items = fs.readdirSync(galleryDir, { withFileTypes: true });

    // 1. Get uncategorized images (files right in public/gallery)
    uncategorizedImages = items
      .filter((item) => item.isFile() && item.name.match(/\.(jpg|jpeg|png|gif)$/i))
      .map((item) => `/gallery/${item.name}`);

    // 2. Get categorized images (files inside subfolders)
    const folders = items.filter((item) => item.isDirectory());
    for (const folder of folders) {
      const folderPath = path.join(galleryDir, folder.name);
      const folderItems = fs.readdirSync(folderPath, { withFileTypes: true });
      const imagesInFolder = folderItems
        .filter((item) => item.isFile() && item.name.match(/\.(jpg|jpeg|png|gif)$/i))
        .map((item) => `/gallery/${folder.name}/${item.name}`);

      if (imagesInFolder.length > 0) {
        categories.push({
          name: folder.name,
          images: imagesInFolder,
        });
      }
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <main className="min-h-screen bg-ocean-abyss text-on-dark pt-32 pb-20">
      <div className="max-w-[1700px] mx-auto px-5 md:px-8">
        <h1 className="text-4xl md:text-6xl font-display mb-6 text-primary-bright">Gallery</h1>
        
        <p className="text-on-dark-soft mb-12 max-w-3xl text-lg">
          Explore our collection of field work, maps, and research images. 
          <br/>
          <span className="text-sm opacity-70">(Note to Admin: To organize images into these categories, open your file explorer and drag images into the "Team", "Field Work", and "Maps and Data" folders inside `public/gallery`).</span>
        </p>

        {/* Render Categorized Images */}
        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2 text-on-dark/90">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.images.map((img, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10 group">
                  <Image 
                    src={img} 
                    alt={`${category.name} image ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="text-sm font-medium tracking-wide">View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Render Uncategorized Images (if any) */}
        {uncategorizedImages.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2 text-on-dark/90">
              Uncategorized
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uncategorizedImages.map((img, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10 group">
                  <Image 
                    src={img} 
                    alt={`Gallery image ${idx + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
