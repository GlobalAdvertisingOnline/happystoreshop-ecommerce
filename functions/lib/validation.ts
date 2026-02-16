import { z } from "zod/v4";

export const clickSchema = z.object({
  pageType: z.string().default("checkoutPage"),
});

export const leadSchema = z.object({
  sessionId: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  address1: z.string().min(1),
  address2: z.string().optional().default(""),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
  country: z.string().default("US"),
});

export const orderSchema = z.object({
  sessionId: z.string().min(1),
  cardNumber: z.string().min(13).max(16),
  cardExpiryDate: z.string().regex(/^\d{6}$/),
  cvv: z.string().min(3).max(4),
  products: z.array(
    z.object({
      id: z.string(),
      qty: z.number().int().min(1).max(10),
      price: z.number().int().min(1),
      index: z.number().int().min(1).max(5),
    })
  ).min(1).max(5),
});

export const confirmSchema = z.object({
  orderId: z.string().min(1),
});

export const webhookSchema = z.object({
  orderId: z.string().optional(),
  orderStatus: z.string().optional(),
});

export const membershipJoinSchema = z.object({
  email: z.email(),
  phone: z.string().min(7),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  address1: z.string().min(1),
  address2: z.string().optional().default(""),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/),
  country: z.string().default("US"),
  cardNumber: z.string().min(13).max(16),
  cardExpiryDate: z.string().regex(/^\d{6}$/),
  cvv: z.string().min(3).max(4),
});

export const membershipStatusSchema = z.object({
  email: z.email(),
});

export const membershipCancelSchema = z.object({
  customerId: z.string().min(1),
});
