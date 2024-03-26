import { faker } from "@faker-js/faker"

export const createUser = () => {
    return {
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        name: faker.person.fullName(),
        score: faker.number.float()
    }
}