
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function WelcomeDialog() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const zoomVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <DialogContent forceMount>
        <AnimatePresence>
          {open && (
            <motion.div
              key="dialog-motion-div"
              className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg text-center"
              variants={zoomVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <DialogTitle className="text-2xl font-bold mb-4 text-gray-900">
                Welcome to My Portfolio!
              </DialogTitle>
              <DialogDescription className="text-gray-700 mb-6">
                I'm glad you're here. Explore my projects and let's create something amazing together.
              </DialogDescription>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </div>
  </Dialog>
  );
}
