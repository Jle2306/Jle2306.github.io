"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { DemoNotice } from "@/components/demos/DemoNotice";
import { WorkPageNav } from "@/components/demos/WorkPageNav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { restaurantMenuItems } from "@/app/demos/restaurant-menu/data";
import { insertRecord } from "@/lib/supabase";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export function RestaurantCheckoutClient() {
  const searchParams = useSearchParams();
  const initialItem = restaurantMenuItems.find((item) => item.name === searchParams.get("item"));
  const [cart, setCart] = useState<CartItem[]>(
    initialItem ? [{ name: initialItem.name, price: initialItem.price, quantity: 1 }] : [],
  );
  const [orderType, setOrderType] = useState("堂食");
  const [tableNo, setTableNo] = useState("A12");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );
  const serviceFee = orderType === "外带" ? 2 : 0;
  const total = subtotal + serviceFee;

  function addItem(item: (typeof restaurantMenuItems)[number]) {
    setCart((items) => {
      const existing = items.find((cartItem) => cartItem.name === item.name);
      if (existing) {
        return items.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...items, { name: item.name, price: item.price, quantity: 1 }];
    });
  }

  function updateQuantity(name: string, delta: number) {
    setCart((items) =>
      items
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  async function submitOrder() {
    setStatus("");
    if (cart.length === 0) {
      setStatus("请先选择菜品。");
      return;
    }
    if (!customerName || !phone) {
      setStatus("请填写称呼和手机号，方便店员确认订单。");
      return;
    }
    if (!/^1\d{10}$|^188-0000-0000$/.test(phone)) {
      setStatus("请填写有效的手机号。");
      return;
    }
    setSubmitting(true);
    try {
      const result = await insertRecord("private_orders", {
        items: cart,
        total_amount: total,
        customer_name: customerName,
        phone,
        wechat: "",
        address: `${orderType}${orderType === "堂食" ? ` / 桌号 ${tableNo}` : ""}`,
        expected_delivery: orderType,
        note,
        group_buy: false,
        status: "pending_contact",
      });
      setStatus(
        `下单信息已提交。实际项目中，这里可以同步到收银台、后厨看板或订单后台。${
          result.mode === "mock" ? ` ${result.message}` : ""
        }`,
      );
      setCart([]);
      setCustomerName("");
      setPhone("");
      setNote("");
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
        caseHref="/projects/restaurant-menu-system"
        links={[
          { label: "餐厅首页", href: "/demos/restaurant-menu" },
          { label: "商家经营后台", href: "/demos/restaurant-menu/admin" },
          { label: "手机端小程序", href: "/demos/restaurant-menu/mobile" },
        ]}
      />
      <div className="min-h-screen bg-[#fff8ed] text-stone-950">
        <header className="border-b border-orange-100 bg-white/80">
          <Container className="flex h-20 items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">LANE CHECKOUT</p>
              <p className="mt-1 text-xl font-semibold">巷口食堂点餐结算</p>
            </div>
            <Button href="/demos/restaurant-menu" variant="secondary">返回餐厅首页</Button>
          </Container>
        </header>

        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <Card className="bg-white">
                <h1 className="text-3xl font-semibold">选择菜品</h1>
                <div className="mt-6 grid gap-4">
                  {restaurantMenuItems.map((item) => (
                    <button
                      className="flex items-center justify-between rounded-2xl border border-orange-100 bg-orange-50/40 p-4 text-left"
                      key={item.name}
                      onClick={() => addItem(item)}
                      type="button"
                    >
                      <span>
                        <span className="block font-semibold">{item.name}</span>
                        <span className="mt-1 block text-sm text-stone-500">{item.tag} · {item.category}</span>
                      </span>
                      <span className="font-semibold">¥{item.price}</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="bg-white">
                <h2 className="text-3xl font-semibold">订单与结账</h2>
                <div className="mt-5 flex rounded-xl bg-stone-100 p-1 text-sm">
                  {["堂食", "外带"].map((type) => (
                    <button
                      className={`flex-1 rounded-lg px-3 py-2 ${orderType === type ? "bg-white text-stone-950 shadow-sm" : "text-stone-600"}`}
                      key={type}
                      onClick={() => setOrderType(type)}
                      type="button"
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <div className="mt-5 grid gap-3">
                  {cart.length === 0 ? (
                    <p className="rounded-xl bg-stone-50 p-4 text-sm text-stone-500">购物车为空，请先选择菜品。</p>
                  ) : (
                    cart.map((item) => (
                      <div className="flex items-center justify-between gap-3 rounded-xl bg-stone-50 p-3" key={item.name}>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-stone-500">¥{item.price} x {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="rounded border border-stone-200 px-2" onClick={() => updateQuantity(item.name, -1)} type="button">-</button>
                          <button className="rounded border border-stone-200 px-2" onClick={() => updateQuantity(item.name, 1)} type="button">+</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-5 space-y-2 border-t border-stone-200 pt-5 text-sm text-stone-600">
                  <p className="flex justify-between"><span>菜品小计</span><span>¥{subtotal}</span></p>
                  <p className="flex justify-between"><span>{orderType === "外带" ? "打包费" : "服务费"}</span><span>¥{serviceFee}</span></p>
                  <p className="flex justify-between text-lg font-semibold text-stone-950"><span>合计</span><span>¥{total}</span></p>
                </div>
                <div className="mt-5 grid gap-3">
                  {orderType === "堂食" ? (
                    <Input label="桌号" onChange={setTableNo} value={tableNo} />
                  ) : null}
                  <Input label="称呼" onChange={setCustomerName} placeholder="例如：陈女士" value={customerName} />
                  <Input label="手机号" onChange={setPhone} placeholder="188-0000-0000" value={phone} />
                  <label className="grid gap-2 text-sm font-medium text-stone-700">
                    备注
                    <textarea
                      className="min-h-20 rounded-xl border border-stone-200 px-3 py-2"
                      onChange={(event) => setNote(event.target.value)}
                      placeholder="例如：少辣、不要香菜、打包分装"
                      value={note}
                    />
                  </label>
                  {status ? <p className="rounded-xl bg-orange-50 px-3 py-2 text-sm text-orange-800">{status}</p> : null}
                  <Button disabled={submitting} onClick={submitOrder}>{submitting ? "提交中..." : "确认下单"}</Button>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}

function Input({
  label,
  onChange,
  placeholder,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-stone-700">
      {label}
      <input
        className="rounded-xl border border-stone-200 px-3 py-2"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}
