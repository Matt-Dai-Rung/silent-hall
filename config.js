/* 靜默專注殿：自架網站設定
 *
 * 沒填 Supabase 也能用，只是每個人都是單人模式（看不到彼此）。
 * anon key 本來就是給瀏覽器用的公開金鑰，可以放在這裡；
 * 千萬不要放 service_role key（那把是管理員鑰匙）。 */
window.SILENT_HALL_CONFIG = {
  supabaseUrl: 'https://yejpkwcodloynrjwyrln.supabase.co',      // 例如 https://abcdefghijk.supabase.co（Project Settings → API → Project URL）
  supabaseAnonKey: 'sb_publishable_WaPNqPx0Nnwx8L0vIiBq2Q_IFzs8NQR',  // Project Settings → API → Project API keys → Publishable key（或舊版 anon public）
  channel: 'silent-hall',
  hostHash: ''          // 主持人密語的雜湊值，用 node tools/hash.js 你的密語 產生；留空就不顯示主持人登入
};
