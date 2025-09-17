import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback, useEffect, memo } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  projectTitle: string;
}

const ProjectModal = memo(({ isOpen, onClose, projectId, projectTitle }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState<Set<number>>(new Set());

  // Define media items for each project
  const getProjectMedia = useCallback((projectId: string): MediaItem[] => {
    switch (projectId) {
      case 'catfish-app':
        return [
          {
            id: 'catfish-logo',
            type: 'image',
            src: '/src/assets/catfish/logo.png',
            alt: 'Catfish App Logo'
          }
        ];
      
      case 'futo-1k':
        return [
          {
            id: 'futo-logo',
            type: 'image',
            src: '/src/assets/futo1k/logo.png',
            alt: 'FUTO 1K Logo'
          }
        ];
      
      case 'railway-transportation':
        return [
          {
            id: 'naija-logo',
            type: 'image',
            src: '/src/assets/naijarails/logo.png',
            alt: 'Naija Rails Logo'
          },
          {
            id: 'naija-2',
            type: 'image',
            src: '/src/assets/naijarails/naija2.png',
            alt: 'Railway System Screenshot 2'
          },
          {
            id: 'naija-3',
            type: 'image',
            src: '/src/assets/naijarails/naija3.png',
            alt: 'Railway System Screenshot 3'
          },
          {
            id: 'naija-4',
            type: 'image',
            src: '/src/assets/naijarails/naija4.png',
            alt: 'Railway System Screenshot 4'
          },
          {
            id: 'naija-5',
            type: 'image',
            src: '/src/assets/naijarails/naija5.png',
            alt: 'Railway System Screenshot 5'
          }
        ];
      
      case 'nike-site':
        return [
          {
            id: 'nike-logo',
            type: 'image',
            src: '/src/assets/Nike/logo.png',
            alt: 'Nike App Logo'
          },
          {
            id: 'nike-img1',
            type: 'image',
            src: '/src/assets/Nike/nike1.png',
            alt: 'Nike App Screenshot 1'
          },
          {
            id: 'nike-img2',
            type: 'image',
            src: '/src/assets/Nike/nike2.png',
            alt: 'Nike App Screenshot 2'
          },
          {
            id: 'nike-img3',
            type: 'image',
            src: '/src/assets/Nike/nike3.png',
            alt: 'Nike App Screenshot 3'
          },
          {
            id: 'nike-img4',
            type: 'image',
            src: '/src/assets/Nike/nike4.png',
            alt: 'Nike App Screenshot 4'
          },
          {
            id: 'nike-img5',
            type: 'image',
            src: '/src/assets/Nike/nike5.png',
            alt: 'Nike App Screenshot 5'
          },
          {
            id: 'nike-img6',
            type: 'image',
            src: '/src/assets/Nike/nike6.png',
            alt: 'Nike App Screenshot 6'
          },
          {
            id: 'nike-img7',
            type: 'image',
            src: '/src/assets/Nike/nike7.png',
            alt: 'Nike App Screenshot 7'
          },
          {
            id: 'nike-img8',
            type: 'image',
            src: '/src/assets/Nike/nike8.png',
            alt: 'Nike App Screenshot 8'
          },
          {
            id: 'nike-vid1',
            type: 'video',
            src: '/src/assets/Nike/vid.mp4',
            alt: 'Nike App Demo Video'
          }
        ];
      
      case 'nft-marketplace':
        return [
          {
            id: 'nft-logo',
            type: 'image',
            src: '/src/assets/NFT/logo.png',
            alt: 'NFT Marketplace Logo'
          },
          {
            id: 'nft-img1',
            type: 'image',
            src: '/src/assets/NFT/img1.png',
            alt: 'NFT Marketplace Screenshot 1'
          },
          {
            id: 'nft-img2',
            type: 'image',
            src: '/src/assets/NFT/img2.png',
            alt: 'NFT Marketplace Screenshot 2'
          },
          {
            id: 'nft-img3',
            type: 'image',
            src: '/src/assets/NFT/img3.png',
            alt: 'NFT Marketplace Screenshot 3'
          },
          {
            id: 'nft-img4',
            type: 'image',
            src: '/src/assets/NFT/img4.png',
            alt: 'NFT Marketplace Screenshot 4'
          },
          {
            id: 'nft-img5',
            type: 'image',
            src: '/src/assets/NFT/img5.png',
            alt: 'NFT Marketplace Screenshot 5'
          },
          {
            id: 'nft-img6',
            type: 'image',
            src: '/src/assets/NFT/img6.png',
            alt: 'NFT Marketplace Screenshot 6'
          },
          {
            id: 'nft-img7',
            type: 'image',
            src: '/src/assets/NFT/img7.png',
            alt: 'NFT Marketplace Screenshot 7'
          },
          {
            id: 'nft-img8',
            type: 'image',
            src: '/src/assets/NFT/img8.png',
            alt: 'NFT Marketplace Screenshot 8'
          },
          {
            id: 'nft-img9',
            type: 'image',
            src: '/src/assets/NFT/img9.png',
            alt: 'NFT Marketplace Screenshot 9'
          },
          {
            id: 'nft-vid1',
            type: 'video',
            src: '/src/assets/NFT/vid1.mp4',
            alt: 'NFT Marketplace Demo Video'
          }
        ];
      
      default:
        return [];
    }
  }, []);

  // Load media items when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const items = getProjectMedia(projectId);
      setMediaItems(items);
      setCurrentIndex(0);
      setLoadedItems(new Set());
      setIsLoading(false);
    }
  }, [isOpen, projectId, getProjectMedia]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
  }, [mediaItems.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
  }, [mediaItems.length]);

  const handleItemLoad = useCallback((index: number) => {
    setLoadedItems(prev => new Set(prev).add(index));
  }, []);

  const currentItem = mediaItems[currentIndex];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 my-8 bg-neutral-900 rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-700">
            <h2 className="text-xl font-semibold text-white">{projectTitle} - Gallery</h2>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col h-full">
            {isLoading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
              </div>
            ) : mediaItems.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-neutral-400">No media available for this project.</p>
              </div>
            ) : (
              <>
                {/* Media Display */}
                <div className="flex-1 flex items-center justify-center p-4 bg-neutral-800/50">
                  <div className="relative w-full h-full max-w-4xl">
                    {currentItem && (
                      <MediaDisplay
                        item={currentItem}
                        index={currentIndex}
                        onLoad={() => handleItemLoad(currentIndex)}
                        isLoaded={loadedItems.has(currentIndex)}
                      />
                    )}
                    
                    {/* Navigation Arrows */}
                    {mediaItems.length > 1 && (
                      <>
                        <button
                          onClick={goToPrevious}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                          aria-label="Previous media"
                        >
                          <FaChevronLeft size={16} />
                        </button>
                        <button
                          onClick={goToNext}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                          aria-label="Next media"
                        >
                          <FaChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                {mediaItems.length > 1 && (
                  <div className="p-4 border-t border-neutral-700">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {mediaItems.map((item, index) => (
                        <button
                          key={item.id}
                          onClick={() => setCurrentIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentIndex
                              ? 'border-purple-500 ring-2 ring-purple-500/20'
                              : 'border-neutral-600 hover:border-neutral-500'
                          }`}
                        >
                          <Thumbnail item={item} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Counter */}
                {mediaItems.length > 1 && (
                  <div className="absolute top-20 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {mediaItems.length}
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

ProjectModal.displayName = 'ProjectModal';

// Media Display Component
const MediaDisplay = memo(({ 
  item, 
  index, 
  onLoad, 
  isLoaded 
}: { 
  item: MediaItem; 
  index: number; 
  onLoad: () => void; 
  isLoaded: boolean;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (item.type === 'video' && videoRef && isLoaded) {
      videoRef.play().then(() => setIsPlaying(true));
    }
  }, [item.type, videoRef, isLoaded]);

  const handleVideoClick = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
        setIsPlaying(false);
      } else {
        videoRef.play().then(() => setIsPlaying(true));
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      )}
      
      {item.type === 'image' ? (
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
          onLoad={onLoad}
          loading="lazy"
        />
      ) : (
        <div className="relative mx-auto w-full h-full">
          <motion.video
            ref={setVideoRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={item.src}
            className="max-w-full max-h-full object-contain rounded-lg cursor-pointer"
            onClick={handleVideoClick}
            onLoadedData={onLoad}
            onEnded={handleVideoEnd}
            loop
            muted
            playsInline
          />
          
          {/* Video Controls Overlay */}
          <button
            onClick={handleVideoClick}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-lg"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {!isPlaying && (
              <div className="bg-black/50 rounded-full p-4">
                <FaPlay className="text-white" size={24} />
              </div>
            )}
          </button>
          
          {isPlaying && (
            <div className="absolute bottom-4 left-4 bg-black/50 rounded-full p-2">
              <FaPause className="text-white" size={16} />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

MediaDisplay.displayName = 'MediaDisplay';

// Thumbnail Component
const Thumbnail = memo(({ item }: { item: MediaItem }) => {
  return (
    <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-neutral-600 flex items-center justify-center">
          <FaPlay className="text-white" size={12} />
        </div>
      )}
    </div>
  );
});

Thumbnail.displayName = 'Thumbnail';

export default ProjectModal;
