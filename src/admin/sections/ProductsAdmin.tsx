import { useState } from 'react';
import { Plus, Pencil, Trash2, Save, X } from 'lucide-react';
import { useContent } from '../../content/ContentProvider';
import { Product } from '../../types';
import { saveProduct, deleteRow } from '../api';
import { Field, Input, Textarea, Select, Button, Card } from '../ui';

const CATEGORIES = ['Vêtements', 'Accessoires', 'Électronique', 'Cosmétiques'];

function formatFcfa(n: number): string {
  return `${n.toLocaleString('en-US')} FCFA`;
}

export default function ProductsAdmin() {
  const { products, reload } = useContent();
  const [draft, setDraft] = useState<Product | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const startNew = () =>
    setDraft({
      id: `prod-${Date.now()}`,
      name: '',
      price: 0,
      formattedPrice: '',
      category: 'Vêtements',
      image: '',
      description: '',
    });

  const save = async () => {
    if (!draft) return;
    setBusy(true);
    setError('');
    try {
      const index = products.findIndex((p) => p.id === draft.id);
      const order = index === -1 ? products.length + 1 : index + 1;
      const toSave = {
        ...draft,
        formattedPrice: draft.formattedPrice.trim() || formatFcfa(draft.price),
      };
      await saveProduct(toSave, order);
      await reload();
      setDraft(null);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (p: Product) => {
    if (!confirm(`Supprimer définitivement « ${p.name} » ?`)) return;
    setBusy(true);
    setError('');
    try {
      await deleteRow('products', p.id);
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
          <h2 className="font-display text-xl font-black text-[#161310]">Boutique — Produits</h2>
          <p className="text-sm text-slate-500">{products.length} produit(s) en ligne</p>
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
              {products.some((p) => p.id === draft.id) ? 'Modifier le produit' : 'Nouveau produit'}
            </h3>
            <button onClick={() => setDraft(null)} className="text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Nom">
              <Input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </Field>
            <Field label="Catégorie">
              <Select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value as Product['category'] })}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </Field>
            <Field label="Prix (nombre)" hint="Ex: 750000">
              <Input
                type="number"
                value={draft.price}
                onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })}
              />
            </Field>
            <Field label="Prix affiché" hint="Laisser vide = généré automatiquement (ex: 750,000 FCFA)">
              <Input
                value={draft.formattedPrice}
                placeholder={formatFcfa(draft.price)}
                onChange={(e) => setDraft({ ...draft, formattedPrice: e.target.value })}
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Lien de l'image (URL)">
                <Input value={draft.image} onChange={(e) => setDraft({ ...draft, image: e.target.value })} placeholder="https://..." />
              </Field>
            </div>
            {draft.image && (
              <div className="md:col-span-2">
                <img src={draft.image} alt="" className="h-32 w-32 object-cover rounded-sm border border-slate-200" />
              </div>
            )}
            <div className="md:col-span-2">
              <Field label="Description">
                <Textarea rows={3} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
              </Field>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Button variant="gold" onClick={save} disabled={busy || !draft.name.trim()}>
              <Save className="w-4 h-4" /> {busy ? 'Enregistrement…' : 'Enregistrer'}
            </Button>
            <Button variant="ghost" onClick={() => setDraft(null)} disabled={busy}>Annuler</Button>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((p) => (
          <Card key={p.id} className="flex gap-4">
            <img src={p.image} alt={p.name} className="h-20 w-20 object-cover rounded-sm border border-slate-200 shrink-0" />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{p.category}</span>
              <h4 className="font-bold text-[#161310] truncate">{p.name}</h4>
              <p className="text-sm font-black text-[#705d00]">{p.formattedPrice}</p>
              <div className="flex gap-2 mt-2">
                <Button variant="ghost" onClick={() => setDraft(p)} className="!py-1.5 !px-2.5">
                  <Pencil className="w-3.5 h-3.5" /> Modifier
                </Button>
                <Button variant="danger" onClick={() => remove(p)} className="!py-1.5 !px-2.5" disabled={busy}>
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
