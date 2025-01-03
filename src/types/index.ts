// 定义一个接口，限制person对象的具体属性
export interface PersonInter { //分别暴露
    id: string,
    name: string,
    age: number,
}

// 一个自定义类型
export type Persons = PersonInter[]