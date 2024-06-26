"use client";

import { getProductAction } from "@/actions/menu.action";
import { CartContext } from "@/context/CartContext";
import { Cart, IMenu } from "@/interfaces";
import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import EmptyCartSvg from "@/public/svg/empty-cart";
import { Button } from "./ui/button";
import Link from "next/link";

const CartSection = () => {
  const { cart } = useContext(CartContext);
  const [meals, setMeals] = useState<IMenu[]>([]);

  useEffect(() => {
    setMeals([]);
    cart.forEach(async (item) => {
      try {
        const res = await getProductAction({ id: item.productId });
        setMeals((prev) => [...prev, res as IMenu]);
      } catch (error) {
        console.log(error);
      }
    });
  }, [cart]);

  const filteredMeals = ({ item }: { item: Cart }) => {
    return meals.filter((meal) => meal.id === item?.productId);
  };

  return (
    <div className="flex flex-col gap-4">
      {cart.length ? (
        <>
          {cart.map((item) => (
            <CartItem
              item={item as Cart}
              meal={filteredMeals({ item: item as Cart })[0] as IMenu}
              key={item.id}
            />
          ))}
          <div className="flex flex-col gap-2">
            <Link href={"/cart/checkOut"} className="w-fit mr-auto">
              <Button size={"lg"} className="text-lg font-bold">
                أطلب
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <EmptyCartSvg className="max-w-[600px] mx-auto" />
      )}
    </div>
  );
};

export default CartSection;
