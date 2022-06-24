import { ENDPOINT_API } from 'common/constants/pathAPI';
import { ICategory } from 'common/types/category.model';
import { IFood } from 'common/types/food.model';
import { axiosClient } from './axiosConnection';

class AppService {
  //CATEGORY
  async getCategoryList(): Promise<ICategory[]> {
    const { data } = await axiosClient.get(`${ENDPOINT_API.CATEGORY}`);
    return data;
  }
  async getCategoryDetailById(id: number): Promise<ICategory> {
    const { data } = await axiosClient.get(`${ENDPOINT_API.CATEGORY}/${id}`);
    return data;
  }
  async deleteCategoryById(id: number): Promise<ICategory[]> {
    const { data } = await axiosClient.delete(`${ENDPOINT_API.CATEGORY}/${id}`);
    return data;
  }
  async updateCategoryById(
    params: ICategory,
    id: number,
  ): Promise<ICategory[]> {
    const { data } = await axiosClient.put(
      `${ENDPOINT_API.CATEGORY}/${id}`,
      params,
    );
    return data;
  }
  async addNewCategory(params: ICategory): Promise<ICategory[]> {
    const { data } = await axiosClient.post(`${ENDPOINT_API.CATEGORY}`, params);
    return data;
  }
  //PRODUCT
  async getFoodList(): Promise<IFood[]> {
    const { data } = await axiosClient.get(`${ENDPOINT_API.FOOD}`);
    return data;
  }
  async getFoodDetailById(id: number): Promise<IFood> {
    const { data } = await axiosClient.get(`${ENDPOINT_API.FOOD}/${id}`);
    return data;
  }
  async getFoodDetailByCategoryId(categoryID: number): Promise<IFood[]> {
    const { data } = await axiosClient.get(
      `${ENDPOINT_API.FOOD}/?categoryID=${categoryID}`,
    );
    return data;
  }
  async deleteFoodById(id: number): Promise<IFood[]> {
    const { data } = await axiosClient.delete(`${ENDPOINT_API.FOOD}/${id}`);
    return data;
  }
  async updateFoodById(params: IFood, id: number): Promise<IFood[]> {
    const { data } = await axiosClient.put(
      `${ENDPOINT_API.FOOD}/${id}`,
      params,
    );
    return data;
  }
  async addNewFood(params: IFood): Promise<IFood[]> {
    const { data } = await axiosClient.post(`${ENDPOINT_API.FOOD}`, params);
    return data;
  }
}

export default new AppService();
