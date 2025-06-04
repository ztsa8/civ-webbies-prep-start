let user = {
  id: 12345,
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 30,
  balance: 2500.75,
  address: {
    street: "123 Main St",
    city: "Sydney",
    state: "NSW",
    postalCode: 2000,
  },
  joinDate: new Date("2020-01-15"),
  lastLogin: new Date(),
  orders: [
    {
      orderId: 1,
      product: "Laptop",
      quantity: 1,
      price: 999.99,
      date: new Date("2023-06-01"),
    },
    {
      orderId: 2,
      product: "Mouse",
      quantity: 2,
      price: 19.99,
      date: new Date("2023-07-20"),
    },
    {
      orderId: 3,
      product: "Keyboard",
      quantity: 1,
      price: 49.99,
      date: new Date("2023-08-15"),
    },
  ],
  preferences: {
    newsletter: true,
    notifications: {
      email: true,
      sms: false,
    },
    favoriteCategories: ["Electronics", "Books", "Home Appliances"],
  },
  loginAttempts: 5,
  referral: null,
};

let profileHTML = `
  <div class="box">
    <h2 class="title is-4">Personal Information</h2>
    <div class="content">
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name.firstName} ${user.name.lastName}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Balance:</strong> $${user.balance.toFixed(2)}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}</p>
      <p><strong>Join Date:</strong> ${user.joinDate.toLocaleDateString()}</p>
      <p><strong>Last Login:</strong> ${user.lastLogin.toLocaleDateString()}</p>
    </div>
  </div>

  <div class="box">
    <h2 class="title is-4">Orders</h2>
    <div class="content">
        ${user.orders.map((order) => `
          <div class="card mb-3">
            <div class="card-content">
              <strong>Order ID:</strong> ${order.orderId}<br>
              <strong>Product:</strong> ${order.product}<br>
              <strong>Quantity:</strong> ${order.quantity}<br>
              <strong>Price:</strong> $${order.price.toFixed(2)}<br>
              <strong>Date:</strong> ${order.date.toLocaleDateString()}
        `)}
    
    </div>
  </div>
  

  <div class="box">
    <h2 class="title is-4">Preferences</h2>
    <div class="content">
      <p><strong>Newsletter:</strong> ${user.preferences.newsletter ? "Subscribed" : "Not Subscribed"}</p>
      <p><strong>Email Notifications:</strong> ${user.preferences.notifications.email ? "Enabled" : "Disabled"}</p>
      <p><strong>SMS Notifications:</strong> ${user.preferences.notifications.sms ? "Enabled" : "Disabled"}</p>
      <p><strong>Favorite Categories:</strong></p>
      <div class="tags">
       ${user.preferences.favouriteCategories.map(category => `<span class="tag is-info is-light">${category}</span>` )}

      </div>
    </div>
  </div>

  <div class="box">
    <h2 class="title is-4">Account</h2>
    <div class="content">
      <p><strong>Login Attempts:</strong> ${user.loginAttempts}</p>
      <p><strong>Referral:</strong> ${user.referral ? user.referral : "No referral"}</p>
    </div>
  </div>
`;

document.getElementById("user-profile").innerHTML = profileHTML;
