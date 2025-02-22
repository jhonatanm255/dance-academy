import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ayseshwkauowbimrhpbr.supabase.co"; // URL de tu proyecto
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5c2VzaHdrYXVvd2JpbXJocGJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNTMzMjksImV4cCI6MjA1NTcyOTMyOX0.baIuWcvz6WV61Krxsr8Grj2Nu0lGVxgjRU-K833t2K8"; // Clave pública de tu proyecto
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


// PENDIENTE POR REALIZAR ENCRIPTACION DE INFORMACION CON .ENV