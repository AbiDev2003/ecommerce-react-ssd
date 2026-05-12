import dayjs from "dayjs";
import type { DeliveryOption } from "../../types/ecommerce";

type DeliveryDateProps = {
  selectedDeliveryOption?:DeliveryOption; 
}

function DeliveryDate({selectedDeliveryOption}: DeliveryDateProps) {
  if(!selectedDeliveryOption) return null; 
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D",
      )}
    </div>
  );
}

export default DeliveryDate;
