import { useState } from 'react';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';
import { useContent } from '../../content/ContentProvider';
import { ServicePole } from '../../types';
import { savePole, deleteRow } from '../api';
import { Field, Input, Textarea, Select, Button, Card } from '../ui';

const ICONS: { value: ServicePole['iconName']; label: string }[] = [
  { value: 'groups', label: 'Groupe (RP)' },
  { value: 'celebration', label: 'Fête (Événementiel)' },
  { value: 'trending_up', label: 'Croissance (Commerce)' },
  { value: 'chat_bubble', label: 'Message (WhatsApp)' },
];

export default function PolesAdmin() {
  const { poles, reload } = useContent();
  const [draft, setDraft] = useState<ServicePole | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const startNew = () =>
    setDraft({ id: `pole-${Date.now()}`, title: '', description: '', subservices: [], iconName: 'groups' });

  const save = async () => {
    if (!draft) return;
    setBusy(true);
    setError('');
    try {
      const index = poles.findIndex((p) => p.id === draft.id);
      const order = index === -1 ? poles.length + 1 : index + 1;
      await savePole(draft, order);
      await reload();
      setDraft(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (p: ServicePole) => {
    if (!confirm(`Supprimer le pôle « ${p.title} » ?`)) return;
    setBusy(true);
    try {
      await deleteRow('service_poles', p.id);
      await reload();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-xl font-black text-[#161310]">Services — Pôles d'Excellence</h2>
          <p className="text-sm text-slate-500">{poles.length} pôle(s)</p>
        </div>
        <Button variant="gold" onClick={startNew} disabled={!!draft}>
          <Plus className="w-4 h-4" /> Ajouter
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm px-4 py-2.5">{error}</div>
      )}

      {draft && (
        <Card className="border-[#f0c420] ring-1 ring-[#f0c420]/40">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#161310]">
              {poles.some((p) => p.id === draft.id) ? 'Modifier le pôle' : 'Nouveau pôle'}
            </h3>
            <button onClick={() => setDraft(null)} className="text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Titre">
              <Input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            </Field>
            <Field label="Icône">
              <Select value={draft.iconName} onChange={(e) => setDraft({ ...draft, iconName: e.target.value as ServicePole['iconName'] })}>
                {ICONS.map((i) => (
                  <option key={i.value} value={i.value}>{i.label}</option>
                ))}
              </Select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Description">
                <Textarea rows={3} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Sous-services" hint="Un par ligne">
                <Textarea
                  rows={4}
                  value={draft.subservices.join('\n')}
                  onChange={(e) => setDraft({ ...draft, subservices: e.target.value.split('\n').map((s) => s.trim()).filter(Boolean) })}
                />
              </Field>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Button variant="gold" onClick={save} disabled={busy || !draft.title.trim()}>
              <Save className="w-4 h-4" /> {busy ? 'Enregistrement…' : 'Enregistrer'}
            </Button>
            <Button variant="ghost" onClick={() => setDraft(null)} disabled={busy}>Annuler</Button>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {poles.map((p) => (
          <Card key={p.id} className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h4 className="font-bold text-[#161310]">{p.title}</h4>
              <p className="text-sm text-slate-500 line-clamp-2">{p.description}</p>
              <p className="text-xs text-slate-400 mt-1">{p.subservices.length} sous-service(s)</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button variant="ghost" onClick={() => setDraft(p)} className="!py-1.5 !px-2.5">
                <Pencil className="w-3.5 h-3.5" /> Modifier
              </Button>
              <Button variant="danger" onClick={() => remove(p)} className="!py-1.5 !px-2.5" disabled={busy}>
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
