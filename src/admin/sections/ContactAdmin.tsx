import { useState } from 'react';
import { Save, KeyRound } from 'lucide-react';
import { useContent } from '../../content/ContentProvider';
import { saveSettings, changePassword } from '../api';
import { Field, Input, Button, Card } from '../ui';

export default function ContactAdmin() {
  const { settings, reload } = useContent();
  const [whatsapp, setWhatsapp] = useState(settings.whatsapp);
  const [email, setEmail] = useState(settings.email);
  const [phone, setPhone] = useState(settings.phone);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const saveContact = async () => {
    setBusy(true);
    setError('');
    setMsg('');
    try {
      await saveSettings({ whatsapp: whatsapp.trim(), email: email.trim(), phone: phone.trim() });
      await reload();
      setMsg('Coordonnées mises à jour ✓');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  // Mot de passe
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [pwBusy, setPwBusy] = useState(false);
  const [pwMsg, setPwMsg] = useState('');
  const [pwErr, setPwErr] = useState('');

  const savePassword = async () => {
    setPwErr('');
    setPwMsg('');
    if (pw1.length < 4) return setPwErr('Mot de passe trop court (min 4 caractères).');
    if (pw1 !== pw2) return setPwErr('Les deux mots de passe ne correspondent pas.');
    setPwBusy(true);
    try {
      await changePassword(pw1);
      setPwMsg('Mot de passe changé ✓ — il sera demandé à la prochaine connexion.');
      setPw1('');
      setPw2('');
    } catch (e: any) {
      setPwErr(e.message);
    } finally {
      setPwBusy(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="font-display text-xl font-black text-[#161310]">Contact &amp; Paramètres</h2>
        <p className="text-sm text-slate-500">Coordonnées affichées sur tout le site</p>
      </div>

      <Card className="space-y-4">
        <h3 className="font-bold text-[#161310]">Coordonnées</h3>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm px-4 py-2.5">{error}</div>}
        {msg && <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-sm px-4 py-2.5">{msg}</div>}
        <Field label="Numéro WhatsApp" hint="Format international sans + ni espaces, ex: 242066446257">
          <Input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        </Field>
        <Field label="Téléphone affiché" hint="Tel qu'il apparaît à l'écran, ex: +242 06 644 62 57">
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <Field label="Email">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Button variant="gold" onClick={saveContact} disabled={busy}>
          <Save className="w-4 h-4" /> {busy ? 'Enregistrement…' : 'Enregistrer les coordonnées'}
        </Button>
      </Card>

      <Card className="space-y-4">
        <h3 className="font-bold text-[#161310] flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-[#705d00]" /> Sécurité — mot de passe admin
        </h3>
        {pwErr && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm px-4 py-2.5">{pwErr}</div>}
        {pwMsg && <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-sm px-4 py-2.5">{pwMsg}</div>}
        <Field label="Nouveau mot de passe">
          <Input type="password" value={pw1} onChange={(e) => setPw1(e.target.value)} />
        </Field>
        <Field label="Confirmer le mot de passe">
          <Input type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
        </Field>
        <Button variant="dark" onClick={savePassword} disabled={pwBusy}>
          <KeyRound className="w-4 h-4" /> {pwBusy ? 'Changement…' : 'Changer le mot de passe'}
        </Button>
      </Card>
    </div>
  );
}
