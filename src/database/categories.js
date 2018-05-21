import Category from '../models/Category';

var categories = [];

categories.push(new Category(1, 1, "Personal Projects", true));
categories.push(new Category(2, 1, "Studies", true));
categories.push(new Category(3, 1, "Opensource", true));
categories.push(new Category(4, 1, "Remote Work", true));
categories.push(new Category(5, 2, "Odolix Software", true));
categories.push(new Category(6, 2, "Opensource", false));

export default categories;