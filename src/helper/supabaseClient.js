import { createClient } from "@supabase/supabase-js";

const supabaseUrl="https://nrzmdkgjslqekjekdmge.supabase.co";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yem1ka2dqc2xxZWtqZWtkbWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMzYwNDQsImV4cCI6MjA2ODkxMjA0NH0.E4GMlrpFp_07hmKEAoGMWYc6z3f0y8oKFhT7-v47TEE";

const supabase=createClient(supabaseUrl, supabaseAnonKey);

export default supabase;