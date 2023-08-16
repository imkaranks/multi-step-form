import React from 'react';
import { useLocation } from 'react-router-dom';
import Step from './Step';
import { motion } from "framer-motion";
import { enterSideway } from "../utils/variants";

function Sidebar() {
  const { pathname } = useLocation();

  const styles = {
    '--mobile': 'url(/bg-sidebar-mobile.svg)',
    '--desktop': 'url(/bg-sidebar-desktop.svg)'
  }

  return (
    <motion.aside
      className='bg-[image:var(--mobile)] bg-cover bg-bottom bg-no-repeat pt-8 pb-24 sm:bg-[image:var(--desktop)] sm:p-4 sm:flex-[0.3] sm:rounded-xl'
      style={styles}
      variants={enterSideway}
      initial="hidden"
      animate="show"
    >
      <div
      >
        <motion.ol
          className='flex justify-center gap-6 sm:flex-col'
          initial="hidden"
          animate="show"
          transition={{staggerChildren: 0.1, delayChildren: 0.2}}
        >
          <motion.li variants={enterSideway}>
            <Step
              count={1}
              desc='Your info'
              isActive={pathname === '/'}
            />
          </motion.li>
          <motion.li variants={enterSideway}>
            <Step
              count={2}
              desc='Select plan'
              isActive={pathname === '/plans'}
            />
          </motion.li>
          <motion.li variants={enterSideway}>
            <Step
              count={3}
              desc='Add-ons'
              isActive={pathname === '/addons'}
            />
          </motion.li>
          <motion.li variants={enterSideway}>
            <Step
              count={4}
              desc='Summary'
              isActive={pathname === '/summary' || pathname === '/success'}
            />
          </motion.li>
        </motion.ol>
      </div>
    </motion.aside>
  );
}

export default Sidebar;