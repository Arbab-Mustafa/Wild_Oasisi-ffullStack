import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ibryuknrnjnrdzqomrif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlicnl1a25ybmpucmR6cW9tcmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5MzA3NDAsImV4cCI6MjAxNjUwNjc0MH0.gZ1RkvoIt8F5bVfX9osv_wPCRiDWqLTvIn1QfBzDgS8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
