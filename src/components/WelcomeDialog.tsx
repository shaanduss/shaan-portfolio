import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function WelcomeDialog() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 2400);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const dialogVariants: Variants = {
    hidden: { scale: 0.92, opacity: 0, y: 8 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 24 },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      y: -4,
      transition: { duration: 0.25 },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="welcome-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            key="welcome-dialog"
            className="relative mx-4 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* subtle accent glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
            />

            <div className="relative flex flex-col items-start gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Welcome
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-card-foreground">
                Hey, I'm Shaan 👋
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Glad you're here. Take a look around — projects, experiences,
                and a few things I've been building lately.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
