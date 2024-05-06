'use client'
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Button from "../core/Button"
import { motion } from 'framer-motion'

const ProjectSection = () => {
  const [plainText, setPlainText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const encryptDecrypt = () => {
    // Inisialisasi S-box
    let S = [];
    for (let i = 0; i < 256; i++) {
      S[i] = i;
    }

    // Kunci inisialisasi (Key-scheduling algorithm)
    let j = 0;
    for (let i = 0; i < 256; i++) {
      j = (j + S[i] + secretKey.charCodeAt(i % secretKey.length)) % 256;
      // Swap
      let temp = S[i];
      S[i] = S[j];
      S[j] = temp;
    }

    // Pseudorandom Generation Algorithm (PRGA)
    j = 0;
    let i = 0;
    let keyStream = [];
    for (let n = 0; n < plainText.length; n++) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256;
      // Swap
      let temp = S[i];
      S[i] = S[j];
      S[j] = temp;
      let t = (S[i] + S[j]) % 256;
      keyStream[n] = S[t];
    }

    // Panggil fungsi enkripsi dekripsi
    enkripsiDekripsi(plainText, keyStream);
  }

  // Fungsi enkripsi dekripsi
  const enkripsiDekripsi = (pesan, keyStream) => {
    let hasil = [];
    // Operasi XOR antara arrayBinary dan keyStream
    for (let i = 0; i < pesan.length; i++) {
      // Operasi XOR
      let result = pesan.charCodeAt(i) ^ keyStream[i];
      // Konversi hasil XOR kembali ke string
      hasil.push(String.fromCharCode(result));
    }
    setEncryptedText(hasil.join(""));
  }

  return (
    <section id="project">
      <div className="w-full h-full flex flex-col justify-center items-center bg-theme-dark text-white">
        <motion.div 
          className="text-indigo-500 text-[32px] font-semibold mb-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >Enkripsi Data Algoritma RC4</motion.div>

        <div className="min-w-[500px] my-8">
          <form className="space-y-10">
            <Textarea 
              placeholder="Silahkan Masukan Plain Text" 
              value={plainText} 
              onChange={(e) => setPlainText(e.target.value)} 
            />
            <Input 
              type="text" 
              placeholder="Masukan secret key anda" 
              value={secretKey} 
              onChange={(e) => setSecretKey(e.target.value)} 
            />
            <Textarea 
              placeholder="Hasil Algoritma RC4" 
              value={encryptedText} 
              readOnly 
            />
            <button type="button" className="max-w-[170px] rounded-md px-6 py-3 place-content-center text-[#ffffff] bg-theme-primary" onClick={encryptDecrypt}>
              Enkripsi Dekripsi
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
