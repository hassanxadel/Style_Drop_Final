/**
 * SizePredictor Component
 * 
 * Smart size recommendation tool based on user measurements
 * Shopify-ready: Pure JS logic, no external dependencies
 */

import { useState } from 'react';
import { X, Zap, TrendingUp } from 'lucide-react';

interface SizePredictorProps {
  isOpen: boolean;
  onClose: () => void;
  currentProduct?: {
    category?: 'tops' | 'pants';
    availableSizes?: string[];
  };
}

interface SizeInputs {
  category: 'tops' | 'pants';
  height: number;
  weight: number;
  shoulderWidth?: number;
  waistSize?: number;
}

// Portable calculation logic for Shopify conversion
const calculateSize = (inputs: SizeInputs): string => {
  const { category, height, weight, shoulderWidth, waistSize } = inputs;
  
  if (category === 'tops') {
    const bmi = weight / ((height / 100) ** 2);
    
    if (height < 165 && weight < 55 && (shoulderWidth || 0) < 40) {
      return 'XS';
    }
    if (height < 170 && weight < 65 && bmi < 23) {
      return 'S';
    }
    if (height > 178 || weight > 80 || bmi > 26) {
      return 'L';
    }
    if (height > 185 || weight > 90 || (shoulderWidth || 0) > 48) {
      return 'XL';
    }
    return 'M';
  } else {
    const bmi = weight / ((height / 100) ** 2);
    
    if (height < 165 && (waistSize || 0) < 76 && weight < 55) {
      return 'XS';
    }
    if ((waistSize || 0) < 81 && bmi < 23 && height < 175) {
      return 'S';
    }
    if ((waistSize || 0) > 91 || weight > 85 || bmi > 26) {
      return 'L';
    }
    if ((waistSize || 0) > 101 || weight > 95 || height > 190) {
      return 'XL';
    }
    return 'M';
  }
};

const SizePredictor = ({ isOpen, onClose, currentProduct }: SizePredictorProps) => {
  const [category, setCategory] = useState<'tops' | 'pants'>(
    currentProduct?.category || 'tops'
  );
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [shoulderWidth, setShoulderWidth] = useState<string>('');
  const [waistSize, setWaistSize] = useState<string>('');
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const handleCalculate = () => {
    const inputs: SizeInputs = {
      category,
      height: parseFloat(height),
      weight: parseFloat(weight),
      shoulderWidth: category === 'tops' ? parseFloat(shoulderWidth) : undefined,
      waistSize: category === 'pants' ? parseFloat(waistSize) : undefined,
    };

    if (!inputs.height || !inputs.weight) {
      alert('Please fill in all required fields');
      return;
    }

    const size = calculateSize(inputs);
    setRecommendedSize(size);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setShoulderWidth('');
    setWaistSize('');
    setRecommendedSize(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-lg bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Zap size={16} className="text-accent sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg sm:text-2xl text-[#0D0D0D]">Find Your Perfect Size</h2>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Get personalized size recommendation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
          {/* Category Toggle */}
          <div>
            <label className="text-sm font-semibold mb-3 block">Product Category</label>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setCategory('tops');
                  handleReset();
                }}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all ${
                  category === 'tops'
                    ? 'bg-[#0D0D0D] text-white'
                    : 'border border-border text-[#0D0D0D] hover:border-[#0D0D0D]'
                }`}
              >
                TOPS
              </button>
              <button
                onClick={() => {
                  setCategory('pants');
                  handleReset();
                }}
                className={`flex-1 px-4 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all ${
                  category === 'pants'
                    ? 'bg-[#0D0D0D] text-white'
                    : 'border border-border text-[#0D0D0D] hover:border-[#0D0D0D]'
                }`}
              >
                PANTS
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Height */}
            <div>
              <label htmlFor="height" className="text-sm font-semibold mb-2 block">
                Height <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-accent focus:outline-none text-sm"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  cm
                </span>
              </div>
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="text-sm font-semibold mb-2 block">
                Weight <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:border-accent focus:outline-none text-sm"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  kg
                </span>
              </div>
            </div>

            {/* Conditional: Shoulder Width (Tops) */}
            {category === 'tops' && (
              <div>
                <label htmlFor="shoulder" className="text-sm font-semibold mb-2 block">
                  Shoulder Width <span className="text-muted-foreground text-xs">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    id="shoulder"
                    type="number"
                    value={shoulderWidth}
                    onChange={(e) => setShoulderWidth(e.target.value)}
                    placeholder="44"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:border-accent focus:outline-none text-sm"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    cm
                  </span>
                </div>
              </div>
            )}

            {/* Conditional: Waist Size (Pants) */}
            {category === 'pants' && (
              <div>
                <label htmlFor="waist" className="text-sm font-semibold mb-2 block">
                  Waist Size <span className="text-muted-foreground text-xs">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    id="waist"
                    type="number"
                    value={waistSize}
                    onChange={(e) => setWaistSize(e.target.value)}
                    placeholder="86"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:border-accent focus:outline-none text-sm"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    cm
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Result Display */}
          {recommendedSize && (
            <div className="bg-accent/10 rounded-xl p-5 border border-accent/20 animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Recommended Size
                  </p>
                  <p className="font-display text-3xl text-[#0D0D0D]">{recommendedSize}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Based on your measurements, we recommend size <strong>{recommendedSize}</strong>. 
                This is an estimate - individual fit may vary by brand and style.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-border flex gap-2 sm:gap-3">
          {recommendedSize ? (
            <>
              <button
                onClick={handleReset}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border border-border rounded-full text-xs sm:text-sm font-semibold hover:border-[#0D0D0D] transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                Got It!
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onClose}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border border-border rounded-full text-xs sm:text-sm font-semibold hover:border-[#0D0D0D] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCalculate}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                <Zap size={14} className="sm:w-4 sm:h-4" />
                Calculate Size
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SizePredictor;
