import { useState } from 'react';
import { Pencil, Save, X } from 'lucide-react';
import { useContent } from '../../content/ContentProvider';
import { FixedPriceEvent } from '../../types';
import { saveEvent } from '../api';
import { Field, Input, Textarea, Button, Card } from '../ui';

// Les 4 événements occupent une mise en page fixe (mariage, anniversaire,
// pro, gala) : on modifie leur contenu, sans ajout/suppression.
export default function EventsAdmin() {
  const { events, reload } = useContent();
  const [draft, setDraft] = useState<FixedPriceEvent | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const save = async () => {
    if (!draft) return;
    setBusy(true);
    setError('');
    try {
      const order = events.findIndex((e) => e.id === draft.id) + 1;
      await saveEvent(draft, order || 1);
      await reload();
      setDraft(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-xl font-black text-[#161310]">Services — Événements &amp; Tarifs</h2>
        <p className="text-sm text-slate-500">{events.length} offre(s) événementielle(s)</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm px-4 py-2.5">{error}</div>
      )}

      {draft && (
        <Card className="border-[#f0c420] ring-1 ring-[#f0c420]/40">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#161310]">Modifier : {draft.title}</h3>
            <button onClick={() => setDraft(null)} className="text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Titre">
              <Input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} />
            </Field>
            <Field label="Prix (nombre)">
              <Input type="number" value={draft.price} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} />
            </Field>
            <Field label="Prix affiché" hint="Ex: 250,000 frs">
              <Input value={draft.formattedPrice} onChange={(e) => setDraft({ ...draft, formattedPrice: e.target.value })} />
            </Field>
            <Field label="Préfixe prix" hint="Au-dessus du prix (ex: À PARTIR DE)">
              <Input value={draft.pricePrefix ?? ''} onChange={(e) => setDraft({ ...draft, pricePrefix: e.target.value })} />
            </Field>
            <Field label="Suffixe prix" hint="Sous le prix (ex: Tarif Standard)">
              <Input value={draft.priceSuffix ?? ''} onChange={(e) => setDraft({ ...draft, priceSuffix: e.target.value })} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Description">
                <Textarea rows={3} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
              </Field>
            </div>
            <div className="md:col-span-2">
              <Field label="Lien de l'image (URL, optionnel)">
                <Input value={draft.image ?? ''} onChange={(e) => setDraft({ ...draft, image: e.target.value })} placeholder="https://..." />
              </Field>
            </div>
            {draft.image && (
              <div className="md:col-span-2">
                <img src={draft.image} alt="" className="h-32 w-full max-w-xs object-cover rounded-sm border border-slate-200" />
              </div>
            )}
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
        {events.map((ev) => (
          <Card key={ev.id} className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h4 className="font-bold text-[#161310]">{ev.title}</h4>
              <p className="text-sm font-black text-[#705d00]">{ev.formattedPrice}</p>
              <p className="text-sm text-slate-500 line-clamp-2">{ev.description}</p>
            </div>
            <Button variant="ghost" onClick={() => setDraft(ev)} className="!py-1.5 !px-2.5 shrink-0">
              <Pencil className="w-3.5 h-3.5" /> Modifier
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
