import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://sfinmbmlfkisfhdewcvk.supabase.co";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmaW5tYm1sZmtpc2ZoZGV3Y3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MDYxMzUsImV4cCI6MjA1NTk4MjEzNX0.6J0vaM7ClDMes8pUhg0FHsyjVzFlOLlLQnKMaVSW_E0";

const supabase=createClient(supabaseUrl, supabaseAnonKey);

export default supabase;