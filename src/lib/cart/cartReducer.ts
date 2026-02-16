import { CartItem } from "@/lib/types/product";

const MAX_LINE_ITEMS = 5;
const MAX_QTY_PER_ITEM = 10;
const CART_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export type CartState = {
  items: CartItem[];
  updatedAt: number;
};

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { variantId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { variantId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; payload: CartState };

export const initialCartState: CartState = {
  items: [],
  updatedAt: Date.now(),
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  const now = Date.now();

  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.variantId === action.payload.variantId
      );

      if (existing) {
        const newQty = Math.min(existing.quantity + action.payload.quantity, MAX_QTY_PER_ITEM);
        return {
          items: state.items.map((item) =>
            item.variantId === action.payload.variantId
              ? { ...item, quantity: newQty }
              : item
          ),
          updatedAt: now,
        };
      }

      if (state.items.length >= MAX_LINE_ITEMS) {
        return state;
      }

      return {
        items: [
          ...state.items,
          { ...action.payload, quantity: Math.min(action.payload.quantity, MAX_QTY_PER_ITEM) },
        ],
        updatedAt: now,
      };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.variantId !== action.payload.variantId),
        updatedAt: now,
      };

    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return {
          items: state.items.filter((item) => item.variantId !== action.payload.variantId),
          updatedAt: now,
        };
      }
      return {
        items: state.items.map((item) =>
          item.variantId === action.payload.variantId
            ? { ...item, quantity: Math.min(action.payload.quantity, MAX_QTY_PER_ITEM) }
            : item
        ),
        updatedAt: now,
      };
    }

    case "CLEAR_CART":
      return { items: [], updatedAt: now };

    case "HYDRATE":
      return action.payload;

    default:
      return state;
  }
}

const STORAGE_KEY = "happystore-cart";

export function saveCart(state: CartState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

export function loadCart(): CartState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: CartState = JSON.parse(raw);
    if (Date.now() - parsed.updatedAt > CART_EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}
