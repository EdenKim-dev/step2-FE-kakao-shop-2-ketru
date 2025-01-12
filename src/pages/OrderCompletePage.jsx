import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../components/services/order";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
  const {id} = useParams();

  // 완료된 결제 정보를 불러오기
  const {data, error} = useQuery(`/orders/${id}`, () => getOrderFromId(id));

  return (
    <Suspense fallback={<Loader/>}>
      <OrderCompleteTemplate data={data}/>
    </Suspense>
  );
};

export default OrderCompletePage;