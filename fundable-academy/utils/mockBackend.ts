// Mock Stripe Checkout Function
export const initiateCheckout = async (productName: string, price: number): Promise<void> => {
  console.log(`Initializing checkout for ${productName} at $${price}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate redirect
      window.location.href = `/#/success?product=${encodeURIComponent(productName)}`;
      resolve();
    }, 1500);
  });
};

// Email Templates (String generation)
export const getWelcomeEmail = (name: string, product: string) => {
  return `
    Subject: Welcome to Fundable Academy - ${product}

    Hi ${name},

    Congratulations on joining ${product}. You've taken a decisive step toward funding your vision.

    Access your materials here: [LINK]
    
    Upcoming Sessions:
    - Session 1: The Fundable Mindset
    - Session 2: The Narrative

    We are excited to see what you build.

    Best,
    Sephi Shapira
    Fundable Academy
  `;
};

export const getConfirmationEmail = (orderId: string, amount: string) => {
  return `
    Subject: Order Confirmation #${orderId}

    Thank you for your purchase.
    Amount: ${amount}
    
    A receipt has been generated. 
    
    Get started now: https://fundableacademy.com/login
  `;
};
