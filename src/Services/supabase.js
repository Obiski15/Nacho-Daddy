import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ljowzatupwurabzfrgfd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqb3d6YXR1cHd1cmFiemZyZ2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MTg5OTUsImV4cCI6MjAyMDA5NDk5NX0.GWzaI0JBR2Z2PUZvDiEIeCMggRoEgNwVIoXcfXxiMmE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
