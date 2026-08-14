import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Footer and WhatsAppButton used to be `dynamic()` imports. Both are server
 * components that appear on every page, so lazy-loading them only bought an
 * extra request and a late-arriving footer. Static imports inline them into
 * the initial HTML instead.
 */
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
