import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://camdqsnlbznxfttsnhph.supabase.co';
const SUPABASE_kEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhbWRxc25sYnpueGZ0dHNuaHBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyOTk4NDYsImV4cCI6MjA3Mzg3NTg0Nn0.OMTZz3AjSoyNtwJvKkV9CuH5adEh0yYvtZ0fP-Tifvs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_kEY);