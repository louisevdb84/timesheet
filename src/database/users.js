import User from '../models/User';

var users = [];

users.push(new User(1, "Louise", "van den Berg", 108, "louisevdb", "123"));
users.push(new User(2, "Herman", "van den Berg", 271, "herman1vdb", "987"));

export { users};