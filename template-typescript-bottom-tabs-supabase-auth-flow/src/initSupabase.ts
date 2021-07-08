import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient("https://imdvvfcbtrfewysxgrnr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg", {
  localStorage: AsyncStorage as any,
});
