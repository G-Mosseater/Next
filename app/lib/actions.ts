'use server';

export async function createInvoice(formData: FormData) {
  console.log('Server action triggered'); // Should appear in the terminal
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log('Form Data:', rawFormData); // Should log the form data
}
