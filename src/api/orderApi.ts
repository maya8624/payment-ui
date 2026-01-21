import api from "../services/apiClient";
import type {OrderResponse } from "../types/order";

const getOrderById = async (orderId: number): Promise<OrderResponse> => {
    const response = await api.get<OrderResponse>(`/api/order/${orderId}`)
    return response.data;
}
