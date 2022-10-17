import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "../../components";

export default function ContentWarpper({ content: Content, page: Page }) {
  const pageTransition = {
    ease: "anticipate",
    type: "tween",
  };

  return (
    <>
      <Box bg="#eee" height="100vh" w="100vw">
        {window.localStorage.isLoggedIn ? <Navbar page={Page} /> : ""}
        <Box h={`${window.localStorage.isLoggedIn ? "90vh" : ""}`}>
          <Box bg="white" h="100%" shadow="md" overflowY="auto">
            <motion.div
              initial={{ opacity: 0, y: "1%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "1%" }}
              transition={pageTransition}
            >
              <Content />
            </motion.div>
          </Box>
        </Box>
        {window.localStorage.isLoggedIn ? <Footer /> : ""}
      </Box>
    </>
  );
}
