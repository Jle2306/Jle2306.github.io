"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { fruitProducts } from "@/app/demos/private-order/data";
import { insertRecord } from "@/lib/supabase";

type CartItem = { name: string; price: number; quantity: number };

export function PrivateOrderPageClient() {
  const searchParams = useSearchParams();
  const initialProduct = fruitProducts.find((item) => item.name === searchParams.get("product"));
  const [cart, setCart] = useState<CartItem[]>(
    initialProduct ? [{ name: initialProduct.name, price: initialProduct.price, quantity: 1 }] : [],
  );
  const [form, setForm] = useState({
    name: "",
    phone: "",
    wechat: "",
    address: "",
    delivery: "",
    note: "",
    groupBuy: "否",
  });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  function addProduct(product: (typeof fruitProducts)[number]) {
    setCart((items) => {
      const existing = items.find((item) => item.name === product.name);
      if (existing) {
        return items.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { name: product.name, price: product.price, quantity: 1 }];
    });
  }

  async function submit() {
    setStatus("");
    if (cart.length === 0 || !form.name || !form.address || (!form.phone && !form.wechat)) {
      setStatus("请至少选择一个商品，并填写姓名、联系方式和收货地址。");
      return;
    }
    setSubmitting(true);
    try {
      const result = await insertRecord("private_orders", {
        items: cart,
        total_amount: total,
        customer_name: form.name,
        phone: form.phone,
        wechat: form.wechat,
        address: form.address,
        expected_delivery: form.delivery,
        note: form.note,
        group_buy: form.groupBuy === "是",
        status: "pending_contact",
      });
      setStatus(
        `订单信息已提交。实际项目中，客服可以在后台查看订单并联系客户确认付款与发货。${
          result.mode === "mock" ? ` ${result.message}` : ""
        }`,
      );
      setCart([]);
      setForm({ name: "", phone: "", wechat: "", address: "", delivery: "", note: "", groupBuy: "否" });
    } catch {
      setStatus("提交失败，请稍后重试。");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <DemoNotice />
      <WorkPageNav
        caseHref="/projects/private-order-system"
        links={[
          { label: "品牌商品站", href: "/demos/private-order" },
          { label: "商家订单后台", href: "/demos/private-order/admin" },
          { label: "手机端小程序", href: "/demos/private-order/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#f8fbef] text-[#203318]">
        <header className="border-b border-green-200 bg-white/80">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-green-700">ORDER FORM</p>
              <p className="mt-1 text-xl font-semibold">山间果铺订单提交</p>
            </div>
            <Button href="/demos/private-order" variant="secondary">返回商品站首页</Button>
          </Container>
        </header>

        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Card className="bg-white">
                <h1 className="text-3xl font-semibold">选择商品</h1>
                <div className="mt-6 grid gap-3">
                  {fruitProducts.map((product) => (
                    <button
                      className="flex items-center justify-between rounded-2xl border border-green-100 bg-green-50/60 p-4 text-left"
                      key={product.name}
                      onClick={() => addProduct(product)}
                      type="button"
                    >
                      <span>
                        <span className="block font-semibold">{product.name}</span>
                        <span className="mt-1 block text-sm text-green-900/60">{product.spec} · {product.tag}</span>
                      </span>
                      <span className="font-semibold">¥{product.price}</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="bg-white">
                <h2 className="text-3xl font-semibold">订单信息</h2>
                <div className="mt-5 grid gap-3">
                  {cart.length === 0 ? (
                    <p className="text-sm text-green-900/60">还没有选择商品。</p>
                  ) : (
                    cart.map((item) => (
                      <div className="flex items-center justify-between gap-3 rounded-xl bg-green-50 p-3" key={item.name}>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-green-900/60">¥{item.price} x {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="rounded border px-2" onClick={() => setCart((items) => items.map((cartItem) => cartItem.name === item.name ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) } : cartItem))}>-</button>
                          <button className="rounded border px-2" onClick={() => setCart((items) => items.map((cartItem) => cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))}>+</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <p className="mt-5 text-xl font-semibold">预估金额：¥{total}</p>
                <div className="mt-5 grid gap-4">
                  {(["name", "phone", "wechat", "address", "delivery", "note"] as const).map((key) => (
                    <label className="grid gap-2 text-sm font-medium" key={key}>
                      {labelMap[key]}
                      <input className="rounded-xl border border-green-100 px-3 py-2" value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} />
                    </label>
                  ))}
                  <label className="grid gap-2 text-sm font-medium">
                    是否企业团购
                    <select className="rounded-xl border border-green-100 px-3 py-2" value={form.groupBuy} onChange={(event) => setForm({ ...form, groupBuy: event.target.value })}>
                      <option>否</option>
                      <option>是</option>
                    </select>
                  </label>
                  {status ? <p className="rounded-xl bg-green-50 px-3 py-2 text-sm text-green-800">{status}</p> : null}
                  <Button disabled={submitting} onClick={submit}>{submitting ? "提交中..." : "提交订单"}</Button>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}

const labelMap = {
  name: "姓名",
  phone: "手机号",
  wechat: "微信号",
  address: "收货地址",
  delivery: "期望发货时间",
  note: "备注",
};
