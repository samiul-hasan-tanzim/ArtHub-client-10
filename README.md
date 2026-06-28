# ArtHub — Contemporary Art Platform

A premium, minimalist digital art gallery and marketplace designed to connect visionary creators (Artists) with art collectors (Users) who appreciate timeless and high-end artistic expressions. The application provides an elegant interface featuring multi-role dashboards, Stripe payment subscription plans, individual artwork sales, and an exclusive buyer-only review system.

**Live Link**: [https://art-hub-client-10.vercel.app/](https://art-hub-client-10.vercel.app/)

---

## 🌟 Key Features

1. **Role-Based Access Control (RBAC)**:
   - **Admin**: Manages users, modifies roles, reviews/moderates listed artworks, tracks all platform transactions, and monitors growth using interactive analytics charts.
   - **Artist**: Manages their personal portfolio (adds, updates, and deletes artworks), monitors sales, tracks revenue, and updates their profile.
   - **Collector (User)**: Browse and purchase paintings, write reviews for purchased pieces, track purchase history, and manage their collector subscription plan.
2. **Subscription & Capped Purchase Model**:
   - Offers three subscription tiers (Free, Pro, and Premium) mapped directly through Stripe.
   - Restricts total artwork purchases based on the active plan:
     - **Free**: Up to 3 artwork purchases.
     - **Pro**: Up to 9 artwork purchases.
     - **Premium**: Unlimited purchases.
3. **Seamless Secure Checkout**:
   - Integration with Stripe checkout sessions for both user subscription billing and individual artwork purchases.
   - Automated post-payment processing to record transactions and update user plans or artwork ownership instantly.
4. **Verified Buyer Reviews**:
   - Collectors can only leave reviews ("Reflections") on artworks they have actually purchased.
   - Comment authors can edit or delete their reviews directly on the artwork page.
5. **Modern Minimalist Aesthetics**:
   - Sleek dark/light theme switching using `next-themes`.
   - Beautiful layouts built with HeroUI (formerly NextUI) and styled using Tailwind CSS v4.
   - Smooth fluid animations and transition effects powered by Framer Motion.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router Architecture) & [React 19](https://react.dev/)
- **Authentication**: [Better Auth](https://better-auth.com/) with MongoDB Adapter & Google Social Login
- **Database**: [MongoDB](https://www.mongodb.com/) (Backend adapter integration)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [HeroUI](https://heroui.com/) (formerly NextUI)
- **Payments**: [Stripe SDK](https://stripe.com/) & `@stripe/stripe-js`
- **Charts/Analytics**: [Recharts](https://recharts.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Gravity UI Icons](https://github.com/gravity-ui/icons)

---

## 📂 Project Architecture & Function Reference

The codebase is organized cleanly into modular directories. Below is a comprehensive breakdown of files, folders, and major exported functions:

### 🔑 Authentication & Session Management

- **[src/lib/auth.js](file:///c:/assignment-10/client/src/lib/auth.js)**: Configures the server-side `betterAuth` instance with:
  - MongoDB database adapter.
  - Social authentication provider (Google OAuth).
  - Custom schema extensions adding `role` (default: `"user"`) and `plan` (default: `"free_user"`) to User documents.
  - JWT session strategy with session cookie caching enabled.
- **[src/lib/auth-client.js](file:///c:/assignment-10/client/src/lib/auth-client.js)**: Sets up the client-side `authClient` hook wrappers (`signIn`, `signUp`, `useSession`) to allow React components to authenticate and fetch session details dynamically.
- **[src/lib/core/session.js](file:///c:/assignment-10/client/src/lib/core/session.js)**:
  - `getUserSession()`: Fetches the currently logged-in user session from Server Components.
  - `requareRole(role)`: Acts as a server-side route guard, checking user roles and redirecting unauthorized users to `/unauthorized` or `/login`.

### 🔄 API Communication & Core Mutations

All API network requests to the backend server are signed with a Bearer JSON Web Token (JWT) acquired dynamically from the session provider:

- **[src/lib/core/mutation/clientMutation.js](file:///c:/assignment-10/client/src/lib/core/mutation/clientMutation.js)**: `serverMutation(path, data, method)` handles client-side authorized fetches by attaching the client session JWT.
- **[src/lib/core/mutation/serverMutation.js](file:///c:/assignment-10/client/src/lib/core/mutation/serverMutation.js)**: `serverMutation(path, data, method)` handles server-side authorized fetches by fetching the token through `auth.api.getToken()`.

### 🎨 Artwork APIs & Actions

- **[src/lib/api/artwork/getAllArtWorks.js](file:///c:/assignment-10/client/src/lib/api/artwork/getAllArtWorks.js)**: `getAllArtWorks({ search, category, sort, page, status })` retrieves artworks based on filters.
- **[src/lib/api/artwork/getArtworkById.js](file:///c:/assignment-10/client/src/lib/api/artwork/getArtworkById.js)**: `getArtworkById(id)` fetches details of a specific artwork by ID.
- **[src/lib/api/artwork/updateArtworkStatus.js](file:///c:/assignment-10/client/src/lib/api/artwork/updateArtworkStatus.js)**: `updateArtworkStatus(id, status)` updates status (e.g., pending review vs. approved) on the backend.
- **[src/lib/api/artwork/deleteArtwork.js](file:///c:/assignment-10/client/src/lib/api/artwork/deleteArtwork.js)**: `deleteArtwork(id)` deletes an artwork from the gallery database.
- **[src/lib/api/getArtByArtId.jsx](file:///c:/assignment-10/client/src/lib/api/getArtByArtId.jsx)**: `getArtByArtId(artId)` fetches a single artwork.
- **[src/lib/api/getArtByArtistId.jsx](file:///c:/assignment-10/client/src/lib/api/getArtByArtistId.jsx)**: `getArtByArtist(artistId, status)` gets all artworks created by a specific artist.
- **[src/lib/api/getFeaturedArtworks.js](file:///c:/assignment-10/client/src/lib/api/getFeaturedArtworks.js)**: `getFeaturedArtworks()` fetches up to 6 featured artworks for the homepage display.
- **[src/lib/action/ArtWorkPost.jsx](file:///c:/assignment-10/client/src/lib/action/ArtWorkPost.jsx)**: `submitArtWord(artWorkData)` posts a new artwork from the artist portal.
- **[src/lib/action/ArtWorkPatch.jsx](file:///c:/assignment-10/client/src/lib/action/ArtWorkPatch.jsx)**: `patchArtWork(id, artWorkData)` updates artwork metadata.
- **[src/lib/action/ArtWorkDelete.js](file:///c:/assignment-10/client/src/lib/action/ArtWorkDelete.js)**: `deleteArtWork(id)` server action wrapper for deleting artworks.

### 💳 Stripe & Checkout APIs

- **[src/lib/stripe.js](file:///c:/assignment-10/client/src/lib/stripe.js)**: Initializes the server-side Stripe SDK and maps plans to Stripe Price IDs:
  - `pro_user` ➡️ `price_1TmBhJFK6HJWNpDQWTYq8DEs`
  - `premium_user` ➡️ `price_1TmBw7FK6HJWNpDQ1XOPxAlp`
- **[src/app/api/checkout_sessions/route.js](file:///c:/assignment-10/client/src/app/api/checkout_sessions/route.js)**: Handles POST requests to generate Stripe Checkout Sessions for subscription upgrades.
- **[src/lib/payment/createCheckoutSession.js](file:///c:/assignment-10/client/src/lib/payment/createCheckoutSession.js)**: `createCheckoutSession(checkoutData)` API call mapping to the backend `/create-checkout-session` endpoint for individual artwork checkout redirects.
- **[src/lib/api/orders/createOrder.js](file:///c:/assignment-10/client/src/lib/api/orders/createOrder.js)**: `createOrder(orderData)` records successful purchase transactions.
- **[src/lib/api/orders/getAllOrders.js](file:///c:/assignment-10/client/src/lib/api/orders/getAllOrders.js)**: `getAllOrders()` retrieves list of all transaction orders.
- **[src/lib/api/orders/getOrdersByBuyer.js](file:///c:/assignment-10/client/src/lib/api/orders/getOrdersByBuyer.js)**: `getOrdersByBuyer(buyerId, artworkId)` gets a specific buyer's purchases.
- **[src/lib/api/orders/getSalesByArtist.js](file:///c:/assignment-10/client/src/lib/api/orders/getSalesByArtist.js)**: `getSalesByArtist(artistId)` fetches purchase orders placed for a specific artist's works.
- **[src/lib/api/subscriptions.js](file:///c:/assignment-10/client/src/lib/api/subscriptions.js)**: `postsubscriptions(subsInfo)` updates user subscription tier after a successful Stripe payment.
- **[src/lib/action/subscriptionPlans.js](file:///c:/assignment-10/client/src/lib/action/subscriptionPlans.js)**: `getSubscriptionPlansById(planId)` fetches metadata related to individual tier limits.

### 👥 User & Member Directory APIs

- **[src/lib/api/users/getAllUsers.js](file:///c:/assignment-10/client/src/lib/api/users/getAllUsers.js)**: `getAllUsers()` lists all members.
- **[src/lib/api/users/getUserById.js](file:///c:/assignment-10/client/src/lib/api/users/getUserById.js)**: `getUserById(userId)` fetches specific profile information.
- **[src/lib/api/users/updateUser.js](file:///c:/assignment-10/client/src/lib/api/users/updateUser.js)**: `updateUser(id, data)` modifies custom user properties.
- **[src/lib/api/users/updateUserRole.js](file:///c:/assignment-10/client/src/lib/api/users/updateUserRole.js)**: `updateUserRole(id, role)` changes a member's platform role.
- **[src/lib/api/getUser.js](file:///c:/assignment-10/client/src/lib/api/getUser.js)**: `getUser(userId)` secondary helper for user retrieval.

### 💬 Review & Comment Functions

- **[src/lib/api/getCommentsByArtWorkId.js](file:///c:/assignment-10/client/src/lib/api/getCommentsByArtWorkId.js)**: `getCommentsByArtWorkId(artId)` pulls comments for review section.
- **[src/lib/action/PostComments.js](file:///c:/assignment-10/client/src/lib/action/PostComments.js)**: `postComments(commentsData)` submits a new commentary reflection.
- **[src/lib/api/updateComment.js](file:///c:/assignment-10/client/src/lib/api/updateComment.js)**: `updateComment(id, comment)` updates existing comments.
- **[src/lib/api/deleteComment.js](file:///c:/assignment-10/client/src/lib/api/deleteComment.js)**: `deleteComment(id)` deletes specific comment review.

---

## 🗺️ Routing & Pages

```bash
src/app
├── (auth)
│   ├── login/page.jsx              # Credentials & Google Social Login form
│   └── register/page.jsx           # Account creation form
├── (dashboard)/dashboard
│   ├── layout.jsx                  # Contains sidebar navigation layouts
│   ├── admin
│   │   ├── analytics/page.jsx      # Analytics charts using Recharts
│   │   ├── artworks/page.jsx       # Approves or rejects artwork submissions
│   │   ├── transactions/page.jsx   # Tracks transaction logs
│   │   ├── users/page.jsx          # Admin user list table (role & plan modifiers)
│   │   └── page.jsx                # Admin Overview cards
│   ├── artist
│   │   ├── add-artwork/page.jsx    # Artist form to submit new art piece
│   │   ├── artworks/page.jsx       # Artist portfolio editor
│   │   ├── profile/page.jsx        # Artist profile configuration
│   │   ├── sales/page.jsx          # Sales transaction logs
│   │   └── page.jsx                # Artist Overview cards
│   └── user
│       ├── artworks/page.jsx       # Purchased artworks gallery
│       ├── profile/page.jsx        # Collector profile management
│       ├── purchases/page.jsx      # Collector transaction details
│       └── page.jsx                # Collector Overview dashboard
├── (public)
│   ├── artworks
│   │   ├── [id]/page.jsx           # Artwork detail page, investment card, and reviews
│   │   └── page.jsx                # Gallery collection with filters and sorting
│   ├── layout.jsx                  # Standard navigation headers and footers
│   └── page.js                     # Homepage containing Hero, Feature collections, and Artists
├── payment-success
│   └── page.jsx                    # Individual purchase verification redirect
├── subscription
│   ├── success
│   │   └── page.jsx                # Subscription validation redirect
│   └── page.jsx                    # Membership pricing cards page
├── favicon.ico
├── globals.css
└── providers.jsx                   # DarkMode theme wrapper
```

---

## 🛠️ Environment Variables Configuration

Create a `.env.local` or `.env` file in the root directory and supply the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_uri
DB_NAME=your_database_name

# Better Auth Configuration
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000 # Your client base url

# Social Logins
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Stripe Billing
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Backend Service Server URL
NEXT_PUBLIC_SERVER_URL=https://your-backend-api-url.com
```

---

## 🚀 Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samiul-hasan-tanzim/ArtHub-client-10.git
   cd ArtHub-client-10
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build the production package**:
   ```bash
   npm run build
   ```

5. **Start the production server**:
   ```bash
   npm run start
   ```
