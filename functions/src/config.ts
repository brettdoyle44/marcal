// Initialize app as admin
import * as admin from 'firebase-admin';
// Set environment variables
import * as functions from 'firebase-functions';

// Initialize Postmark
import { ServerClient } from 'postmark';
// Initialize Stripe
import Stripe from 'stripe';

admin.initializeApp();

// Export Storage and Firestore database and add custom settings
const storage = admin.storage();
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

/// Configure your environment: https://firebase.google.com/docs/functions/config-env
const stripeTestKey =
  functions.config().stripe?.test_key ?? ('Todo: configure' as any);
const stripeSecretKey = stripeTestKey; // TODO Replace test key with production key
const stripePublishableKey =
  functions.config().stripe?.publishable_key ?? ('Todo: configure' as any);
const stripeWebhookSecret =
  functions.config().stripe?.webhook_secret ?? ('Todo: configure' as any);

// Define Stripe product ids. Used to in subscriptionStatus helper function to set isPro or isHobby on user document
const hobbyProductId =
  functions.config().stripe?.hobby_product_id ?? ('Todo: configure' as any);
const proProductId =
  functions.config().stripe?.pro_product_id ?? ('Todo: configure' as any);

const stripe =
  new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' }) ??
  ('Todo: configure' as any);

// Postmark
const postMarkApiKey =
  functions.config().postmark?.api_key ?? ('Todo: configure' as any);
const welcomeTemplateId =
  functions.config().postmark?.welcome_template_id ??
  ('Todo: configure' as any);
const teamInviteTemplateId =
  functions.config().postmark?.team_invite_template_id ??
  ('Todo: configure' as any);

const postmarkClient = new ServerClient(postMarkApiKey);

export {
  stripeTestKey,
  stripeSecretKey,
  stripePublishableKey,
  stripeWebhookSecret,
  stripe,
  hobbyProductId,
  proProductId,
  postMarkApiKey,
  welcomeTemplateId,
  teamInviteTemplateId,
  postmarkClient,
  storage,
  db,
};
