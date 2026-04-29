import React, { useState, useMemo } from 'react';
import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert
} from 'react-native';

const ITENS = [
  { id: '1', nome: 'Hamburger', preco: 'R$ 10,00' },
  { id: '2', nome: 'Esfiha', preco: 'R$ 10,50' },
  { id: '3', nome: 'Croissant', preco: 'R$ 11,00' },
  { id: '4', nome: 'Croissant de chocolate', preco: 'R$ 12,00' },
  { id: '5', nome: 'Coca-cola', preco: 'R$ 6,00' },
  { id: '6', nome: 'Sprite', preco: 'R$ 6,00' },
  { id: '7', nome: 'Guaraná', preco: 'R$ 6,00' },
  { id: '8', nome: 'Fanta', preco: 'R$ 6,00' },
  { id: '9', nome: 'Suco de Laranja', preco: 'R$ 10,00' },
  { id: '10', nome: 'Café Expresso', preco: 'R$ 6,00' }
];


// converte "R$ 10,50" -> 10.5 (Number)
function parsePriceString(priceStr) {
  if (!priceStr) return 0;
  // Remove qualquer caractere exceto dígitos, vírgula e ponto
  const only = priceStr.replace(/[^\d.,-]/g, '').trim();
  // Troca vírgula por ponto (pt-BR usa vírgula)
  const withDot = only.replace(',', '.');
  const n = parseFloat(withDot);
  return Number.isFinite(n) ? n : 0;
}

// formata número para moeda brasileira "R$ 10,50"
function formatBRL(value) {
  if (typeof Intl !== 'undefined' && Intl.NumberFormat) {
    try {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    } catch (e) {
      // Caindo para fallback
    }
  }
  // fallback simples
  return 'R$ ' + value.toFixed(2).replace('.', ',');
}

export default function Cardapio() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  // cart: objeto { [id]: quantidade }
  const [cart, setCart] = useState({});

  // filtra itens por nome conforme a busca (dependência só em query)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ITENS;
    return ITENS.filter(i => i.nome.toLowerCase().includes(q));
  }, [query]);

  // soma total (dependência em cart)
  const total = useMemo(() => {
    let t = 0;
    for (const [id, qty] of Object.entries(cart)) {
      if (!qty) continue;
      const item = ITENS.find(x => x.id === id);
      if (!item) continue;
      const priceNum = parsePriceString(item.preco);
      t += priceNum * qty;
    }
    return t;
  }, [cart]);

  // soma total de itens (count)
  const cartCount = useMemo(() => {
    return Object.values(cart).reduce((s, v) => s + (v || 0), 0);
  }, [cart]);

  function increment(id) {
    setCart(prev => {
      const next = { ...prev };
      next[id] = (next[id] || 0) + 1;
      return next;
    });
  }

  function decrement(id) {
    setCart(prev => {
      const next = { ...prev };
      if (!next[id]) return prev;
      next[id] = next[id] - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }

  function renderItem({ item }) {
    const qty = cart[item.id] || 0;
    return (
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Text style={styles.itemNome}>{item.nome}</Text>
        </View>

        <View style={styles.cardRight}>
          <View style={styles.precoBadge}>
            <Text style={styles.precoText}>{item.preco}</Text>
          </View>

          <View style={styles.qtyRow}>
            <TouchableOpacity
              style={[styles.qtyBtn, qty === 0 && styles.qtyBtnDisabled]}
              onPress={() => decrement(item.id)}
              disabled={qty === 0}
              accessibilityLabel={`Diminuir quantidade de ${item.nome}`}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qtyText}>{qty}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => increment(item.id)}
              accessibilityLabel={`Adicionar ${item.nome}`}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function onCheckout() {
    if (cartCount === 0) {
      Alert.alert('Carrinho vazio', 'Adicione pelo menos um item antes de finalizar.');
      return;
    }
    const lines = Object.entries(cart).map(([id, qty]) => {
      const item = ITENS.find(x => x.id === id);
      const price = parsePriceString(item.preco);
      return `${qty}x ${item.nome} — ${formatBRL(price * qty)}`;
    });
    const message = lines.join('\n') + `\n\nTotal: ${formatBRL(total)}`;
    Alert.alert('Resumo do pedido', message);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Cardápio</Text>
          <Text style={styles.subtitulo}>Escolha o item e volte para a fila</Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={() => router.push('/fila')}
            accessibilityLabel="Voltar para a fila"
          >
            <Text style={styles.headerBtnText}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.cartCount}>Itens: {cartCount}</Text>
        </View>
      </View>

      <View style={styles.searchBox}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar: ex. 'Coca' ou 'Hamburger'"
          placeholderTextColor="#9a9a9a"
          style={styles.searchInput}
          returnKeyType="search"
          accessible={true}
          accessibilityLabel="Campo de busca no cardápio"
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        initialNumToRender={8}
      />

      {/* Footer fixo com total e botão de checkout */}
      <View style={styles.footer}>
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{formatBRL(total)}</Text>
        </View>

        <TouchableOpacity
          style={[styles.checkoutBtn, cartCount === 0 && styles.checkoutDisabled]}
          onPress={onCheckout}
          disabled={cartCount === 0}
          accessibilityLabel="Finalizar pedido"
        >
          <Text style={styles.checkoutText}>
            {cartCount === 0 ? 'Adicionar itens' : `Finalizar (${cartCount})`}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000000'
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700'
  },
  subtitulo: {
    color: '#c0bebe',
    fontSize: 13,
    marginTop: 4
  },
  headerBtn: {
    borderColor: '#555051',
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8
  },
  headerBtnText: {
    color: '#e6e1e1'
  },
  cartCount: {
    marginTop: 6,
    color: '#c0bebe',
    fontSize: 12,
    textAlign: 'right'
  },

  searchBox: {
    paddingHorizontal: 20,
    marginBottom: 12
  },
  searchInput: {
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#222222',
    backgroundColor: '#0a0a0a',
    paddingHorizontal: 14,
    color: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4
      },
      android: {
        elevation: 1
      }
    })
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#070707',
    borderWidth: 1,
    borderColor: '#151515',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.18,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 10
      },
      android: {
        elevation: 2
      }
    })
  },

  cardLeft: {
    flex: 1,
    paddingRight: 12
  },
  itemNome: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600'
  },
  itemDescricao: {
    color: '#bdb6b6',
    fontSize: 12,
    marginTop: 6
  },

  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  precoBadge: {
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 8
  },
  precoText: {
    color: '#e6f4fe',
    fontWeight: '700'
  },

  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b1b1b',
    marginHorizontal: 6
  },
  qtyBtnDisabled: {
    opacity: 0.4
  },
  qtyBtnText: {
    color: '#e6f4fe',
    fontSize: 20,
    fontWeight: '700'
  },
  qtyText: {
    color: '#e6f4fe',
    minWidth: 22,
    textAlign: 'center',
    fontWeight: '700'
  },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#010101',
    padding: 14,
    borderTopWidth: 1,
    borderColor: '#1a1a1a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  totalBox: {
    flexDirection: 'column'
  },
  totalLabel: {
    color: '#c0bebe',
    fontSize: 12
  },
  totalValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700'
  },
  checkoutBtn: {
    backgroundColor: '#e6f4fe',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10
  },
  checkoutDisabled: {
    backgroundColor: '#555051'
  },
  checkoutText: {
    color: '#000000',
    fontWeight: '700'
  }
});