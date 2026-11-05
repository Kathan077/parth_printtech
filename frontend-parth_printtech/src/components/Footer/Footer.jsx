"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || process.env.NEXT_PUBLIC_API_URL || (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "http://localhost:5000/api" : "https://parth-printtech.onrender.com/api");

const defaultSocials = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com"
};

const Footer = ({ socials: propSocials }) => {
  const [socials, setSocials] = useState(propSocials || defaultSocials);

  useEffect(() => {
    if (propSocials) {
      setSocials(propSocials);
      return;
    }
    let isMounted = true;
    async function fetchSocials() {
      try {
        const res = await fetch(`${API_BASE}/contact`);
        if (res.ok) {
          const json = await res.json();
          if (json?.success && json?.data?.socials && isMounted) {
            setSocials(prev => ({
              ...prev,
              ...json.data.socials
            }));
          }
        }
      } catch (err) {
        // Retain default socials on network error
      }
    }
    fetchSocials();
    return () => {
      isMounted = false;
    };
  }, [propSocials]);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Main Grid */}
        <div className={styles.grid}>

          {/* Column 1: Brand details with Logo image */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/logo/world_map_blueprint.png"
                  alt="Parth Printtech Logo"
                  className={styles.logoImageRaw}
                  width={260}
                  height={52}
                  priority
                />
              </Link>
            </div>
            <p className={styles.brandDesc}>
              Architects of premium shrink sleeve labels and high-performance packaging films. Delivering custom PVC, PETG, BOPP, and Heat Transfer Labels globally.
            </p>
            {/* CMYK Registration marks decoration */}
            <div className={styles.registrationMarks}>
              <span className={`${styles.regDot} ${styles.cyan}`}></span>
              <span className={`${styles.regDot} ${styles.magenta}`}></span>
              <span className={`${styles.regDot} ${styles.yellow}`}></span>
              <span className={`${styles.regDot} ${styles.key}`}></span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>About Us</Link>
              </li>
              <li>
                <Link href="/products" className={styles.link}>Products</Link>
              </li>
              <li>
                <Link href="/career" className={styles.link}>Careers</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>Talk to Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products / Offerings */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linksList}>
              <li>
                <span className={styles.staticLink}>PVC Shrink Sleeves</span>
              </li>
              <li>
                <span className={styles.staticLink}>PETG Shrink Sleeves</span>
              </li>
              <li>
                <span className={styles.staticLink}>BOPP Wrap-Around Labels</span>
              </li>
              <li>
                <span className={styles.staticLink}>Heat Transfer Labels (HTL)</span>
              </li>
              <li>
                <span className={styles.staticLink}>Plain PVC Shrink Film</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className={styles.phoneGroup}>
                  <a href="tel:+919978888056" className={styles.contactLink}>+91 99788 88056</a>
                  <a href="tel:+919724777606" className={styles.contactLink}>+91 97247 77606</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@parthprinttech.com" className={styles.contactLink}>info@parthprinttech.com</a>
              </li>
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className={styles.contactText}>
                  47/8, G.I.D.C., Kalol - 382725 (N.G.), Dist. Gandhinagar, Gujarat, India
                </span>
              </li>
            </ul>

            {/* Distinct Dedicated For Sales Box */}
            <div className={styles.salesBox}>
              <span className={styles.salesBadge}>For Sales</span>
              <div className={styles.salesLinks}>
                <a href="tel:+919978870089" className={styles.salesLink}>
                  <svg className={styles.salesIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 99788 70089
                </a>
                <a href="mailto:sales@parthprinttech.com" className={styles.salesLink}>
                  <svg className={styles.salesIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  sales@parthprinttech.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <hr className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyText}>
            © {new Date().getFullYear()} Parth Printtech LLP. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className={styles.socialRow}>
            <a href={socials?.instagram || "https://instagram.com"} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href={socials?.facebook || "https://facebook.com"} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href={socials?.youtube || "https://youtube.com"} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            <a href={socials?.linkedin || "https://linkedin.com"} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <div className={styles.bottomLinks}>
            <a href="https://sanmora.in" target="_blank" rel="noopener noreferrer" className={styles.bottomLink}>Developed by sanmora.in</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
