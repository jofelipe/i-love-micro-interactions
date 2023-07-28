import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

type AnimateOnScrollProps = {
  children: React.ReactNode;
};

export default function AnimateOnScroll({ children }: AnimateOnScrollProps) {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 45 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
}
